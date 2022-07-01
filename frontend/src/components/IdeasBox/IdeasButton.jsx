import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "./ideasButton.css";

function IdeasButton({ isForm, setIsForm }) {
  return (
    <div id="ideasButton">
      <p className="text">Ideas Box</p>
      <div
        aria-hidden="true"
        className="plus-btn"
        onClick={() => setIsForm(!isForm)}
        onKeyDown={() => setIsForm(!isForm)}
      >
        <BsPlusCircleFill size={32} />
      </div>
    </div>
  );
}

export default IdeasButton;
