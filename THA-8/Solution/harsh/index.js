const board=document.querySelector("#board");

const CELLS = 100;

const state={};

for(let i=0;i<CELLS;i++){
    const cell=document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("click",e=>handleClick(e,i));
    board.appendChild(cell);
}

const handleClick=(e, index)=>{
    const element = e.target;
    if(state[index]){
        element.style.background ="red";
        delete state[index];
    }
    else{
        state[index]=selected;
        element.style.background="black";
    }
}