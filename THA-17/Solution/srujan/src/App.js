import Food from './Food';
import './App.css';

const items = [
  {
    id: 1,
    food: "Biryani",
    calories: 1135,
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
    calories: 393,
  },
  {
    id: 5,
    food: "Butter Chicken",
    calories: 290,
  },
  {
    id: 6,
    food: "Palak Paneer",
    calories: 340,
  },
  {
    id: 7,
    food: "Jalebi",
    calories: 150,
  },
  {
    id: 8,
    food: "Gulab Jamun",
    calories: 300,
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
