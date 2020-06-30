import React from 'react';
import ShadowInputArea from './ShadowInputArea';
import AddButton from './AddButton';
import UserIcon from './UserIcon';
import UserName from './UserName';

import './css/ChatArea.css';

export default function ChatArea(props) {
  return (
    <div className="chat-wrapper">
    <div className="chat-area">
      <div className="chat-text-area">
        <p className="chat-start-message">チャットが開始されました</p>

        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
        <div className="message-wrapper">
          <UserIcon />
          <UserName name="TestName" />
          <div className="message bg-green">よろしくお願いします！</div>
        </div>
      </div>
    </div>
    <div className="chat-send-area">
        <ShadowInputArea placeholder="メッセージ" />
        <button className="message-send-button">送信</button>
    </div>
    </div>
  );
}
