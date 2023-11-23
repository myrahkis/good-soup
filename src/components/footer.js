import React from "react";
import "./footer.css";

function Footer() {
  const curHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = curHour >= openHour && curHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We're currently open! Come by!</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>Come back at 10am!</p>
      )}
    </footer>
  );
}

export default Footer;
