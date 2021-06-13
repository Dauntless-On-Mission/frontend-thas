import React, { useState } from "react";
import "./App.css";

function App() {
  let [screenValue, setscreenValue] = useState("0");
  let [resetValue, setresetValue] = useState(false);

  const buttonClicked = (e) => {
    const operator = ["%", "/", "*", "-", "+"];
    const pressed = e.target.value;
    if (resetValue) {
      if (!operator.includes(pressed)) {
        screenValue = "0";
      }
      setresetValue(false);
    }

    if (screenValue === "Infinity" || screenValue === "NaN") {
      if (operator.includes(pressed)) {
        setscreenValue("0" + pressed);
      } else {
        setscreenValue(pressed);
      }
    } else if (pressed === "C") {
      setscreenValue("0");
    } else if (pressed === "D") {
      screenValue.length <= 1
        ? setscreenValue("0")
        : setscreenValue(screenValue.slice(0, screenValue.length - 1));
    } else if (pressed === ".") {
      let tempScreenvalue = screenValue;
      if (screenValue[0] === "-") {
        tempScreenvalue = screenValue.slice(1, screenValue.length);
      }
      let presentOperator = "";
      for (const op of operator) {
        if (tempScreenvalue.includes(op)) {
          presentOperator = op;
          break;
        }
      }
      if (presentOperator === "") {
        if (!tempScreenvalue.includes(".")) {
          setscreenValue(screenValue + pressed);
        }
      } else {
        if (
          !tempScreenvalue
            .slice(
              tempScreenvalue.indexOf(presentOperator) + 1,
              tempScreenvalue.length
            )
            .includes(".")
        ) {
          if (tempScreenvalue[tempScreenvalue.length - 1] === presentOperator) {
            setscreenValue(screenValue + "0" + pressed);
          } else {
            setscreenValue(screenValue + pressed);
          }
        }
      }
    } else if (operator.includes(pressed)) {
      if (operator.includes(screenValue[screenValue.length - 1])) {
        screenValue = screenValue.slice(0, screenValue.length - 1) + pressed;
      } else {
        let gotOperator = false;
        let tempScreenvalue = screenValue;
        if (screenValue[0] === "-") {
          tempScreenvalue = screenValue.slice(1, screenValue.length);
        }
        for (const op of operator) {
          if (tempScreenvalue.includes(op)) {
            screenValue = eval(screenValue) + pressed;
            gotOperator = true;
            break;
          }
        }
        if (!gotOperator) {
          screenValue += pressed;
        }
      }
      setscreenValue(screenValue);
    } else if (pressed === "=") {
      setresetValue(true);
      setscreenValue(eval(screenValue) + "");
    } else {
      if (screenValue === "0") {
        if (pressed === "00") {
          screenValue = "0";
        } else {
          screenValue = pressed;
        }
      } else {
        let presentOperator = "";
        let tempScreenvalue = screenValue;
        if (screenValue[0] === "-") {
          tempScreenvalue = screenValue.slice(1, screenValue.length);
        }
        for (let op of operator) {
          if (tempScreenvalue.includes(op)) {
            presentOperator = op;
            break;
          }
        }
        if (presentOperator === "") {
          screenValue += pressed;
        } else {
          const index = tempScreenvalue.indexOf(presentOperator);
          if (index === tempScreenvalue.length - 1) {
            if (pressed === "00") {
              screenValue += "0";
            } else {
              screenValue += pressed;
            }
          } else if (index === tempScreenvalue.length - 2) {
            if (tempScreenvalue[index + 1] === "0") {
              if (pressed === "0" || pressed === "00") {
              } else {
                screenValue =
                  screenValue.slice(0, screenValue.length - 1) + pressed;
              }
            } else {
              screenValue += pressed;
            }
          } else {
            screenValue += pressed;
          }
        }
      }
      setscreenValue(screenValue);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <input type="text" disabled={true} value={screenValue} />
      </div>
      {["%", "C", "D", "/", "7", "8", "9", "*", "4","5","6","-","1","2","3","+","00","0",".","=",].map((num) => {
        return (
          <button key={num} className="button disable-select" value={num} onClick={buttonClicked} >
            {num}
          </button>
        );
      })}
    </div>
  );
}

export default App;
