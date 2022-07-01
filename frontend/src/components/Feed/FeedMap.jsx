import React from "react";
import "./FeedOne.css";
import FeedOne from "./FeedOne";

function FeedMap(newsItem) {
  console.error(newsItem);
  return (
    <div>
      {[newsItem].map((item) => {
        return <FeedOne key={item.Id} item={item} />;
      })}
    </div>
  );
}

export default FeedMap;
