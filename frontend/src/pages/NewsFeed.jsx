import React from "react";
import FeedMap from "../components/Feed/FeedMap";
import Nav from "../components/Nav/Nav";
import SearchBarDashBoard from "../components/SearchBarDashBoard";
import DataFeed from "../components/Feed/DataFeed";
import "./NewsFeed.css";

function NewsFeed() {
  return (
    <div>
      <div className="feed-dashboard">
        <div>
          <Nav />
        </div>
        <div className="feed-search">
          <SearchBarDashBoard />
          <FeedMap feeds={DataFeed} />
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
