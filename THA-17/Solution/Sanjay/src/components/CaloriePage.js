import React from "react";
import "../styles/CaloriePage.css";
import CalorieBox from "./CalorieBox";

const calorieArr = [
  {
    title: "Pizza",
    calories: 56
  },
  {
    title: "Pizza",
    calories: 56
  },
  {
    title: "Pizza",
    calories: 56
  },
  {
    title: "Pizza",
    calories: 56
  },
  {
    title: "Pizza",
    calories: 56
  },
  {
    title: "Pizza",
    calories: 56
  }
];

function CaloriePage() {
  return (
    <div className="page">
      <div className="container">
        {calorieArr.map(element => (
          <CalorieBox title={element.title} calories={element.calories} />
        ))}
      </div>
    </div>
  );
}

export default CaloriePage;
