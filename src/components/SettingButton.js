import React from "react";
import "../App.css";
import { AiFillSetting } from "react-icons/ai";

function SettingButton() {
  return (
    <div className="settings">
      <AiFillSetting size="55px" />
      <p>Settings</p>
    </div>
  );
}

export default SettingButton;
