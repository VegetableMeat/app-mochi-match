import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import CenterMainBody from "./CenterMainBody";
import Modal from "../containers/ModalContainer";
import BodyHeader from "./BodyHeader";
import ShadowTextArea from "./ShadowTextArea";
import HeadLine1 from "./HeadLine1";
import "./css/SignUp.css";

const SignUp = () => {
  return (
    <div id="sign-up">
      <Header />
      <Body>
        <CenterMainBody>
          <BodyHeader>新規登録</BodyHeader>
          <div className="wrapper">
            <HeadLine1>ユーザー名</HeadLine1>
            <div className="left-space-wrapper">
              <ShadowTextArea />
            </div>
          </div>
          <div className="wrapper">
            <HeadLine1>メールアドレス</HeadLine1>
            <div className="left-space-wrapper">
              <ShadowTextArea />
            </div>
          </div>
          <div className="accept-area">
            <p>
              <Link>利用規約</Link>
              に同意のうえ、「利用規約に同意して登録」ボタンを押してください。
            </p>
            <button>利用規約に同意して登録</button>
          </div>
        </CenterMainBody>
      </Body>
      <Footer />
      <Modal />
    </div>
  );
};

export default SignUp;
