import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./ideasButton.css";

function IdeasButton({ isForm, setIsForm }) {
  return (
    <div id="ideasButton">
      <p className="text">Ideas Box</p>
      <button
        type="button"
        className="plus-btn"
        onClick={() => setIsForm(!isForm)}
      >
        <BsPlusCircleFill />
      </button>
    </div>
  );
}

export default IdeasButton;
