import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact mt-5">
      <div className="content">
        <h2 className="contact-eyebrow mb-3">Let's work together!</h2>
        <h1 className="mb-5">Contact Me</h1>
        <h3>Email</h3>
        <p className="text-muted">
          <a
            href="mailto:kharris835@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            title="Email Kelsie"
          >
            kharris835@gmail.com
          </a>
        </p>
        <h3>GitHub</h3>
        <p className="text-muted">
          <a
            href="https://github.com/kharris835"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            title="GitHub Profile"
          >
            kharris835
          </a>
        </p>
        <h3>LinkedIn</h3>
        <p className="text-muted">
          <a
            href="https://www.linkedin.com/in/kelsieharris/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
            title="LinkedIn Profile"
          >
            kelsieharris
          </a>
        </p>
      </div>
    </div>
  );
}
