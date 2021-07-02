let addBtn = document.querySelector(".add");
let input = document.querySelector("#uname");
let list = document.getElementById("demo")


// let delBtn = document.createElement("button");
  // delBtn.innerHTML= "<p>Del</p>";
  // delBtn.classList.add("del");

function stand(){

  console.log("hello");

  let div = document.createElement("div")
  div.classList.add("div")

  let textNode = document.createElement("p");
  textNode.classList.add("p")
  textNode.innerText = input.value;

  // save to local storage


  let delBtn = document.createElement("button");
  // delBtn.innerHTML= "<p>Del</p>";
  delBtn.innerHTML= 'del'
  delBtn.classList.add("del");

  let check = document.createElement("button");
  // delBtn.innerHTML= "<p>Del</p>";
  check.innerHTML= 'check'
  check.classList.add("check");

  div.appendChild(textNode)
  div.appendChild(check)
  div.appendChild(delBtn)

  list.appendChild(div)

  // for store in local storage
  saveTodoToLocalStorage(input.value)
  
  // let arr = JSON.parse(localStorage.setItem("todos"));
  // arr.push(input.value)
  // arr = arr ? arr : [];
  // localStorage.setItem("todos", JSON.stringify(arr));

  //clear input value
  input.value = ""
}

addBtn.addEventListener('click', event => {
  stand() 
})

// function deleteBtn() {
//   console.log("delete");
//   list.style.visibility = "hidden";
  
// }

// delBtn.addEventListener('click', event => {
//   deleteBtn()
// })

list.addEventListener('click', deleteCheck)

function deleteCheck (e) {
  // console.log("check");
  console.log(e.target)
  // list.remove()

  let item = e.target

  if (item.classList[0] === "del") {
    const todo = item.parentElement;
    todo.classList.toggle("fall")
    // todo.remove();
    // Animation
    todo.addEventListener("transitionend" , function() {
      todo.remove();
    })
  }

  if (item.classList[0] === "check") {
    const todo = item.parentElement;
    todo.classList.toggle("complete-line")
  }

  // list.remove()

}

function saveTodoToLocalStorage(todo) {
  let todos;

  if ( localStorage.getItem("todos") === null) {
    todo = []
  } else {
    todos = JSON.parse(localStorage.getItem("todos"))
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos))
}










