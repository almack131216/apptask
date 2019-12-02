import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
  useEffect(() => {
    fetchItem();
    console.log("[ItemDetail.js] useEffect -> match...", match);
  }, []);

  const [item, setItem] = useState({
    sprites: {}
  });

  const fetchItem = async () => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
    );

    const item = await data.json();
    console.log("[ItemDetail.js] fetchItem...", item);
    setItem(item);
  };

  return (
    <div>
      <img src={item.sprites.front_default} />
      <h4>{item.name}</h4>
    </div>
  );
}

export default ItemDetail;
