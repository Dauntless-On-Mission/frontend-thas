import React from "react";
import "../Styles/list.css";
import CalorieBox from "./calorieBox"

let arr = [
  {
    food: "Pizza 🍕",
    calorie: 59,
  },
  {
    food: "Burger 🍔",
    calorie: 500,
  },
  {
    food: "Coffe ☕",
    calorie: 59,
  },
  {
    food: "French Fries 🍟",
    calorie: 59,
  },
  {
    food: "Beer 🍻",
    calorie: 200,
  },
  {
    food: "Shampain 🍾",
    calorie: 179,
  },
  {
    food: "Potty 💩",
    calorie: 15,
  },
  {
    food: "Noodles 🍜",
    calorie: 220,
  },
  {
    food: "Coding 💻",
    calorie: 0,
  }
];

function List() {
  return (
    <>
      <div className="container">
        <div className="board">
            <div className="card">
                {arr.map(value => (
                   <CalorieBox food={value.food} calorie={value.calorie}/>
                ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default List;
