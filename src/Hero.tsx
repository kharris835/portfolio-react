import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="hero mt-5">
      <p className="mb-1">Hello! I'm</p>
      <h1 className="mb-0">Kelsie Harris</h1>
      <h2 className="mb-5">a front-end developer based in Colorado</h2>
      <div className="d-flex gap-2 justify-content-center">
        <button
          className="btn btn-branding btn-hero"
          title="GitHub Link"
          onClick={() => window.open("https://github.com/kharris835")}
        >
          GitHub
        </button>
        <button
          className="btn btn-branding"
          title="Contact Page Link"
          onClick={() => navigate("/contact")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}
