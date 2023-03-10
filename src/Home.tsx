import React from "react";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <p className="text-center mt-5 fs-5">
        Take a look at my featured projects!
      </p>
      <div className="d-flex justify-content-center">
        <FeaturedProjects />
      </div>
    </div>
  );
}
