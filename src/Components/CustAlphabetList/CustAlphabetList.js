import React from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import AlphabetList from "react-alphabet-list";

const alphabetListCust = props => {
  return (
    <AlphabetList
      className="alpha-list"
      data={props.data}
      generateFn={(item, index) => {
        return (
          // <Tag color="#ccc" key={item + index}>
          //   {/* <Icon type="plus" style={{ margin: "0 5px 0 0" }} /> */}
          //   {item}
          // </Tag>
          <Link
            className="alphabet-list-tag"
            key={index}
            to={`/catalogue/${slugify(item)}`}
          >
            {item}
          </Link>
        );
      }}
    />
  );
};

export default alphabetListCust;
