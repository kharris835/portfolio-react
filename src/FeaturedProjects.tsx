import React from "react";
import ProjectCard from "./ProjectCard";

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Dictionary App",
      description:
        "A dictionary application created for the SheCodes React Add-on course.  Leveraging dictionary and image APIs, I integrated the functionality to render words, along with their phonetics, definitions, synonyms, and images.",
      image: {
        src: "images/dictionary.png",
        height: "auto",
        width: 448,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "https://ornate-sunshine-689bc4.netlify.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "A weather application created for the SheCodes Plus course.  I utilized a weather API to render the current weather and daily forecast for your current location or a searched location.",
      image: {
        src: "images/react-weather.png",
        height: "auto",
        width: 455,
      },
      tools: "React, JavaScript, HTML, and CSS",
      website: "https://cute-unicorn-9fe4f6.netlify.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A portfolio designed to showcase my range of projects and skills.  This website is a comprehensive representation of my abilities, highlighting my achievements and techincal competencies.",
      image: {
        src: "images/coming-soon.jpeg",
        height: "auto",
        width: 300,
      },
      tools: "React, TypeScript, HTML, and CSS",
      website: "/",
    },
  ];
  return (
    <div>
      {featuredProjects.map(function (project, index) {
        return (
          <ProjectCard
            key={project.id}
            project={project}
            standardLayout={index % 2 === 0}
          />
        );
      })}
    </div>
  );
}
