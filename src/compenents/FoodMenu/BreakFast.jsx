import React from "react";
import "./BreakFast.css"; // Import the CSS file for styling

const BreakFast = () => {
  return (
    <div className="menu-container">
      <div className="menu-section">
        <h2 className="menu-heading">BREAKFAST</h2>
        <ul className="menu-list">
          <li>
            <span className="item-name">Idli (2)</span>{" "}
            <span className="item-price">40</span>
          </li>
          <li>
            <span className="item-name">Single Idli</span>{" "}
            <span className="item-price">25</span>
          </li>
          <li>
            <span className="item-name">Vada</span>{" "}
            <span className="item-price">35</span>
          </li>
          <li>
            <span className="item-name">Vada (2)</span>{" "}
            <span className="item-price">60</span>
          </li>
          <li>
            <span className="item-name">Idli(2) Vada(1)</span>{" "}
            <span className="item-price">70</span>
          </li>
          <li>
            <span className="item-name">Single Idli Vada</span>{" "}
            <span className="item-price">50</span>
          </li>
          <li>
            <span className="item-name">Upma</span>{" "}
            <span className="item-price">30</span>
          </li>
          <li>
            <span className="item-name">Sheera (Kesari Bath)</span>{" "}
            <span className="item-price">40</span>
          </li>
          <li>
            <span className="item-name">Chow Chow Bath</span>{" "}
            <span className="item-price">60</span>
          </li>
          <li>
            <span className="item-name">Puri Kurma</span>{" "}
            <span className="item-price">60</span>
          </li>
          <li>
            <span className="item-name">Buns (2)</span>{" "}
            <span className="item-price">60</span>
          </li>
          <li>
            <span className="item-name">Rice Bath</span>{" "}
            <span className="item-price">50</span>
          </li>
          <li>
            <span className="item-name">Onion Pakoda</span>{" "}
            <span className="item-price">100</span>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h2 className="menu-heading">DOSA</h2>
        <ul className="menu-list">
          <li>
            <span className="item-name">Plain Dosa</span>{" "}
            <span className="item-price">50</span>
          </li>
          <li>
            <span className="item-name">Masala Dosa</span>{" "}
            <span className="item-price">70</span>
          </li>
          <li>
            <span className="item-name">Kali Dosa</span>{" "}
            <span className="item-price">60</span>
          </li>
          <li>
            <span className="item-name">Set Dosa</span>{" "}
            <span className="item-price">70</span>
          </li>
          <li>
            <span className="item-name">Onion Dosa</span>{" "}
            <span className="item-price">70</span>
          </li>
          <li>
            <span className="item-name">Onion Uttappa</span>{" "}
            <span className="item-price">80</span>
          </li>
          <li>
            <span className="item-name">Rava Plain Dosa</span>{" "}
            <span className="item-price">70</span>
          </li>
          <li>
            <span className="item-name">Rava Masala Dosa</span>{" "}
            <span className="item-price">80</span>
          </li>
          <li>
            <span className="item-name">Mysore Masala Dosa</span>{" "}
            <span className="item-price">90</span>
          </li>
          <li>
            <span className="item-name">Ghee Masala Dosa</span>{" "}
            <span className="item-price">100</span>
          </li>
          <li>
            <span className="item-name">Butter Masala Dosa</span>{" "}
            <span className="item-price">90</span>
          </li>
          <li>
            <span className="item-name">Ghee Rost Masala</span>{" "}
            <span className="item-price">100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreakFast;
