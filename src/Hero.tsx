import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const [goToContactPage, setGoToContactPage] = useState(false);

  if (goToContactPage) {
    return <Navigate to="/contact" />;
  }

  return (
    <div className="hero mt-5">
      <p className="mb-1">Hello! I'm</p>
      <h1 className="mb-0">Kelsie Harris</h1>
      <h2 className="mb-5">a front-end developer based in Colorado</h2>
      <button
        className="btn btn-branding"
        title="Contact Page Link"
        onClick={() => {
          setGoToContactPage(true);
        }}
      >
        Contact Me
      </button>
    </div>
  );
}
