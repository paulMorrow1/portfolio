import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./components/About/AboutMe";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import "./index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      {/* <Header /> */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
