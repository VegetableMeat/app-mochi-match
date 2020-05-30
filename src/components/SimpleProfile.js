import React from 'react';
import './css/SimpleProfile.css';
import UserIcon from './UserIcon';
import UserName from './UserName';

export default function SimpleProfile({ icon, name }) {
  return (
    <div className="simple-profile">
      <UserIcon icon={icon}/>
      <UserName name={name}/>
    </div>   
  )
}