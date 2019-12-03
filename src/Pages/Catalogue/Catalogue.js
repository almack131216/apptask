import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
import AlphabetList from "react-alphabet-list";
import "./Catalogue.css";
// import { Tag } from "antd";
// import "antd/dist/antd.css";
import "./_cust_antd.css";

function Catalogue() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list");

    const items = await data.json();
    console.log("[Catalogue.js] fetchItems...", items);
    setItems(items.message);
  };

  return (
    <div>
      <h2>Catalogue</h2>
      <AlphabetList
        className="alpha-list"
        data={items}
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

      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/catalogue/${slugify(item)}`}>{item}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Catalogue;
