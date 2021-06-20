import "./App.css";
import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const InitialLogo = [
    208, 209, 229, 230, 231, 232, 250, 251, 252, 253, 254, 255, 271, 272, 274,
    275, 277, 278, 293, 294, 295, 296, 297, 298, 299, 300, 317, 320, 338, 340,
    341, 343, 366, 364, 361, 359,
  ];
  const [boxes, setboxes] = useState([]);
  const [initial, setinitial] = useState(InitialLogo);

  useEffect(() => {
    getBoxArray(571);
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
    if(initial.includes(index)){
      setinitial(initial.filter(ele => ele!==index));
      return;
    }
    const arr = [...boxes];
    arr[index] = !arr[index];
    setboxes(arr);
  };

  const resetBoard = () => {
    getBoxArray(571);
    setinitial(InitialLogo);
  };

  return (
    <>
      <div class="fireworks">
        <div class="before"></div>
        <div class="after"></div>
      </div>
      <div className="container">
        {boxes.length !== 0 ? (
          boxes.map((ele, index) => (
            <div
              key={index}
              className={
                ele && !initial.includes(index) ? "box red" : "boxforwhite"
              }
              onClick={() => toggleValue(index)}
            ></div>
          ))
        ) : (
          <div>Game Starting</div>
        )}
        <button className="reset disable-select" onClick={resetBoard}>Reset</button>
      </div>
    </>
  );
}

export default App;
