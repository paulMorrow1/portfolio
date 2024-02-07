import React from "react";
import "./index.css";

// use project json file to map over projects array and render
// possibly render as a link or button (when user clicks a modal opens with
// screenshots of that project)
// or just display the screenshots underneath each respective project

// levels.fyi

const Projects = () => {
  return (
    <div className="projects-section">
      <p className="projects-header">Projects</p>
      <div className="projects">
        <ul>Movie Catalog</ul>
        <ul>Star Wars</ul>
        <ul>ToDo List Compilation</ul>
        <ul>Calculator</ul>
        <ul>Rock, Paper, Scissors!</ul>
      </div>
    </div>
  );
};

export default Projects;
