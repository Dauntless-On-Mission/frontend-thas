
import './App.css';

import Food from './Food';

const items = [
  {
    id: 1,
    food: "Biryani",
    calories: 380,
  },
  {
    id: 2,
    food: "Pizza",
    calories: 266,
  },
  
  {
    id: 3,
    food: "Burger",
    calories: 295,
  },
  
  {
    id: 4,
    food: "Shawarma",
    calories: 394,
  },
  {
    id: 5,
    food: "Butter Chicken",
    calories: 290,
  },
  {
    id: 6,
    food: "Gulab Jamun",
    calories: 300,
  },
  {
    id: 7,
    food: "Jalebi",
    calories: 155,
  },
  {
    id: 8,
    food: "Palak Paneer",
    calories: 340,
  },
  {
    id: 9,
    food: "Butter Naan",
    calories: 260,
  },
]

function App() {
  return (
    <div className="App">
      {items.map((item) => {
        return <Food key = {items.id} {...item}/>;
      })}
    </div>
  );
}

export default App;
