import React from "react";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />;
      <p className="text-center m-5">
        Check out a few of my featured projects!
      </p>
      <div className="d-flex justify-content-center">
        <FeaturedProjects />
      </div>
    </div>
  );
}
