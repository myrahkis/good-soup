import React from "react";
import "./menu.css";

function Soup({ soup }) {
  console.log(soup.soldout);
  return (
    <li className={`soup ${soup.soldout ? 'sold-out' : ''}`}>
      <img src={soup.photo} alt={soup.name} />
      <div className="info">
        <h3>{soup.name}</h3>
        <p>{soup.ingredients}</p>
        <span>{soup.soldout ? 'SOLD OUT' : soup.price}</span>
      </div>
    </li>
  );
}

export default Soup;
