import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about row gap-2 align-items-center d-flex flex-wrap">
      <div className="col-md-7 mt-5">
        <p className="mb-1 about-eyebrow">About</p>
        <h1 className="mb-0">Kelsie Harris</h1>
        <h2 className="">
          a self-taught, front-end developer based in Colorado
        </h2>
      </div>
      <div className="col justify-content-center p-5">
        <img
          src="images/kelsie4.png"
          alt="Kelsie Harris Rowing"
          className="personal-image shadow rounded img-fluid"
          width="300"
          height="auto"
        />
      </div>
      <p className="about-description">
        Hi there! My name is Kelsie Harris, and I'm a self-taught front-end
        developer with a background in biomedical engineering and aerospace
        manufacturing. I've always been drawn to the intersection of technology
        and design, and I've found that web design is the perfect outlet for my
        creative and analytical skills.
      </p>
      <p className="about-description">
        My journey to becoming a front-end developer started back when I took a
        programming course in college. Although I did not pursue the path of web
        development, I held onto my interest over the years and started
        tinkering with web development at the start of 2022. Once learning about
        all of the new frameworks and libraries like React, I quickly fell in
        love with the world of web design and development. Since then, I have
        been teaching myself everything I can about front-end development.
      </p>
      <p className="about-description">
        I've taken online courses, read countless articles and tutorials, and
        built numerous projects to hone in my skills. I'm constantly seeking out
        new challenges and learning opportunities to improve my craft.
      </p>
      <p className="about-description border rounded bg-light">
        Some of the skills I've acquired include:
        <ul>
          <li>
            HTML/CSS: I'm proficient in creating responsive layouts and styling
            web pages with CSS.
          </li>
          <li>
            JavaScript: I've worked on several projects using vanilla JavaScript
            as well as popular frameworks like React.
          </li>
          <li>
            Git: I'm comfortable using Git for version control and collaboration
            with other developers.
          </li>
          <li>
            Accessibility: I'm committed to creating websites that are
            accessible to all users, and I've learned how to implement best
            practices for accessibility.
          </li>
        </ul>
      </p>
      <p className="about-description">
        In my previous roles as an engineer in medical device design and
        aerospace manufacturing, I developed a keen eye for detail and a deep
        understanding of the importance of quality control. These skills have
        carried over to my work in web design, where I take pride in creating
        pixel-perfect designs that are not only aesthetically pleasing but also
        highly functional and accessible.
      </p>
      <p className="about-description">
        In addition to my technical skills, I'm also a creative problem solver
        and a strong communicator. I love working with clients and stakeholders
        to understand their needs and goals, and I'm always looking for ways to
        push the boundaries of what's possible in web design.
      </p>
      <p className="about-description">
        I'm excited to continue growing and developing as a front-end developer,
        and I'm eager to bring my unique background and perspective to the world
        of web design. If you're interested in working together, please don't
        hesitate to get in touch!
      </p>
    </div>
  );
}
