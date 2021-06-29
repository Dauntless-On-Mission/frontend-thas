let words = [
  "Uttar-Pradesh",
  "West-Bengal",
  "Gujrat",
  "Rajasthan",
  "Haryana",
  "Telangana",
  "Canada",
  "Delhi",
];
words = [...words, ...words];

let moves = 10;
let matches = 0;
let gameActive = true;

for (let i = 1; i <= 16; i++) {
  // let card = document.createElement("div");
  // card.classList.add("cards");

  let card = document.createElement("div");
  card.classList.add("flip-card");

  let inner = document.createElement("div");
  inner.classList.add("flip-card-inner");

  let front = document.createElement("div");
  front.innerHTML = "<h1>?</h1>";
  inner.classList.add("flip-card-front");

  let rand = Math.floor(Math.random() * (16 - i));

  let back = document.createElement("div");

  back.innerHTML = "<h2>" + words[rand] + "</h2>";
  words.splice(rand, 1);

  back.classList.add("flip-card-back");

  inner.appendChild(front);
  inner.appendChild(back);

  card.appendChild(inner);

  document.getElementById("grid").appendChild(card);
  // document.body.appendChild(cards);
}

let clicked;
let cards = document.getElementsByClassName("flip-card");

for (let card of cards) {
  card.addEventListener("click", (e) => {
    if (!gameActive) return;
    moves--;
    document.querySelector("span").innerHTML = moves;

    if (clicked) {
      card.firstChild.classList.add("flipped");
      gameActive = false;
      setTimeout(() => {
        if (
          card.firstChild.lastChild.innerHTML !==
          clicked.firstChild.lastChild.innerHTML
        ) {
          card.firstChild.classList.remove("flipped");
          clicked.firstChild.classList.remove("flipped");
          console.log("error");
        } else {
          matches++;
          card.style.visibility = "hidden";
          clicked.style.visibility = "hidden";
        }
        clicked = undefined;
        gameActive = true;
      }, 500);
    } else {
      clicked = card;
      card.firstChild.classList.add("flipped");
    }

    if (moves < 0) {
      if (confirm("Restart the game!")) {
        location.reload();
      }
    }
  });
}

// function checkmoves () {
//     if( moves < 10 ){
//         alert("you loss the game")
//     }
// }

// checkmoves();

// read about
// .classlist, firstchild, lastchild
// innerHTML in detail
// cloneNode, replaceChild, parentNode
