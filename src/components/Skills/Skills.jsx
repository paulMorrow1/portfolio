import React from "react";
import skills from "../../JSON/skills.json";
import "./index.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <p className="skills-header">skills.</p>
      <div className="skills">
        <div className="skills-container">
          <div className="frontend-container">
            <h2>frontend.</h2>
            {/* <div className="skill-container">
              {skills.map((skill) => {
                return (
                  <div key={skill.id} className="skill">
                    <div className="skill-name">{skill.name}</div>
                    <img src={skill.img} alt="skill" className="skill-logo" />
                  </div>
                );
              })}
            </div> */}
            <div className="skill-list">
              {skills.map((skill) => {
                return (
                  <ul>
                    <li>{skill.name}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="backend-container">
            <h2>backend.</h2>
            <ul className="skill-list">
              <li>SQL</li>
              <li>API Development</li>
              <li>Databases</li>
              <li>Debugging/testing</li>
            </ul>
          </div>
          <div className="softskills-container">
            <h2>soft skills.</h2>
            <ul>
              <li>Communication</li>
              <li>Efficiency</li>
              <li>Teamwork</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
        <div className="skills-image-container">
          {skills.map((skill) => (
            <img
              key={skill.id}
              src={skill.img}
              alt="skill logo"
              className="skill-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
