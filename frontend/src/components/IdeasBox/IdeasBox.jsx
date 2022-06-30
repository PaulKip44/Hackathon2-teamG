import React, { useState } from "react";
import "./ideasBox.css";
import IdeasButton from "./IdeasButton";
import Form from "./Form";
import Comments from "./CommentsList";

function IdeasBox() {
  const [inputText, setInputText] = useState({
    firstname: "",
    lastname: "",
    comment: "",
  });

  const [commentsList, setCommentsList] = useState([]);
  const [isForm, setIsForm] = useState(false);

  return (
    <div id="ideasBox">
      <IdeasButton isForm={isForm} setIsForm={setIsForm} />

      {isForm ? (
        <Form
          inputText={inputText}
          setInputText={setInputText}
          commentsList={commentsList}
          setCommentsList={setCommentsList}
        />
      ) : null}

      <Comments
        inputText={inputText}
        setInputText={setInputText}
        commentsList={commentsList}
        setCommentsList={setCommentsList}
      />
    </div>
  );
}

export default IdeasBox;
