import React, { useEffect } from "react";
import Header from "../containers/HeaderContainer";
import Footer from "./Footer";
import Body from "./Body";
import MainBody from "./MainBody";
import SideMenu from "./SideMenu";
import MenuHeader from "./MenuHeader";
import MenuInnerWrappr from "./MenuInnerWrapper";
import UserPlate from "./UserPlate";
import ChatArea from "./../containers/ChatAreaContainer";
import ChatDisplay from "./ChatDisplay";
import SimpleProfile from "./SimpleProfile";
import ExitButton from "./ExitButton";
import UserStatus from "./UserStatus";
import GamePlate from "./GamePlate";
import Capacity from "./Capacity";
import RecrutimentText from "./RecrutimentText";
import BreakUnderLine from "./BreakUnderLine";
import HeadLine2 from "./HeadLine2";
import Modal from "../containers/ModalContainer";
import "./css/InTheRoom.css";

const InTheRoom = ({ state, history }) => {
  const { room, join_users } = state;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div id="in-the-room">
      <Header room="inTheRoom" history={history} />
      <Body>
        <SideMenu>
          <MenuHeader text="メンバー" />
          <MenuInnerWrappr>
            {join_users.map((data) => (
              <UserPlate
                key={data.user_id}
                icon={data.icon}
                name={data.user_name}
              />
            ))}
          </MenuInnerWrappr>
          <MenuHeader text="ルーム情報" />
          <MenuInnerWrappr>
            <GamePlate hard={room.hard} title={room.title} />
            <BreakUnderLine />
            <Capacity capacity={room.capacity} count={room.count} />
            <BreakUnderLine />
            <HeadLine2>募集テキスト</HeadLine2>
            <RecrutimentText text={room.text}></RecrutimentText>
            <BreakUnderLine />
          </MenuInnerWrappr>
        </SideMenu>
        <MainBody>
          <ChatArea />
        </MainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default InTheRoom;
