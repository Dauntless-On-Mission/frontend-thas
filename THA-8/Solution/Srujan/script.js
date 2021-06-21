for(i = 0; i < 400; i++) {
    let button = document.createElement("button");
    button.className = "box";
    let buttonDiv = document.getElementById("buttons");
    buttonDiv.appendChild(button);
 }

let boxey  = document.querySelectorAll('.box');

boxey.forEach((btns) => {
	btns.onclick = function clicking() {
	btns.classList.toggle('white')
	}	
})
