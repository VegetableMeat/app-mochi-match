import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router";
import ShadowInputArea from "./ShadowInputArea";
import UserIcon from "./UserIcon";
import UserName from "./UserName";
import "./css/ChatArea.css";

const ChatArea = ({ actions, state }) => {
  const { roomState } = state;
  const { room, chatLog } = roomState;

  const [isLast, setIsLast] = useState(false);
  const [chatLogMounted, setChatLogMounted] = useState(false);
  const [scrollTop, setScrollTop] = useState(1);
  const [beforeScrollHeight, setBeforeScrollHeight] = useState(0);
  const [beforeChatLogLength, setBeforeChatLogLength] = useState(0);
  const [latestMessageID, setLatestMessageID] = useState("");
  const [text, setText] = useState("");
  const [newMessageflg, setNewMessageFlg] = useState(false);
  const [newMessageCnt, setNewMessageCnt] = useState(0);
  const [beforeMessageCnt, setBeforeMessageCnt] = useState(0);

  const chatlogEl = useRef(null);
  const textEl = useRef(null);

  /**
   * チャットログのElementの定義
   * チャットログの自動スクロール
   */
  const onScroll = () => {
    setScrollTop(chatlogEl.current.scrollTop);
  };

  useEffect(() => {
    if (roomState.room.room_id == null) return;
    actions.getChatpostListRequest(room.room_id, 20, null);
  }, [roomState.room.room_id]);

  useEffect(() => {
    chatlogEl.current.addEventListener("scroll", onScroll);
    if (roomState.chatLog.length === 0) return;
    if (beforeChatLogLength >= roomState.chatLog.length) {
      setIsLast(true);
      return;
    }
    if (!chatLogMounted) {
      chatlogEl.current.scrollTop = 99999;
      setLatestMessageID(chatLog.slice(-1)[0].id);
      setChatLogMounted(true);
      return;
    }
    if (latestMessageID === chatLog.slice(-1)[0].id) {
      setBeforeChatLogLength(chatLog.length);
      setBeforeMessageCnt(chatLog.length - newMessageCnt);
      const diffScrollHeight =
        chatlogEl.current.scrollHeight - beforeScrollHeight;
      chatlogEl.current.scrollTop = diffScrollHeight;
      return;
    } else if (chatlogEl.current.scrollHeight > 627) {
      setNewMessageCnt(chatLog.length - beforeMessageCnt);
      setLatestMessageID(chatLog.slice(-1)[0].id);
      setNewMessageFlg(true);
    }
    if (chatlogEl.current.scrollHeight - chatlogEl.current.scrollTop < 1000) {
      chatlogEl.current.scrollTop = 99999;
    }
  }, [roomState.chatLog]);

  useEffect(() => {
    if (scrollTop > chatlogEl.current.scrollHeight - 650) {
      setNewMessageCnt(0);
      setBeforeMessageCnt(chatLog.length);
      setNewMessageFlg(false);
      return;
    }
    if (scrollTop === 0 && !isLast) {
      setBeforeScrollHeight(chatlogEl.current.scrollHeight);
      actions.getChatpostListRequest(room.room_id, 20, chatLog[0].created_at);
    }
  }, [scrollTop]);

  /**
   * チャットログのレンダリング
   */
  let chatLogs = [];
  for (let i in chatLog) {
    chatLogs.push(
      <div className="message-wrapper" key={chatLog[i].created_at}>
        <UserIcon value={chatLog[i].icon} />
        <UserName name={chatLog[i].name} />
        <div className="message bg-green">{chatLog[i].message}</div>
      </div>
    );
  }

  /**
   * チャットメッセージのElementとStateの定義
   * チャットメッセージ作成時のハンドリング
   */
  const onTextChange = () => {
    setText(textEl.current.value);
  };

  const sendChatpost = (room_id, text) => {
    if (text === "") return;
    actions.createChatpostListRequest(room_id, text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      sendChatpost(room.room_id, text);
    }
  };

  return (
    <div className="chat-wrapper">
      <div className="chat-area" ref={chatlogEl}>
        <div className="chat-text-area">
          <p className="chat-start-message">チャットが開始されました</p>
          {chatLogs}
        </div>
      </div>
      <div className="chat-send-area">
        {newMessageflg && (
          <p
            className="new-chatlog-message"
            onClick={() => (chatlogEl.current.scrollTop = 99999)}
          >
            新しいメッセージが{newMessageCnt}件あります
            <div className="arrow"></div>
          </p>
        )}
        <ShadowInputArea
          placeholder="メッセージ"
          value={text}
          onChangeValue={onTextChange}
          handleKeyDown={handleKeyDown}
          ref={textEl}
        />
        <button
          className="message-send-button"
          onClick={() => sendChatpost(room.room_id, text)}
        >
          送信
        </button>
      </div>
    </div>
  );
};

export default withRouter(ChatArea);
