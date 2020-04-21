import React from 'react';

export default function CreateRoomButton({ createRoom }) {
    return (
        <div>
            <button onClick={() => createRoom()}>ルーム作成</button>
        </div>
    )
}