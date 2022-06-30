import React from "react";
import iconSearch from "../assets/search_icon.png";

import "./SearchBarDashBoard.css";

function SearchBarDashBoard() {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="search" className="input-search" placeholder="Search" />
        <div className="search-img">
          <img src={iconSearch} alt="" className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBarDashBoard;
