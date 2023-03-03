import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="mt-5">
      <div className="hero">
        <p className="mb-1">Hello! I'm</p>
        <h1 className="mb-0">Kelsie Harris</h1>
        <h2 className="mb-5">a front-end developer based in Colorado</h2>
        <a
          href="/contact.html"
          className="btn btn-branding"
          title="Contact Page Link"
        >
          Contact Me
        </a>
      </div>

      <p className="text-center m-5">
        Check out a few of my featured projects!
      </p>
    </div>
  );
}
