import React, { useState, useEffect } from "react";
import CustAlphabetList from "../../Components/CustAlphabetList/CustAlphabetList";
import { setDocumentTitle } from "../../Assets/Helpers";

function Catalogue() {
  setDocumentTitle("Dogs");

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
      <h2>Dogs</h2>
      <CustAlphabetList data={items} />
    </div>
  );
}

export default Catalogue;
