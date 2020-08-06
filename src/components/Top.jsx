import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Select from "react-select";
import Footer from "./Footer";
import Body from "./Body";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import CreateRoomButton from "./CreateRoomButton";
import PageNation from "./PageNation";
import MenuHeader from "./MenuHeader";
import MenuInnerWrapper from "./MenuInnerWrapper";
import Header from "../containers/HeaderContainer";
import RoomContents from "../containers/RoomContentsContainer";
import FavoriteGames from "../containers/FavoriteGamesContainer";
import PopularGames from "../containers/PopularGamesContainer";
import Modal from "../containers/ModalContainer";
import ShadowInputArea from "./ShadowInputArea";
import SerchButton from "./SerchButton";
import { DisappearedLoading } from "react-loadingg";
import "./css/Top.css";
import TextAreaStyles from "./custom/TextArea";

const Top = ({ state, actions, history }) => {
  const textEl = useRef(null);
  const [text, setText] = useState("");
  const { roomListState, userState, searchState } = state;

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  useEffect(() => {
    if (query.get("page") != 0) return;
    actions.getRoomReq(Number(query.get("page")));
  }, [query.get("page")]);

  useEffect(() => {
    actions.getSearchGameTitleReq();
    actions.getSearchGameHardReq();
  }, [userState.user]);

  // TODO
  const onTextChange = () => {
    setText(textEl.current.value);
  };

  // TODO
  const handleKeyDown = (e) => {};

  return (
    <div id="top">
      <Header roomListState={roomListState} history={history} />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="検索" />
            <MenuInnerWrapper>
              <Select
                menuPortalTarget={document.body}
                placeholder="ゲームタイトルを入力"
                options={
                  searchState.get.title.length &&
                  searchState.get.title.map((data) => ({
                    value: data.game_title,
                    label: data.game_title,
                  }))
                }
                styles={TextAreaStyles()}
                onChange={(e) => {}}
              />
              <Select
                menuPortalTarget={document.body}
                placeholder="ハードを入力"
                options={
                  searchState.get.hard.length &&
                  searchState.get.hard.map((data) => ({
                    value: data.hard_name,
                    label: data.hard_name,
                  }))
                }
                styles={TextAreaStyles()}
                onChange={(e) => {}}
              />
              <SerchButton />
            </MenuInnerWrapper>
          </div>
          <div className="menu-wrapper menu-wrapper-2">
            <MenuHeader text="お気に入りゲーム" />
            <MenuInnerWrapper>
              <FavoriteGames />
            </MenuInnerWrapper>
          </div>
          <div className="menu-wrapper menu-wrapper-3">
            <MenuHeader text="人気ゲーム" />
            <MenuInnerWrapper>
              <PopularGames />
            </MenuInnerWrapper>
          </div>
        </SideMenu>
        <MainBody>
          {roomListState.loadingFlag && (
            <DisappearedLoading color="rgb(123, 216, 245)" />
          )}
          <RoomContents history={history} />
        </MainBody>
      </Body>
      <Link to="/roomcreation">
        <CreateRoomButton />
      </Link>
      <PageNation
        actions={actions}
        history={history}
        roomListState={roomListState}
      />
      <Footer />
      <Modal />
    </div>
  );
};

export default Top;
