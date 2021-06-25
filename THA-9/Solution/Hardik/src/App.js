import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let arr = new Array(36).fill(true);
  const [booked, setBooked] = useState(0);
  const [seatsLeft, setSeatsLeft] = useState(36);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState([]);

  const initialSetup = (arr) => {
    setLoading(true);
    setToggle(arr);
    setBooked(0);
    setSeatsLeft(36);
    setLoading(false);
  };
  useEffect(() => {
    initialSetup(arr);
    // eslint-disable-next-line
  }, []);

  const toggleBox = (index) => {
    const newArray = [...toggle];
    if (newArray[index] === true) {
      setBooked(booked + 1);
      setSeatsLeft(seatsLeft - 1);
    } else {
      setBooked(booked - 1);
      setSeatsLeft(seatsLeft + 1);
    }
    newArray[index] = !newArray[index];
    setToggle(newArray);
  };

  const resetBox = () => {
    initialSetup(arr);
  };
  return (
    <div className="container">
      <header>
        <h1>Book Tickets</h1>
      </header>
      <div className="tickets">
        <h3>Seats Booked : {booked}</h3>
        <h3>Seats Left : {seatsLeft}</h3>
      </div>
      <div className="canvas">
        {!loading ? (
          arr.map((box, index) => {
            return (
              box && (
                <button
                  id={index}
                  className={`box ${toggle[index] === true ? "light" : "dark"}`}
                  key={index}
                  onClick={() => toggleBox(index)}
                ></button>
              )
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div className="resetBtn">
        <button>
          <img
            src="https://100dayscss.com/assets/svg/reload.svg"
            alt=""
            width="20px"
            onClick={resetBox}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
