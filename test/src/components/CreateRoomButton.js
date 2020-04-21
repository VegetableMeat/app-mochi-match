import React from 'react';

export default function CreateRoomButton({ room, roomPlus }) {
    return (
        <div>
            <button onClick={() => roomPlus()}>ルーム作成</button>
            {room}
        </div>
    )
}