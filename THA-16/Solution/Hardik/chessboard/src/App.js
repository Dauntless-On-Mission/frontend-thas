function App() {
  let arr = new Array(64).fill(true);
  let toggle_i = false,
    toggle_j,
    i,
    j;
  for (i = 0; i < 8; i++) {
    toggle_j = toggle_i;
    for (j = 0; j < 8; j++) {
      arr[i * 8 + j] = toggle_j;
      toggle_j = !toggle_j;
    }
    toggle_i = !toggle_i;
  }

  console.log(arr);

  return (
    <div className="App">
      <div className="chessboard">
        <div className="container">
          {arr.map((box, index) => {
            return (
              <div key={index} className={`${box ? "white" : "black"}`}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
