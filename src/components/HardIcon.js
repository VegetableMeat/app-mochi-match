import React from 'react';
import './css/HardIcon.css';

export default function UserIcon({ selectFlg }) {
  if(selectFlg == "true") {
    return (
      <div className="hard-icon">
        <div className="select"></div>
        <div className="icon"></div>
      </div>  
    )
  }else{
    return (
      <div className="hard-icon">
        <div className="icon"></div>
      </div>   
    )
  }
}