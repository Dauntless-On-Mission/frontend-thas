import { useState } from "react";
import "./App.css";

function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);
  const [counterFour, setCounterFour] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Counter</h1>
        </header>
        <div className="counter-container">
          <div className="counter">
            <button
              className="add"
              onClick={() => setCounterOne(counterOne + 1)}
            >
              +
            </button>
            <h2>{counterOne}</h2>
            <button
              className="subtract"
              disabled={counterOne === 0}
              onClick={() => {
                if (counterOne >= 1) setCounterOne(counterOne - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="counter">
            <button
              className="add"
              onClick={() => setCounterTwo(counterTwo + 1)}
            >
              +
            </button>
            <h2>{counterTwo}</h2>
            <button
              className="subtract"
              disabled={counterTwo === 0}
              onClick={() => {
                if (counterTwo >= 1) setCounterTwo(counterTwo - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="counter">
            <button
              className="add"
              onClick={() => setCounterThree(counterThree + 1)}
            >
              +
            </button>
            <h2>{counterThree}</h2>
            <button
              className="subtract"
              disabled={counterThree === 0}
              onClick={() => {
                if (counterThree >= 1) setCounterThree(counterThree - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="counter">
            <button
              className="add"
              onClick={() => setCounterFour(counterFour + 1)}
            >
              +
            </button>
            <h2>{counterFour}</h2>
            <button
              className="subtract"
              disabled={counterFour === 0}
              onClick={() => {
                if (counterFour >= 1) setCounterFour(counterFour - 1);
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
