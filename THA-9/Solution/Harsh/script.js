let cell = document.querySelector(".board");
let btn = document.querySelector(".btn");
let total = document.querySelector("#total");
let selected = document.querySelector("#selected");
let remaining = document.querySelector("#remaining");

let cell_total = 361;
let cell_selected = 0;
let cell_remaining = 361;

total.innerText = cell_total;
console.log(selected);

const state = {};

const HandleClick = (e, index) => {
  const element = e.target;
  if (state[index]) {
    cell_selected = cell_selected - 1;
    cell_remaining = cell_remaining + 1;
    element.style.background = "red";
    delete state[index];
    update(cell_selected, cell_remaining);
  } else {
    cell_selected = cell_selected + 1;
    cell_remaining = cell_remaining - 1;
    state[index] = "selected";
    element.style.background = "green";
    update(cell_selected, cell_remaining);
  }
  // console.log(state);
};

function update(a, b) {
  selected.innerText = cell_selected;
  remaining.innerText = cell_remaining;
}

update();

console.log("hello");

for (let i = 0; i < 361; i++) {
  const press = document.createElement("div");
  press.classList.add("box");
  cell.appendChild(press);
  press.addEventListener("click", (e) => HandleClick(e, i));
}

btn.addEventListener("click", Reset);

function Reset() {
  location.reload()
  console.log("hhhh");
  // selected.innerText = 0;
  // remaining.innerText = 361;
}

