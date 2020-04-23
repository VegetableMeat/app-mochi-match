import React from 'react';

export default function createRoomButton({ roomPlus }) {
    return (
        <div>
            <button onClick={() => roomPlus()}>ルーム作成</button>
        </div>
    )
}