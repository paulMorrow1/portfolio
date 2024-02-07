import React from "react";
import skills from "../../JSON/skills.json";
import "./index.css";

const Skills = () => {
  return (
    <div className="skills-section">
      <p className="skills-header">Skills:</p>
      <div className="skills">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className="skill">
              <div className="skill-name">{skill.name}</div>
              <img src={skill.img} alt="skill" className="skill-logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
