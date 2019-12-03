import React, { useState, useEffect } from "react";
import CustAlphabetList from "../../Components/CustAlphabetList/CustAlphabetList";

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
      <div className="alpha-list-wrap">
        <CustAlphabetList data={items} />
      </div>
    </div>
  );
}

export default Catalogue;
