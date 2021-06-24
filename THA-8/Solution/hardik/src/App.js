import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const initialBox = [
    107, 109, 110, 112, 128, 129, 130, 131, 147, 148, 149, 150, 151, 152, 166,
    167, 169, 170, 172, 173, 193, 192, 191, 190, 189, 188, 186, 187, 208, 211,
    227, 248, 246, 229, 230, 251, 232, 253, 265, 267, 269, 270, 272, 274, 284,
    286, 288, 291, 293, 295,
  ];
  let arr = new Array(400).fill(true);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState([]);

  const initialSetup = (arr) => {
    setLoading(true);
    initialBox.forEach((element) => {
      arr[element] = false;
    });
    setToggle(arr);
    setLoading(false);
  };
  useEffect(() => {
    initialSetup(arr);
    // eslint-disable-next-line
  }, []);

  const toggleBox = (index) => {
    const newArray = [...toggle];
    newArray[index] = !newArray[index];
    setToggle(newArray);
  };

  const resetBox = () => {
    initialSetup(arr);
  };
  return (
    <div className="container">
      <div className="canvas">
        {!loading ? (
          arr.map((box, index) => {
            return (
              box && (
                <button
                  id={index}
                  className={`box ${toggle[index] === true ? "red" : "white"}`}
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
