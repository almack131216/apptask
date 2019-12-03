import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log("[ItemDetail.js] useEffect -> match...", match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    var url = `https://dog.ceo/api/breed/${match.params.name}/images`;
    const data = await fetch(url);

    const item = await data.json();
    console.log("[ItemDetail.js] fetchItem...", item.message);
    setItem(item.message);
  };

  return (
    <div>
      <h2>{match.params.name}</h2>
      {item.slice(0, 4).map((imgSrc, index) => (
        <li key={index}>
          <img src={imgSrc} width="100px" />
        </li>
      ))}
    </div>
  );
}

export default ItemDetail;
