import React from "react";
import "./css/PageNation.css";

const PageNation = ({ pageCount }) => {
  let pageNation = [];
  for (let i = 0; i < pageCount; i++) {
    pageNation.push(
      <button className="number" select>
        {i + 1}
      </button>
    );
  }
  console.log(pageNation[0]);
  return (
    <div className="pagenation">
      <button className="prev">
        <i className="fas fa-angle-left"></i>
      </button>
      {pageNation}
      <button className="next">
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default PageNation;
