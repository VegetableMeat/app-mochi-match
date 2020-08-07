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
import RemoveButton from "./RemoveButton";

const Top = ({ state, actions, history }) => {
  const { roomListState, userState, searchState } = state;

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

  useEffect(() => {
    actions.getSearchGameTitleReq();
    actions.getSearchGameHardReq();
  }, [userState.user]);

  useEffect(() => {
    if (searchState.post.title !== null)
      actions.setRoomTitleQuery(searchState.post.title.id);
    else actions.setRoomTitleQuery(null);

    if (searchState.post.hard !== null)
      actions.setRoomHardQuery(searchState.post.hard.id);
    else actions.setRoomHardQuery(null);
  }, [searchState.post.title, searchState.post.hard]);

  return (
    <div id="top">
      <Header room="top" roomListState={roomListState} history={history} />
      <Body>
        <SideMenu>
          <div className="menu-wrapper menu-wrapper-1">
            <MenuHeader text="検索" />
            <MenuInnerWrapper>
              <Select
                menuPortalTarget={document.body}
                placeholder="タイトル"
                options={
                  searchState.get.title.length &&
                  searchState.get.title.map((data) => ({
                    value: data.game_title,
                    label: data.game_title,
                  }))
                }
                styles={TextAreaStyles()}
                onChange={(e) => {
                  actions.setSearchTitle(e.value);
                }}
                value={
                  searchState.post.title !== null
                    ? {
                        value: searchState.post.title.game_title,
                        label: searchState.post.title.game_title,
                      }
                    : null
                }
              />
              <Select
                menuPortalTarget={document.body}
                placeholder="ハード"
                options={
                  searchState.get.hard.length &&
                  searchState.get.hard.map((data) => ({
                    value: data.hard_name,
                    label: data.hard_name,
                  }))
                }
                styles={TextAreaStyles()}
                onChange={(e) => {
                  actions.setSearchHard(e.value);
                }}
                value={
                  searchState.post.hard !== null
                    ? {
                        value: searchState.post.hard.hard_name,
                        label: searchState.post.hard.hard_name,
                      }
                    : null
                }
              />
              <div className="button-area">
                <SerchButton action={actions.getRoomReq} room={roomListState} />
                <RemoveButton
                  actions={{
                    getRoomReq: actions.getRoomReq,
                    removeSearchTitle: actions.removeSearchTitle,
                    removeSearchHard: actions.removeSearchHard,
                  }}
                  room={roomListState}
                />
              </div>
            </MenuInnerWrapper>
          </div>
          <div className="menu-wrapper menu-wrapper-2">
            <MenuHeader text="お気に入りゲーム" />
            <MenuInnerWrapper>
              <FavoriteGames action={actions.setSearchTitle} />
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
