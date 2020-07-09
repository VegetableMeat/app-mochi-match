import React, { Component } from 'react';
import ShadowInputArea from './ShadowInputArea';
import AddButton from './AddButton';
import UserIcon from './UserIcon';
import UserName from './UserName';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import './css/ChatArea.css';

class ChatArea extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this.state = {
      value: ''
    };
  }

  handleChangeValue = e =>
    this.setState({ value: e.target.value });

  callback = () =>
    this.props.history.push("/")

  render() {
    const { state, actions, history } = this.props;

    let chatLog = [];
    for (var i in state.chatLog) {
      chatLog.push(
        <div className="message-wrapper" key={state.chatLog[i].created_at}>
          <UserIcon />
          <UserName name={state.chatLog[i].name} />
          <div className="message bg-green">{state.chatLog[i].message}</div>
        </div>
      );
    }

    chatLog.sort(function (a, b) {
      if (a.key < b.key) {
        return -1;
      }
      if (a.key > b.key) {
        return 1;
      }
      return 0;
    });

    return (
      <div className="chat-wrapper" >
        <div className="chat-area">
          <div className="chat-text-area">
            <p className="chat-start-message">チャットが開始されました</p>
            {chatLog}
          </div>
        </div>
        <div className="chat-send-area">
          <ShadowInputArea
            placeholder="メッセージ"
            value={this.state.value}
            onChangeValue={this.handleChangeValue}
          />
          <button
            className="message-send-button"
            onClick={() => actions.createChatpostListRequest(state.room.room_id, state.value)}>
            送信
            </button>
        </div>
        <div>
          <button
            className="message-send-button"
            onClick={() => actions.leaveRoomRequest(state.room, history)}>
            仮の退室ボターン
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatArea)
