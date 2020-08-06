import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

const Top = ({ state, actions, history }) => {
  const textEl = useRef(null);
  const [text, setText] = useState("");
  const { roomListState } = state;

  const location = useLocation();

  useEffect(() => {
    actions.getRoomReq(Number(query.get("page")));
  }, [location]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  useEffect(() => {
    if (query.get("page") != 0) return;
    actions.getRoomReq(Number(query.get("page")));
  }, [query.get("page")]);

  // TODO
  const onTextChange = () => {
    setText(textEl.current.value);
  };

  // TODO
  const handleKeyDown = (e) => {};

  return (
    <div id="top">
      <Header room="top" roomListState={roomListState} history={history} />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="検索" />
            <MenuInnerWrapper>
              <ShadowInputArea
                value={text}
                onChangeValue={onTextChange}
                handleKeyDown={handleKeyDown}
                ref={textEl}
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
