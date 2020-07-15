import React from "react";
import "./css/ReservationTime.css";

const ReservationTime = ({ start }) => {
  return (
    <div className="reservation-time">
      <div>{start}</div>
    </div>
  );
};

export default ReservationTime;
