const board = document.querySelector("#board");
const total = document.querySelector("#total");
const remaining = document.querySelector("#remaining");
const selected = document.querySelector("#selected");

console.log(board);

const CELL_COUNT = 100;
const state = {};
let CELL_REMAINING = CELL_COUNT;
let CELL_SELECTED = 0;

total.innerText = CELL_COUNT;
remaining.innerText = CELL_REMAINING;
selected.innerText = CELL_SELECTED;

console.log(selected);

for (let i = 0; i < CELL_COUNT; i = i + 1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", e => handleClick(e, i));
  board.appendChild(cell);
}

console.log(board);

const handleClick = (e, index) => {
  const element = e.target;
  if (state[index]) {
    element.style.background = "purple";
    delete state[index];
    CELL_SELECTED -= 1;
    CELL_REMAINING += 1;
  } 
  else {
    state[index] = "selected";
    element.style.background = "rgb(154, 154, 243)";
    CELL_SELECTED += 1;
    CELL_REMAINING -= 1;
  }

  remaining.innerText = CELL_REMAINING;
  selected.innerText = CELL_SELECTED;
  console.log(state);
  
};

