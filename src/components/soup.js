import React from "react";
import "./menu.css";

function Soup({ soup }) {
  return (
    <>
      <li className="soup">
        <img src={soup.photo} alt={soup.name} />
        <h3>{soup.name}</h3>
        <p>{soup.ingredients}</p>
        <span>{soup.price}</span>
      </li>
    </>
  );
}

export default Soup;
