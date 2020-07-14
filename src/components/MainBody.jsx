import React from "react";
import Modal from "../containers/ModalContainer";
import "./css/MainBody.css";

const MainBody = (props) => {
  return (
    <div className="main-body">
      {props.children}
      <Modal />
    </div>
  );
};

export default MainBody;
