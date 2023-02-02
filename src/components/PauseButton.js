import React from "react";
import "../App.css";
import { AiFillPauseCircle } from "react-icons/ai";

function PauseButton(props) {
  return (
    <button {...props}>
      <AiFillPauseCircle size="55px" />
    </button>
  );
}

export default PauseButton;
