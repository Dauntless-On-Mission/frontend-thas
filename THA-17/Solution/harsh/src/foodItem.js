import React from "react";

const FoodItem = ({ item }) => {
  const { food, calorie } = item;
  return (
    <div className="fooditem">
      <h2>
        {food} contains {calorie} calories
      </h2>
    </div>
  );
};

export default FoodItem;
