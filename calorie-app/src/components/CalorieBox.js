import React from "react";
import "../styles/CalorieBox.css";

function CalorieBox(props) {
  return (
    <div className="box">
      <div>{props.title}</div>
      <div>
        You have comsumed <strong>{props.calories}</strong> calories.
      </div>
    </div>
  );
}

export default CalorieBox;
