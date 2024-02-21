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
        <div className="calculator-container">
          <iframe
            title="calculator"
            src="projects/calculator/index.html"
            width={460}
            height={660}
            className="iframe-calculator"
          />
          <p className="calculator-description">{projects[0].description}</p>
        </div>
        <div className="rock-paper-scissors-container">
          <iframe
            title="rock paper scissors"
            src="projects/rock_paper_scissors/index.html"
            width={700}
            height={400}
            className="iframe-rock-paper-scissors"
          />
          <p className="rock-paper-scissors-description">
            {projects[1].description}
          </p>
        </div>
        <div className="quiz-container">
          <iframe
            title="Quiz"
            src="projects/quiz/index.html"
            width={700}
            height={500}
            className="iframe-quiz"
          />
          <p className="quiz-description">{projects[2].description}</p>
        </div>
        <div className="movie-catalog-container">
          <iframe
            title="movie catalog"
            src="https://movie-catalog-eight-tau.vercel.app/"
            width={700}
            height={700}
            className="iframe-movie-catalog"
          />
          <p className="movie-catalog-description">{projects[3].description}</p>
        </div>
        <div className="star-wars-container">
          <iframe
            title="Star Wars"
            src="https://star-wars-three-alpha.vercel.app/"
            width={700}
            height={700}
            className="iframe-star-wars"
          />
          <p className="star-wars-description">{projects[4].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
