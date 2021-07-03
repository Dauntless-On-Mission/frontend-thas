import "./App.css";
import Board from "./components/chessBoard";
import Card from "./components/MemeCard";

function App() {
  return (
    <>
      <div className="main">
        <h1 id="heading">Tha 15 and 16</h1>

        <div className="container">
          <Board />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
