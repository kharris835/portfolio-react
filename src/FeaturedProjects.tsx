import React from "react";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Dictionary App",
      description:
        "A dictionary application created for SheCodes React Add-on.  I used a dictionary API and am image API to render a word with its phonetics, definitions, synonyms, and images.",
      image: {
        src: "images/dictionary.png",
        height: 400,
        width: 449,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "https://ornate-sunshine-689bc4.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description: "abc123123",
      image: {
        src: "images/react-weather.png",
        height: 300,
        width: 455,
      },
      tools: "React, JavaScript, HTML, and CSS",
      website: "https://cute-unicorn-9fe4f6.netlify.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "abc",
      image: {
        src: "images/coming-soon.jpeg",
        height: 300,
        width: 300,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "/",
    },
  ];
  return (
    <div>
      <ul>
        {featuredProjects.map(function (project, index) {
          return (
            <ProjectCard
              key={project.id}
              project={project}
              standardLayout={index % 2 === 0}
            />
          );
        })}
      </ul>
    </div>
  );
}
