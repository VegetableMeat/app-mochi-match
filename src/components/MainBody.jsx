import React from 'react';

import Modal from '../containers/ModalContainer';
import './css/MainBody.css';

export default function MainBody(props) {
  return <div className="main-body">{props.children}<Modal /></div>;
}
