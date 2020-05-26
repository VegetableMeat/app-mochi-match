import React, { Component } from 'react';
import RoomCard from './RoomCard';
import './css/RoomContents.css';

export default class RoomContents extends Component {
  componentDidMount() {
    this.props.actions.getRoomReq()
  }
  render() {
    const { data, loadingFlag } = this.props.data
    return (
      <div className="room-contents">
        {data.map((data) => (<RoomCard key={data.room_id}>
            owner_id: {data.owner_id}<br/>
            icon: {data.icon}<br/>
            name: {data.name}<br/>
            hard: {data.hard}<br/>
            title: {data.title}<br/>
            capacity: {data.capacity}<br/>
            text: {data.text}<br/>
            created: {data.created}<br/>
            start: {data.start}
          </RoomCard>))}
      </div>
    )
  }
}