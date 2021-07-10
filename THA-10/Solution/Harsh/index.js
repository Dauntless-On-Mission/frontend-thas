const board = document.querySelector("#board");
const overlay = document.querySelector("#overlay");
const TOTAL_CELL = 16;
const LEN = 4;

const gameArray = [];
for (let i = 0; i < TOTAL_CELL / 2; i = i + 1) {
  gameArray.push(i);
  gameArray.push(i);
}

for (let i = 0; i < TOTAL_CELL; i = i + 1) {
  const index1 = Math.floor(Math.random() * TOTAL_CELL);
  const index2 = Math.floor(Math.random() * TOTAL_CELL);

  const temp = gameArray[index1];
  gameArray[index1] = gameArray[index2];
  gameArray[index2] = temp;
}

// console.log(gameArray);

/**
 * 0 -> none selected
 * 1 -> one selected
 */

let state = 0; // Initial State

let selectedCell1 = null;
let selectedCell2 = null;

const handleClick = (e, value, index) => {
  // console.log("clicked");
  // console.log(value);

  switch (state) {
    case 0:
      selectedCell1 = { target: e.target, value: value, index: index };
      selectedCell1.target.classList.add("cell-selected");
      selectedCell1.target.innerText = value;
      // console.log(selectedCell1);
      state = 1;
      break;
    case 1:
      selectedCell2 = { target: e.target, value: value };
      selectedCell2.target.classList.add("cell-selected");
      selectedCell2.target.innerText = value;
      // console.log(selectedCell2);

      overlay.style.display = "block";

      setTimeout(() => {
        if (
          index === selectedCell1.index ||
          selectedCell1.value !== selectedCell2.value
        ) {
          console.log("not matched!");
          selectedCell1.target.classList.remove("cell-selected");
          selectedCell2.target.classList.remove("cell-selected");
          selectedCell1.target.innerText = "";
          selectedCell2.target.innerText = "";
        } else {
          console.log("matched!");
          selectedCell1.target.style.visibility = "hidden";
          selectedCell2.target.style.visibility = "hidden";
        }
        state = 0;
        overlay.style.display = "none";
      }, 500);

      break;
    default:
      console.log("Invalid State!");
      break;
  }
};

for (let i = 0; i < TOTAL_CELL; i = i + 1) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener("click", e => handleClick(e, gameArray[i], i));
  board.appendChild(cell);
}
