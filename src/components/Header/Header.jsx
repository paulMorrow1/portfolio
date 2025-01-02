import * as React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; //need to add FaFileAlt to the imports for Resume icon
import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-info">
        <p className="author">Paul Morrow</p>
        <div className="socialmedia-logos">
          {/*Need to get the links to open in a different window instead of redirecting me from portfolio*/}
          <a
            href="https://github.com/paulMorrow1"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <FaGithub />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/paul-morrow-swd/"
            target="_blank"
            rel="noreferrer"
            className="linkedin"
          >
            <FaLinkedin />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
      <nav className="nav-container">
        <NavLink
          to={"/"}
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : null
          }
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : null
          }
          className="nav-link"
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          style={({ isActive }) =>
            isActive ? { textDecoration: "underline" } : null
          }
          className="nav-link"
        >
          Projects
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
