import React from 'react';
import UserIcon from './UserIcon';
import UserName from './UserName';
import DetailsButton from './DetailsButton';
// import './css/UserPlate.css';

export default function UserPlate(props) {
    return (
        <div className="user-plate">
            {props.children}
        </div>
    )
}



