import React from "react";
import "./commentsList.css";

function CommentsList({ commentsList }) {
  return (
    <div id="comments-list">
      <h3>All your ideas for this project : </h3>
      <div className="comments-container">
        {commentsList &&
          commentsList.map((comment) => (
            <div className="comment" key={comment.index}>
              <p>
                {" "}
                Comment by : {comment.text.firstname} {comment.text.lastname}
              </p>
              <p>{comment.text.comment}</p>
            </div>
          ))}
      </div>
      <div className="comments-container">
        <div className="comment">
          <p>Comment by : Anthony Gorski</p>
          <p>
            Super projet je peux apporter ma contribution et ajouter plein
            d'emojis ??
          </p>
        </div>
      </div>
    </div>
  );
}

export default CommentsList;
