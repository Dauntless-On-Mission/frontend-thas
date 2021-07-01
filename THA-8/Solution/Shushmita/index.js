const board = document.querySelector("#board");
console.log(board);

const CELL_COUNT = 225;
const state = {};

const handleClick = (e, index) => {
  const element = e.target;
  if (state[index]) {
    element.style.background = "cyan";
    delete state[index];
  } else {
    state[index] = "selected";
    element.style.background = "red";
  }
};

for (let i = 0; i < CELL_COUNT; i = i + 1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", (e) => handleClick(e, i));
  board.appendChild(cell);
}

console.log(board);
