import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-top">
        <i
          className="fas fa-angle-up"
          onClick={() => (document.documentElement.scrollTop = 0)}
        ></i>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Copyright(C) 2020 もちまっちげーみんぐ All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
