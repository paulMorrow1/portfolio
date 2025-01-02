import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Introduction = () => {
  return (
    <div>
      <h2 className="intro-title">intro.</h2>
      <p className="intro-body">
        Thank you for visiting my Portfolio! I have been a Software Developer
        for 2 years now since going through a career change. I am still looking
        for my first professional gig, so in the mean time I have been working
        on personal projects while I continue to hone my skills. You can visit
        my
        <span className="link">
          <Link to="/about"> 'About Me' </Link>
        </span>
        page for further details about my journey thus far, or check out my
        <span className="link">
          <Link to="/projects"> 'Projects' </Link>
        </span>
        page for a quick run through of some of my projects! If you'd like to
        reach out my contact info can be found at the bottom of the page!
      </p>
    </div>
  );
};

export default Introduction;
