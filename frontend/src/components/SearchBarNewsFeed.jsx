import React, { useState } from "react";
import searchButton from "../assets/search_icon.svg";
import "./SearchBarNewsFeed.css";

function SearchBarNewsFeed() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <form action="search">
      <div className="search-bar">
        <input
          className="search-bar"
          type="search"
          name="search"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit" className="search-button">
          <img
            src={searchButton}
            alt="icon recherche"
            className="search-icon"
          />
        </button>
      </div>
    </form>
  );
}

export default SearchBarNewsFeed;
