import React from "react";
import parse from "html-react-parser";
import { setDocumentTitle } from "../../Assets/Helpers";

const genericPage = props => {
  setDocumentTitle(props.title);

  return (
    <div>
      {props.title ? <h2>{props.title}</h2> : ""}
      {props.body ? <div className="body">{parse(props.body)}</div> : ""}
    </div>
  );
};

export default genericPage;
