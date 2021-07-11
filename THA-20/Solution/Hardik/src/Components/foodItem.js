const FoodItem = ({ item, deleteHandler }) => {
  const { id, food, calorie } = item;
  return (
    <div className="fooditem">
      <h2>
        {food} contains {calorie} calories
      </h2>
      <button className="delete-btn" onClick={() => deleteHandler(id)}>
        delete
      </button>
    </div>
  );
};

export default FoodItem;
