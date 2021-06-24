let startCount = 0;
let totCount = 50;

for(i = 0; i < 50; i++) {
    let button = document.createElement("button");
    button.className = "seat";
    let buttonDiv = document.getElementById("seats");
    buttonDiv.appendChild(button);
 }

let seatsSelected = document.querySelectorAll('.seat');
let book = document.getElementById('booked');
let remain = document.getElementById('remaining');

book.innerHTML = `Seats Booked: ${startCount}`;
remain.innerHTML = `Seats Remaining: ${totCount}`;

seatsSelected.forEach(e => {
    e.onclick = function () {
    e.classList.toggle('clicked');
    if(e.classList.contains('clicked')) {
        startCount++;
        book.innerHTML = `Seats Booked: ${startCount}`;
        totCount--;
        remain.innerHTML = `Remaining Seats: ${totCount}`;
    }
    else {
        startCount--;
        book.innerHTML = `Seats Booked: ${startCount}`;
        totCount++;
        remain.innerHTML = `Remaining Seats: ${totCount}`;
        console.log(startCount);
    }
   }
})

