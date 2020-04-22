import React from 'react';
import './Body.css';
import RoomCard from './RoomCard';

export default function Body({rooms}) {
    return (
        <div id="body">
            BODY
            <div>
                <ul>
                    {
                        rooms.map(
                            room => (
                                <RoomCard key={room.id} {...room} />
                            )
                        ) 
                    }
                </ul>
            </div>
        </div>
    )
}