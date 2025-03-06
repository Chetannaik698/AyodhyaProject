import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h4 className="brand-name">
            <Link to="/">Ayodhya Family Restaurant</Link>
          </h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                FOOD MENU
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/refreshment">
                REFRESHMENT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vegmain">
                VEG MAIN COURSE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stater">
                VEG STARTER
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
