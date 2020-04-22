import React from 'react';

export default function CreateRoomButton({ createRoom }) {
    return (
        <div>
            <button onClick={() => createRoom("HOST NAME", "GAME NAME")}>ルーム作成</button>
        </div>
    )
}