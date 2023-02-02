import React from "react";
import "../App.css";
import { AiFillSetting } from "react-icons/ai";

function SettingButton(props) {
  return (
    <button {...props} className="settings-button">
      <AiFillSetting size="55px" />
    </button>
  );
}

export default SettingButton;
