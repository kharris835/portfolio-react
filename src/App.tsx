import React from "react";
import { Routes, Route } from "react-router";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
