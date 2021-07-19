import { useState } from 'react'
import './Styles/App.css';

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [third, setThird] = useState(0);
  const [fourth, setFourth] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <header>Counter</header>
        <div className="box">

          <div className="first">
            <button className="btn" type="button" onClick={() => {
              setFirst(first + 1)
            }}>
              +
            </button>

            <h1>{first}</h1>

            <button className="btn" type="button" disabled={first === 0} onClick={() => {
              if (first > 0) {
                setFirst(first - 1)
              }
            }}>
              -
            </button>
          </div>

          <div className="second">
            <button className="btn" type="button" onClick={() => {
              setSecond(second + 1)
            }}>
              +
            </button>

            <h1>{second}</h1>

            <button className="btn" type="button" disabled={second === 0} onClick={() => {
              if (second > 0) {
                setSecond(second - 1)
              }
            }}>
              -
            </button>
          </div>

          <div className="third">
            <button className="btn" type="button" onClick={() => {
              setThird(third + 1)
            }}>
              +
            </button>

            <h1>{third}</h1>

            <button className="btn" type="button" disabled={third === 0} onClick={() => {
              if (third > 0) {
                setThird(third - 1)
              }
            }}>
              -
            </button>
          </div>

          <div className="fourth">
            <button className="btn" type="button" onClick={() => {
              setFourth(fourth + 1)
            }}>
              +
            </button>

            <h1>{fourth}</h1>

            <button className="btn" type="button" disabled={fourth === 0} onClick={() => {
              if (fourth > 0) {
                setFourth(fourth - 1)
              }
            }}>
              -
            </button>
          </div>



        </div>
      </div>

    </div>
  );
}

export default App;
