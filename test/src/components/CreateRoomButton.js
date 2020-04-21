import React from 'react';

export default function CreateRoomButton({ roomPlus }) {
    return (
        <div>
            <button onClick={() => roomPlus()}>ルーム作成</button>
        </div>
    )
}