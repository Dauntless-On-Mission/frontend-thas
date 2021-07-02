// for(let i=0; i<16; i++) {
//     let smallbox = document.createElement('div');
//     smallbox.className = 'square';
//     let box = document.getElementById('box');
//     box.appendChild(smallbox);
// }

// let square = document.querySelectorAll('.square');
// console.log(square);    

// square.forEach(item => {
//     item.addEventListener('click', (e)=> {
//         item.classList.add('flip');
//     });
// });


const square = document.querySelectorAll(".square");
const box = document.querySelector("#box");
const reset = document.querySelector(".btn");

let selectedCard = [];
let cardId = []; // to check if we have clicked same card twice
let Won = [];

square.forEach((square) => {
  square.addEventListener("click", flipTheClickedCard)
});

function flipTheClickedCard() {
  this.classList.add("flip");

  selectedCard.push(this.getAttribute("data-color"));
  cardId.push(this.getAttribute("id"));

  if (selectedCard.length > 2) {
    this.classList.remove("flip");
  }
  if (selectedCard.length === 2) {
    // setTimeout(MatchingOrNot, 1000); // checking time
    
    setTimeout(() => {
      let firstCard = square[cardId[0] - 1];
      let secondCard = square[cardId[1] - 1];

      if (cardId[0] === cardId[1]) {
        cardId.pop();
        selectedCard.pop();
      } else if (selectedCard[0] === selectedCard[1]) {
        firstCard.classList.add("hide");
        secondCard.classList.add("hide");

        Won.push(selectedCard);
        if (Won.length === square.length / 2) {
          box.innerHTML = `<h1>CONGRULATIONS YOU WON!!</h1>`;
          reset.innerHTML = "Play Again?";
          box.classList.add("won");
        }
      } else {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }
      selectedCard = [];
      cardId = [];
    }, 500);
  }
}

(function shuffleCards() {
  square.forEach((square) => {
    let randomOrder = Math.floor(Math.random() * 16);  
    console.log(randomOrder);
    square.style.order = randomOrder;
  });
})();

reset.addEventListener("click", () => {
  square.forEach((square) => {
    square.classList.add("reset")
  });
  setTimeout(() => location.reload(), 500);
});


            