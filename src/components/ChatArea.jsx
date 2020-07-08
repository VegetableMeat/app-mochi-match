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

  callback = () => {
    this.props.history.push("/")
  }

  render() {
    console.log(this.props)
    const { state, actions } = this.props;
    return (
      <div className="chat-wrapper" >
        <div className="chat-area">
          <div className="chat-text-area">
            <p className="chat-start-message">チャットが開始されました</p>
            {state.chatLog.map((data) => (
              <div className="message-wrapper" key={data.created_at}>
                <UserIcon />
                <UserName name={data.user} />
                <div className="message bg-green">{data.message}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-send-area">
          <ShadowInputArea placeholder="メッセージ" />
          <button className="message-send-button">送信</button>
        </div>
        <div>
          <button className="message-send-button" onClick={() => actions.leaveRoomRequest(state.room, this.props.history)}>
            仮の退室ボターン
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatArea)