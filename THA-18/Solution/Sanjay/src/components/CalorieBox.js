import React from "react";
import "../styles/CalorieBox.css";

function CalorieBox(props) {
  const { title, calories } = props;
  const CAL_COLOR = calories >= 50 ? "red" : "green";
  return (
    <div className="box">
      <div className="color" style={{ backgroundColor: CAL_COLOR }}></div>
      <div className="content">
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          You have comsumed{" "}
          <strong style={{ color: CAL_COLOR }}>{calories}</strong> calories.
        </div>
        {calories >= 50 && (
          <p>
            <em>Note, you are consuming too much calories!</em>
          </p>
        )}
      </div>
    </div>
  );
}

export default CalorieBox;
