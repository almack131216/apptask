import React, { useState, useEffect } from "react";
import CustAlphabetList from "../../Components/CustAlphabetList/CustAlphabetList";
import { setDocumentTitle, apiGetItems } from "../../Assets/Helpers";

function Catalogue(props) {
  const apiPath = apiGetItems();
  setDocumentTitle(props.title);

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(apiPath);

    const items = await data.json();
    console.log("[Catalogue.js] fetchItems...", items);
    setItems(items.message);
  };

  return (
    <div>
      {props.title ? <h2>{props.title}</h2> : ""}
      <CustAlphabetList data={items} parentSlug={props.slug} />
    </div>
  );
}

export default Catalogue;
