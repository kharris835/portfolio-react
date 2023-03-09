import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="text-center mb-5">
      <a
        href="mailto:kharris835@gmail.com"
        target="_blank"
        rel="noreferrer"
        title="Email Kelsie"
      >
        <i className="fa-solid fa-envelope circle-icon"></i>
      </a>
      <a
        href="https://github.com/kharris835"
        target="_blank"
        rel="noreferrer"
        title="GitHub Profile"
      >
        <i className="fa-brands fa-github fa-circle circle-icon"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/kelsieharris/"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn Profile"
      >
        <i className="fa-brands fa-linkedin circle-icon"></i>
      </a>
      <div className="footer">
        <div className="mt-2">
          This
          <a
            href="https://github.com/kharris835/portfolio-react"
            target="_blank"
            rel="noreferrer"
            className="text-decoration-none m-0"
            title="GitHub Profile"
          >
            {" "}
            open-source{" "}
          </a>
          website was coded by Kelsie Harris.
        </div>
      </div>
    </div>
  );
}
