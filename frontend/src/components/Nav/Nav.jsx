import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./nav.css";

function Nav() {
  return (
    <div id="navbar">
      <img src={logo} className="logo" alt="apside logo" />
      <ul>
        <li>Map</li>
        <li>
          <Link to="/backlog">Projects</Link>
        </li>
        <li>Newsfeed</li>
        <li>Profil</li>
      </ul>
    </div>
  );
}

export default Nav;
