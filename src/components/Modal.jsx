import React from 'react';
import './css/Modal.css';
import ModalMold from './ModalMold';

export default function Modal({ state, actions }) {
  if (!state.showFlag) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <ModalMold state={state} actions={actions} />
        <div className="modal-close-button" onClick={() => actions.showModalFalse()}>
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}
