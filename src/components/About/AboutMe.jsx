import profilepic from "../../images/profilepic.jpg";
import "./index.css";

const AboutMe = () => {
  return (
    <div className="about-section">
      <div className="about-container">
        <img src={profilepic} alt="profile" className="profile-img" />
        <div className="about-details">
          <h2 className="about-header">About Me</h2>
          <div className="info-container">
            <p>Professional Info</p>
            <div>
              <ul>
                <li className="list-item">
                  Have worked in the Restaurant industry for the majority of my
                  career
                </li>
                <li className="list-item">
                  Began Software Engineering journey in fall of 2021
                  <ul>
                    <li className="nested-list-item">
                      Enrolled in Bootcamp in beginning of 2022
                    </li>
                    <li className="nested-list-item">
                      Graduated from Bootcamp in the beginning of 2023
                    </li>
                  </ul>
                </li>
                <li className="list-item">
                  Core stack consists of JavaScript/React, CSS, and HTML
                </li>
                <li className="list-item">
                  Some valuable skills I have learned are:
                  <ul>
                    <li className="nested-list-item">
                      How to read Documentation
                    </li>
                    <li className="nested-list-item">
                      How to ask questions until I understand the material
                    </li>
                    <li className="nested-list-item">
                      How to be comfortable with being outside my knowledge
                      'comfort zone'
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-container">
            <p>Personal Info</p>
            <ul>
              <li className="list-item">Father to a 6 year old daughter</li>
              <li className="list-item">
                Hobbies include Golf, being active, traveling, and watching
                movies/shows
              </li>
              <li className="list-item">
                Goals include getting into my first role as an Engineer,
                strengthening financial stability, and continuing to learn and
                grow as a person/parent/engineeer
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
