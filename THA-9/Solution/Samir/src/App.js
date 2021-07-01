import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [boxes, setboxes] = useState([]);
  const [booked, setbooked] = useState(0);
  const [remaining, setremaining] = useState(32);

  useEffect(() => {
    getBoxArray(31);
  }, []);

  const getBoxArray = (number) => {
    let arr = [true];
    for (let i = 0; i < number; i++) {
      arr.push(true);
    }
    setboxes(arr);
    return arr;
  };

  const toggleValue = (index) => {
    const arr = [...boxes];
    arr[index] = !arr[index];
    setboxes(arr);
    const vacant=arr.filter(Boolean).length;
    const filled=32-vacant
    setremaining(vacant);
    setbooked(filled);
  };

  return (
    <>
    <div className="heading">{`Booked: ${booked} \u00A0\u00A0\u00A0  Remaining:${remaining}`}</div>
      <div className="container">
        {boxes.length !== 0 ? (
          boxes.map((ele, index) => (
            <div
              key={index}
              className={
                ele? "box red" : "box white"
              }
              onClick={() => toggleValue(index)}
            ></div>
          ))
        ) : (
          <div>Book Seat</div>
        )}
      </div>
    </>
  );
}

export default App;
