import React from "react";

import "./css/BodyHeader.css";

export default function BodyHeader(props) {
  return <div className="body-header">{props.children}</div>;
}
