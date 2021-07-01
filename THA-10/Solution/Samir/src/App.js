import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [trial, settrial] = useState(0);
  const [values, setvalues] = useState([]);
  const [showCard, setshowCard] = useState(0);
  const [matchCard, setmatchCard] = useState([-1,-1]);
  const [openCard, setopenCard] = useState([]);

  useEffect(() => {
    getBoxArray(32);
  }, []);

  const getBoxArray = (number) => {
    let arr = [];
    for (let i = 1; i <= number/2; i++) {
      arr.push(i);
      arr.push(i);
    }
    setvalues(shuffle(arr));
  };

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  }

  const toggleValue = (index) => {
    const arr1 = [0,0];
    arr1[0]=matchCard[0];
    arr1[1]=matchCard[1];
    arr1[showCard] = index;
    setmatchCard(arr1);
    if((showCard+1)===2){
      setTimeout(() => {setmatchCard([-1,-1]);},1000);
    }
    setshowCard((showCard+1)%2);
    if(showCard%2!=0){
      settrial(trial+1);
    }
    if(arr1[0]!==arr1[1] && values[arr1[0]]===values[arr1[1]]){
      const a = [...openCard]
      a.push(arr1[0]);
      a.push(arr1[1]);
      setopenCard(a);
    }
  };

  return (
    <>
        <div className="heading">{`Trial: ${trial}`}</div>
      <div className="container">
        {values.length !== 0 ? (
          values.map((ele, index) => (
            <div
              key={index}
              className={
                !openCard.includes(index)? "box red" : "box green"
              }
              onClick={() => toggleValue(index)}
            >
              <div className="innervalue">
              {matchCard.includes(index) || openCard.includes(index)?ele:""}
              </div>
            </div>
          ))
        ) : (
          <div>Memory Game</div>
        )}
      </div>
    </>
  );
}

export default App;
