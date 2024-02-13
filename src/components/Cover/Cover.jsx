// Move Profile pic into this component. About section will go underneath this section.
// All I want in this Cover component is my profile picture, a greeting, and my title.
import * as React from "react";
import profilepic from "../../images/profilepic.jpg";
import "./index.css";

const Cover = () => {
  return (
    <div className="cover">
      <img src={profilepic} alt="profile" className="profile-pic" />
      <div className="greeting">
        <p>Hello there!</p>
        <p>Welcome to my Portfolio</p>
        <p className="disclaimer">(still under construction 🔨😎)</p>
      </div>
    </div>
  );
};

export default Cover;
