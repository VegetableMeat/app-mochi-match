import React, { useEffect } from "react";
import "./css/PageNation.css";

const PageNation = ({ actions, history, roomListState }) => {
  const { selectPage, pageCount } = roomListState;

  const attachClass = (i) => {
    let baseClass = ["number"];
    if (selectPage === i) {
      baseClass.push("select");
    }
    return baseClass.join(" ");
  };

  const handleOnClick = (i) => {
    if (selectPage === i) return;
    history.push(`/?page=${i}`);
    actions.getRoomReq(i);
    document.documentElement.scrollTop = 0;
    rendering();
  };

  const handlePrev = () => {
    if (selectPage <= 1) return;
    history.push(`/?page=${selectPage - 1}`);
    actions.getRoomReq(selectPage - 1);
    document.documentElement.scrollTop = 0;
    rendering();
  };

  const handleNext = () => {
    if (selectPage >= pageCount) return;
    history.push(`/?page=${selectPage + 1}`);
    actions.getRoomReq(selectPage + 1);
    document.documentElement.scrollTop = 0;
    rendering();
  };

  let pageNation;
  const rendering = () => {
    pageNation = [];

    let start = 1;
    if (3 < selectPage) {
      start = selectPage - 2;
    }
    if (pageCount - selectPage < 3) {
      start = pageCount - 4;
    }
    if (pageCount < 4) {
      start = 1;
    }

    let limit;
    selectPage < 4 ? (limit = 4) : (limit = selectPage + 1);
    if (pageCount - selectPage < 2) {
      limit = start + 3;
    }
    if (pageCount < 4) {
      limit = 5 - pageCount;
    }

    if (2 < pageCount) {
      for (let i = start + 1; i <= limit; i++) {
        pageNation.push(
          <button
            key={i}
            className={attachClass(i)}
            onClick={handleOnClick.bind(this, i)}
          >
            {i}
          </button>
        );
      }
    }

    pageNation.unshift(
      <button
        key={1}
        className={attachClass(1)}
        onClick={handleOnClick.bind(this, 1)}
      >
        {1}
      </button>
    );

    if (1 < pageCount) {
      pageNation.push(
        <button
          key={pageCount}
          className={attachClass(pageCount)}
          onClick={handleOnClick.bind(this, pageCount)}
        >
          {pageCount}
        </button>
      );
    }
  };

  useEffect(() => {
    rendering();
  }, [selectPage]);

  rendering();

  return (
    <div className="pagenation">
      <button className="prev" onClick={handlePrev}>
        <i className="fas fa-angle-left"></i>
      </button>
      {pageNation}
      <button className="next" onClick={handleNext}>
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default PageNation;
