import React from "react";
import FeedLikeButtonOne from "./FeedLikeButtonOne";
import "./FeedOne.css";

function FeedOne({ item }) {
  console.error(item);
  return (
    <div className="feed">
      <div className="avatar-feed">
        <img src={item.newsItem.image} alt="avatar" />
      </div>
      <div className="feed-content">
        <p>{item.newsItem.contents}</p>
      </div>
      <div>
        <FeedLikeButtonOne />
      </div>
    </div>
  );
}

export default FeedOne;
