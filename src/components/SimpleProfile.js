import React from 'react';
import './css/SimpleProfile.css';
import UserIcon from './UserIcon';
import UserName from './UserName';

export default function SimpleProfile() {
  return (
    <div className="simple-profile">
      <UserIcon />
      <UserName />
    </div>   
  )
}