import React, { Component } from 'react';
import RoomCard from './RoomCard';
import './css/RoomContents.css';

export default class RoomContents extends Component {
  componentDidMount() {
    this.props.actions.getRoomReq()
  }
  render() {
    const { data, loadingFlag } = this.props
    return (
      <div className="room-contents">
        {data.map((data) => (<RoomCard key={data.room_id} data={data} />))}
      </div>
    )
  }
}