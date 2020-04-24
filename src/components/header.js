import React from 'react';
import './css/Header.css';

export default function Header({ title }) {
  return (
    <div id="header">
      {title}
    </div>
  )
}