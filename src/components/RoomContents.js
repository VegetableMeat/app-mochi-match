import React, { Component } from 'react';
import RoomCard from './RoomCard';
import './css/RoomContents.css';

export default class RoomContents extends Component {
  componentDidMount() {
    this.props.roomActions.getRoomReq()
  }
  render() {
    const { data, loadingFlag, commonActions } = this.props
    return (
      <div className="room-contents">
        {data.map((data) => (<RoomCard key={data.room_id} data={data} onClick={commonActions} />))}
      </div>
    )
  }
}