import React from 'react';
import UserIcon from './UserIcon';
import UserName from './UserName';
import DetailsButton from './DetailsButton';
import './css/UserPlate.css';

export default function UserPlate({ icon, name }) {
  return (
    <div className="user-plate">
      <UserIcon icon={icon} />
      <UserName name={name} />
    </div>
  );
}