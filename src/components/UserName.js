import React from 'react';
import './css/UserName.css';

export default function UserName({ name }) {
  return (
    <div className="user-name">
      {name}
    </div>   
  )
}