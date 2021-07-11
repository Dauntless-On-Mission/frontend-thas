import './App.css';
import Oddrow from "./Oddrow";
import Evenrow from "./Evenrow";

function App() {
  return (
    <div className="App">
     <div className="chessBoard">
        <Oddrow />
        <Evenrow />
        <Oddrow />
        <Evenrow />
        <Oddrow />
        <Evenrow />
        <Oddrow />
      </div>
    </div>
  );
}

export default App;
