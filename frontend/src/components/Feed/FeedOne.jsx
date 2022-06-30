import React from "react";
import FeedLikeButtonOne from "./FeedLikeButtonOne";
import "./FeedOne.css";

// eslint-disable-next-line react/prop-types
function FeedOne({ image, contents }) {
  return (
    <div className="feed">
      <div className="avatar-feed">
        <img src={image} alt="avatar" />
      </div>
      <div className="feed-content">
        <p>{contents}</p>
      </div>
      <div>
        <FeedLikeButtonOne />
      </div>
    </div>
  );
}

export default FeedOne;
