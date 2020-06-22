import React from 'react';


export default function DangerButton({ text }) {
    return (
        <button className="danger-button color-red">
            {text}
        </button>
    )
}