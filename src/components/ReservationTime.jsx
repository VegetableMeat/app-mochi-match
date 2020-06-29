import React from 'react';
import './css/ReservationTime.css';

export default function ReservationTime({ start }) {
  return (
    <div className="reservation-time">
      <div>{start}</div>
    </div>
  );
}
