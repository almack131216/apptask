import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Catalogue() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/");

    const items = await data.json();
    console.log("[Catalogue.js] fetchItems...", items.results);
    setItems(items.results);
  };

  return (
    <div>
      <h2>Catalogue</h2>
      <ul>
        {items.map((item, index) => (
          // let itemName = slugify(item.name);

          <li key={index}>
            <Link to={`/catalogue/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogue;
