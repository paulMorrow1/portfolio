import React from "react";
import AboutMe from "./components/About/AboutMe";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Cover />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
