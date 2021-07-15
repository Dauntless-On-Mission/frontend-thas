import { useState } from 'react';
import './App.css';
import Food from "./Food";

const items = [
  {
    id: 1,
    food: "Biryani",
    calories: 380
  },
  {
    id: 2,
    food: "Pizza",
    calories: 266
  },

  {
    id: 3,
    food: "Burger",
    calories: 295
  },

  {
    id: 4,
    food: "Shawarma",
    calories: 394
  },
  {
    id: 5,
    food: "Butter Chicken",
    calories: 290
  },
  {
    id: 6,
    food: "Gulab Jamun",
    calories: 300
  },
  {
    id: 7,
    food: "Jalebi",
    calories: 155
  },
  {
    id: 8,
    food: "Palak Paneer",
    calories: 340
  },
  {
    id: 9,
    food: "Butter Naan",
    calories: 260
  }
];

function App() {
  const [value, setValue] = useState(items);

  const deleteItem = (id) => {
    let foodItem = value.filter((del) => del.id !== id);
    setValue(foodItem);
  };
  return (
    <div className="App">
      {value.length !== 0 ? (
        value.map((item, id) => {
          return <Food key={id} {...item} deleteItem={deleteItem} />;
        })
      ) : (
        <h1 style={{ color: "white" }}>No items</h1>
      )}
    </div>
  );
}

export default App;

