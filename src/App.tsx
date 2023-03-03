import React from "react";
import "./App.css";
import Footer from "./Footer";
import Hero from "./Hero";
import MainContent from "./MainContent";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
      </header>
      <main>
        <MainContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
