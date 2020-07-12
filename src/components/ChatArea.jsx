import React, { useRef, useState, useEffect } from 'react';
import ShadowInputArea from './ShadowInputArea';
import UserIcon from './UserIcon';
import UserName from './UserName';
import { withRouter } from 'react-router';
import './css/ChatArea.css';

const ChatArea = ({ actions, history, state }) => {

  const { roomState, userState } = state;

  /**
   * チャットログのElementの定義
   * チャットログの自動スクロール
   */
  const chatlogEl = useRef(null);
  useEffect(() => {
    if (chatlogEl.current.scrollTop === 0) {
      chatlogEl.current.scrollTop = 99999;
    };
    if (chatlogEl.current.scrollHeight - chatlogEl.current.scrollTop < 1000) {
      chatlogEl.current.scrollTop = 99999;
    };
  }, [roomState.chatLog]);

  /**
   * チャットログのソートとレンダリング
   */
  let chatLog = [];
  for (let i in roomState.chatLog) {
    chatLog.push(
      <div className="message-wrapper" key={roomState.chatLog[i].created_at}>
        <UserIcon />
        <UserName name={roomState.chatLog[i].name} />
        <div className="message bg-green">{roomState.chatLog[i].message}</div>
      </div>
    );
  };

  chatLog.sort(function (a, b) {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
    return 0;
  });

  /**
   * チャットメッセージのElementとStateの定義
   * チャットメッセージ作成時のハンドリング
   */
  const textEl = useRef(null);
  const [text, setText] = useState("");
  const onTextChange = () => {
    setText(textEl.current.value);
  };

  const sendChatpost = (room_id, text) => {
    if (text === "") return;
    actions.createChatpostListRequest(room_id, text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { sendChatpost(roomState.room.room_id, text) };
  };

  /**
   * ルーム退室ボタン押下時のハンドリング
   */
  const onLeaveButtonClick = () => {
    if (roomState.room.owner_id === userState.user.user_id) {
      actions.showModalTrue("ROOM_DELETION", "room", roomState.room);
    } else {
      actions.leaveRoomRequest(state.room, history);
    };
  };

  return (
    <div className="chat-wrapper" >
      <div className="chat-area" ref={chatlogEl}>
        <div className="chat-text-area">
          <p className="chat-start-message">
            チャットが開始されました
          </p>
          {chatLog}
        </div>
      </div>
      <div className="chat-send-area">
        <ShadowInputArea
          placeholder="メッセージ"
          value={text}
          onChangeValue={onTextChange}
          handleKeyDown={handleKeyDown}
          ref={textEl} />
        <button
          className="message-send-button"
          onClick={() => sendChatpost(roomState.room.room_id, text)}>
          送信
        </button>
      </div>
      <div>
        <button
          className="message-send-button"
          onClick={() => onLeaveButtonClick()}>
          仮の退室ボターン
        </button>
      </div>
    </div>
  );

};

export default withRouter(ChatArea);
