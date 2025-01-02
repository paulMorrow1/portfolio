import React from "react";
import projects from "../../JSON/projects.json";
import "./index.css";
import calculator from "./project_images/calculator/calculator.png";
import finalHole from "./project_images/golf_app/finalhole.png";
import holeinfo1 from "./project_images/golf_app/holeinfo1.png";
import holeinfo2 from "./project_images/golf_app/holeinfo2.png";
import roundStats from "./project_images/golf_app/roundstats.png";
import scorecardhome from "./project_images/golf_app/scorecardhome.png";
import scoreModal from "./project_images/golf_app/scoremodal.png";
import details from "./project_images/netflix_clone/details.png";
import favoritedPage from "./project_images/netflix_clone/favoritedPage.png";
import filtering from "./project_images/netflix_clone/filtering.png";
import homepage from "./project_images/netflix_clone/homepage.png";
import menuImage from "./project_images/netflix_clone/menu.png";
import pagination from "./project_images/netflix_clone/pagination.png";
import dropdown from "./project_images/quiz/dropdown.png";
import landingPage from "./project_images/quiz/landingPage.png";
import questions from "./project_images/quiz/questions.png";
import results from "./project_images/quiz/results.png";
import playerchoice from "./project_images/rock_paper_scissors/playerchoice.png";
import startgame from "./project_images/rock_paper_scissors/startgame.png";
import tiegame from "./project_images/rock_paper_scissors/tiegame.png";
import winner from "./project_images/rock_paper_scissors/winner.png";
import autocomplete1 from "./project_images/star_wars/autocomplete1.png";
import autocomplete2 from "./project_images/star_wars/autocomplete2.png";
import characterResults from "./project_images/star_wars/characterresults.png";
import searchPage from "./project_images/star_wars/searchpage.png";
import statsChart from "./project_images/star_wars/statschart.png";

// display the screenshots underneath each respective project
// add Golf app and ReviewCity app to projects
//

// levels.fyi
// caniuse.com

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title calculator">{projects[0].name}</h3>
          <div>
            <img
              src={calculator}
              alt="calculator"
              style={{
                height: "200px",
                width: "200px",
                margin: "0 auto",
                boxShadow: "5px 5px 2px 1px rgba(0, 0, 0, 0.2)",
                border: "2px solid rgb(111, 108, 108)",
              }}
            />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[0].description}</p>
          <p className="project-link">
            <a href="https://calculator-seven-liard.vercel.app" target="_blank">
              Project Link
            </a>
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title rock-paper-scissors">{projects[1].name}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img
              src={startgame}
              alt="start screen to choose single player or two player game"
              className="rpsimage"
            />
            <img
              src={playerchoice}
              alt="player choices of rock, paper, scissors"
              className="rpsimage"
            />
            <img src={winner} alt="winner of the game" className="rpsimage" />
            <img src={tiegame} alt="tie game" className="rpsimage" />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[1].description}</p>
          <p className="project-link">
            <a
              href="https://rock-paper-scissors-xi-lake.vercel.app"
              target="_blank"
            >
              Project Link
            </a>
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title quiz">{projects[2].name}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img src={landingPage} alt="quiz home page" className="quizimage" />
            <img
              src={dropdown}
              alt="dropdown to select amount of questions"
              className="quizimage"
            />
            <img src={questions} alt="quiz questions" className="quizimage" />
            <img
              src={results}
              alt="final results of quiz"
              className="quizimage"
            />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[2].description}</p>
          <p className="project-link">
            <a href="https://math-quiz-black.vercel.app" target="_blank">
              Project Link
            </a>
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title movie-catalog">{projects[3].name}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img src={homepage} className="netflixcloneimage" />
            <img src={pagination} className="netflixcloneimage" />
            <img src={details} className="netflixcloneimage" />
            <img src={filtering} className="netflixcloneimage" />
            <img src={menuImage} className="netflixcloneimage" />
            <img src={favoritedPage} className="netflixcloneimage" />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[3].description}</p>
          <p className="project-link">
            <a
              href="https://movie-catalog-eight-tau.vercel.app/"
              target="_blank"
            >
              Project Link
            </a>
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title star-wars">{projects[4].name}</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img src={searchPage} className="starwars-image" />
            <img src={autocomplete1} className="starwars-image" />
            <img src={autocomplete2} className="starwars-image" />
            <img src={characterResults} className="starwars-image" />
            <img src={statsChart} className="starwars-image" />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[4].description}</p>
          <p className="project-link">
            <a href="https://star-wars-three-alpha.vercel.app/" target="_blank">
              Project Link
            </a>
          </p>
        </div>
      </div>
      <div className="project-container">
        <div className="project-name images">
          <h3 className="title golf-scorecard">Golf Scorecard</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <img src={scorecardhome} className="golfappimage" />
            <img src={scoreModal} className="golfappimage" />
            <img src={holeinfo1} className="golfappimage" />
            <img src={holeinfo2} className="golfappimage" />
            <img src={finalHole} className="golfappimage" />
            <img src={roundStats} className="golfappimage" />
          </div>
        </div>
        <div className="project-description">
          <p className="description">{projects[5].description}</p>
          <p className="project-link">
            <a href="https://golfapp-phi.vercel.app/" target="_blank">
              Project Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
