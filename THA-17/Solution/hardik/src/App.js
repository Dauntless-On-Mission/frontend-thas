import { List } from "./list";
import FoodItem from "./foodItem";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Calorie Counter</h1>
      </header>
      <div className="container">
        {List.map((item, index) => {
          return <FoodItem key={index} item={item}></FoodItem>;
        })}
      </div>
    </div>
  );
}

export default App;
