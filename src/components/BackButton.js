import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "../App.css";

function BackButton(props) {
  return (
    <button {...props} className="settings-button">
      <IoIosArrowBack size="55px" />
    </button>
  );
}

export default BackButton;
