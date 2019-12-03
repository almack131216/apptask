import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import slugify from "react-slugify";

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
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/catalogue/${slugify(item)}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
