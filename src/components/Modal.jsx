import React from "react";

import ModalMold from "./ModalMold";
import "./css/Modal.css";

const Modal = ({ state, actions }) => {
  if (!state.modalState.showFlag) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <ModalMold state={state} actions={actions} />
        <div
          className="modal-close-button"
          onClick={() => actions.showModalFalse()}
        >
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export default Modal;
