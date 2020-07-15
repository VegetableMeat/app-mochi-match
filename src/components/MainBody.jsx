import React from "react";
import Modal from "../containers/ModalContainer";
import "./css/MainBody.css";

const MainBody = ({ children }) => {
  return (
    <div className="main-body">
      {children}
      <Modal />
    </div>
  );
};

export default MainBody;
