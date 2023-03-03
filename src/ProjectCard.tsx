import React from "react";

export default function ProjectCard(props) {
  return (
    <div
      className={`container border p-5 m-2 rounded d-flex gap-5 flex-wrap justify-content-between ${
        props.standardLayout ? "" : "flex-row-reverse"
      }`}
    >
      <div className="row">
        <div className="col">
          <h2>{props.project.title}</h2>
          <p className="text-muted text-justify">{props.project.description}</p>
          <p>Built with {props.project.tools}</p>
          <a
            href={props.project.website}
            className="btn btn-branding mt-5"
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="col">
          <img
            src={props.project.image.src}
            alt={props.project.title}
            height={props.project.image.height}
            width={props.project.image.width}
          />
        </div>
      </div>
    </div>
  );
}
