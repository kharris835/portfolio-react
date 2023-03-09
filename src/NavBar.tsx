import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navigation fixed-top bg-white shadow">
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center mt-2 mb-2">
          <a href="/">
            <img
              src="images/logo.png"
              alt="Flower logo"
              className="logo d-none d-lg-block"
              title="Homepage"
            />
            <img
              src="images/icon.png"
              alt="Flower icon"
              className="logo d-block d-lg-none"
              title="Homepage"
            />
          </a>
          <ul className="m-0 p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
