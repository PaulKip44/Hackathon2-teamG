import React from "react";
import "./FeedOne.css";
import FeedOne from "./FeedOne";

function FeedMap({ feeds }) {
  return (
    <div>
      {feeds.map(({ id, image, contents }) => (
        <FeedOne key={id} image={image} contents={contents} />
      ))}
    </div>
  );
}

export default FeedMap;
