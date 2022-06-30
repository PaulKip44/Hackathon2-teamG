import React from "react";
import "./FeedOne.css";
import FeedOne from "./FeedOne";

// eslint-disable-next-line react/prop-types
function FeedMap({ feeds }) {
  return (
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      {feeds.map(({ id, image, contents }) => (
        <FeedOne key={id} image={image} contents={contents} />
      ))}
    </div>
  );
}

export default FeedMap;
