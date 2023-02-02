import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";

function PlayButton(props) {
  return (
    <button {...props}>
      <AiFillPlayCircle size="55px" />
    </button>
  );
}

export default PlayButton;
