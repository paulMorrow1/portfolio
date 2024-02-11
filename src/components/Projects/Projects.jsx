import React from "react";
import projects from "../../JSON/projects.json";
import "./index.css";

// use project json file to map over projects array and render
// possibly render as a link or button (when user clicks a modal opens with
// screenshots of that project)
// or just display the screenshots underneath each respective project

// levels.fyi
// caniuse.com

const Projects = () => {
  return (
    <div className="projects-section">
      <p className="projects-header">Projects</p>
      <div className="projects">
        {projects.map((project) => {
          return <div key={project.id}>{project.name}</div>;
        })}
      </div>
      <div className="iframes">
        <iframe
          title="calculator"
          src="projects/calculator/index.html"
          width={460}
          height={660}
          className="iframe-calculator"
        />

        <iframe
          title="rock paper scissors"
          src="projects/rock_paper_scissors/index.html"
          width={700}
          height={700}
          className="iframe-rock-paper-scissors"
        />

        <iframe
          title="Quiz"
          src="projects/quiz/index.html"
          width={700}
          height={700}
          className="iframe-quiz"
        />

        <iframe
          title="movie catalog"
          src="projects/movie_catalog/index.html"
          width={700}
          height={700}
          className="iframe-movie-catalog"
        />
        <iframe
          title="Star Wars"
          src="projects/star_wars/index.html"
          width={700}
          height={700}
          className="iframe-star-wars"
        />
      </div>
    </div>
  );
};

export default Projects;
