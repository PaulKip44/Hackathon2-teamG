import React, { useState } from "react";
import "./FeedLikeButtonOne.css";

function LikeButtonCompoent() {
  const [isLike, setIsLike] = useState(false);
  const onLikeButtonClick = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="like-icon">
      <button
        className={`like-button ${isLike ? "liked" : ""}`}
        onClick={onLikeButtonClick}
        type="button"
      >
        Like
      </button>
    </div>
  );
}

export default LikeButtonCompoent;
