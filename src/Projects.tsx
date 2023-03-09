import React from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Dictionary App",
      image: {
        src: "images/dictionary.png",
        height: "auto",
        width: 360,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "https://ornate-sunshine-689bc4.netlify.app/",
    },
    {
      id: 2,
      title: "React Weather App",
      image: {
        src: "images/react-weather.png",
        height: "auto",
        width: 360,
      },
      tools: "React, JavaScript, HTML, and CSS",
      website: "https://cute-unicorn-9fe4f6.netlify.app/",
    },
    {
      id: 3,
      title: "React Portfolio (v3)",
      image: {
        src: "images/coming-soon.jpeg",
        height: "auto",
        width: 360,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "/",
    },
    {
      id: 4,
      title: "Vanilla Portfolio (v2)",
      image: {
        src: "images/portfolio-v2.png",
        height: "auto",
        width: 360,
      },
      tools: "JavaScript, HTML, and CSS",
      website: "/",
    },
    {
      id: 5,
      title: "Vanilla Weather App",
      image: {
        src: "images/weather.png",
        height: "auto",
        width: 360,
      },
      tools: "JavaScript, HTML, and CSS",
      website: "/",
    },
    {
      id: 6,
      title: "Portfolio (v1)",
      image: {
        src: "images/portfolio.png",
        height: "auto",
        width: 360,
      },
      tools: "HTML and CSS",
      website: "/",
    },
    {
      id: 7,
      title: "Shiba Website",
      image: {
        src: "images/shiba.png",
        height: "auto",
        width: 360,
      },
      tools: "HTML and CSS",
      website: "/",
    },
    {
      id: 8,
      title: "Pokédex",
      image: {
        src: "images/coming-soon.jpeg",
        height: "auto",
        width: 360,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "/",
    },
  ];
  return (
    <div className="projects">
      <div className="mt-5 text-center">
        <p className="mb-1 projects-eyebrow">Take a look at what</p>
        <h1 className="">I've been working on!</h1>
      </div>
      {projects.map(function (project) {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
}
