import React from "react";
import "./footer.css";

function Footer() {
  const curHour = new Date().getHours();
  const openHour = 10;
  const closeHour = 23;
  const isOpen = curHour >= openHour && curHour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? "We're currently open! Come by!" : "Come back at 10am!"}{" "}
    </footer>
  );
}

export default Footer;
