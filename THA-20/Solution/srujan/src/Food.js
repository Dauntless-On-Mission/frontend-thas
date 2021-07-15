import React from "react";

const Food = ({ id, food, calories, deleteItem }) => {
  return (
    <div className="foods">
      <h2> {food}</h2>
      <h3> You have consumed {calories} calories </h3>
      <button className="btn" onClick={() => deleteItem(id)}>
        Delete
      </button>
    </div>
  );
};

export default Food;