import React from "react";
import "./ProjectCard.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card container p-5 bg-light my-5 rounded">
      <div
        className={`row d-flex gap-5 flex-wrap justify-content-between ${
          props.standardLayout ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`col text-center text-lg-${
            props.standardLayout ? "start" : "end"
          }`}
        >
          <h2 className="fs-1">{props.project.title}</h2>
          <p className="text-muted">{props.project.description}</p>
          <p>Built with {props.project.tools}</p>
          <a
            href={props.project.website}
            className="btn btn-branding mt-2 website-link"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div
          className={`col d-flex justify-content-center justify-content-lg-${
            props.standardLayout ? "end" : "start"
          }`}
        >
          <img
            alt={props.project.title}
            className="shadow border rounded p-1"
            height={props.project.image.height}
            src={props.project.image.src}
            width={props.project.image.width}
          />
        </div>
      </div>
    </div>
  );
}
