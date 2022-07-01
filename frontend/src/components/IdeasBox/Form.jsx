import React from "react";
import "./form.css";
import { toast } from "react-toastify";

function Form({ setInputText, inputText, commentsList, setCommentsList }) {
  const inputTextHandler = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    if (!inputText.firstname || !inputText.lastname || !inputText.comment) {
      toast.warning("All fields are required");
    } else {
      setCommentsList([...commentsList, { text: inputText }]);
      toast.success("Comment sent !");
      setInputText({
        firstname: "",
        lastname: "",
        comment: "",
      });
    }
  };

  return (
    <div>
      <form id="ideasForm">
        <h3>Post an idea !</h3>

        <label htmlFor="firstname">
          Firstname
          <input
            value={inputText.firstname}
            className="inputForm"
            id="input_firstname"
            onChange={inputTextHandler}
            type="text"
            name="firstname"
            placeholder="Obiwan"
          />
        </label>

        <label htmlFor="lastname">
          Lastname
          <input
            value={inputText.lastname}
            className="inputForm"
            id="input_lastname"
            onChange={inputTextHandler}
            type="text"
            name="lastname"
            placeholder="Kenobi"
          />
        </label>

        <textarea
          value={inputText.comment}
          className="inputForm"
          id="input_comment"
          onChange={inputTextHandler}
          type="text"
          rows="7"
          name="comment"
          placeholder="Enter your comment"
        />

        <button
          type="button"
          className="btn-blue"
          onClick={submitCommentHandler}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
