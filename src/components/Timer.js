import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingButton from "./SettingButton";

function Timer() {
  const red = "red";
  const green = "green";

  return (
    <div className="timer">
      <CircularProgressbar
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "white",
          pathColor: red,
          trailColor: "rgba(255,255,255, .2)",
        })}
      />
      <div className="timer-button-container">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="timer-button-container">
        <SettingButton />
      </div>
    </div>
  );
}

export default Timer;
