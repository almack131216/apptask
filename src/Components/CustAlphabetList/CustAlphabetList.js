import React from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import AlphabetList from "react-alphabet-list";

const alphabetListCust = props => {
  return (
    <div className="alpha-list-wrap">
      <AlphabetList
        className="alpha-list"
        data={props.data}
        generateFn={(item, index) => {
          return (
            <Link
              className="alphabet-list-tag small"
              key={index}
              to={{
                pathname: props.parentSlug + slugify(item),
                state: {
                  fromCatalogue: true,
                  parentPage: props.parentSlug
                }
              }}
            >
              {item}
            </Link>
          );
        }}
      />
    </div>
  );
};

export default alphabetListCust;
