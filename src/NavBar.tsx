import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    // <nav className="navbar navbar-expand-lg bg-white fixed-top">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="/">
    //       <img
    //         src="images/logo.png"
    //         alt="Flower logo"
    //         className="logo d-none d-lg-block"
    //         title="Homepage"
    //       />
    //       <img
    //         src="images/icon.png"
    //         alt="Flower icon"
    //         className="logo d-block d-lg-none"
    //         title="Homepage"
    //       />
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="/">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="/">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
