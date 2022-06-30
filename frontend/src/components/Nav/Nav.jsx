import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import endpoint from "../../services/endpoint";
import CurrentUserContext from "../../context/userContext";

import logo from "../../assets/logo.png";
import "./nav.css";

function Nav() {
  const { user, setUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleDisconnect = () => {
    endpoint
      .get("/auth/logout")
      .then(() => {
        localStorage.clear();
        setUser(undefined);
        navigate("/");
        toast.warning("Vous êtes déconnecté !");
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <div>
      {user && (
        <div id="navbar">
          <img src={logo} className="logo" alt="apside logo" />
          <ul>
            <li>Map</li>
            <li>Projects</li>
            <li>Newsfeed</li>
            <li>Profil</li>
            <li>
              <NavLink to="/" className="nav-link" onClick={handleDisconnect}>
                <div className="sidenav-item">
                  <button className="button-no-style" type="submit">
                    Logout
                  </button>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
