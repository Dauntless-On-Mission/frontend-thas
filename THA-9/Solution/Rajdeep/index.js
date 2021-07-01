
for (let i = 0; i < 36; i++) {
    let smallboxes = document.createElement('div');
    smallboxes.className = "square";
    let box = document.getElementById('box');
    box.appendChild(smallboxes);
}

const clicked = document.querySelectorAll('.square');

let seatBooked = document.getElementById('seat_booked');
let seatLeft = document.getElementById('seat_left');

let count = 0;

seatBooked.innerHTML = `Booked Seats: ${count}`
seatLeft.innerHTML = `Remaining seats: ${36 - count}`

clicked.forEach(item => {
    item.addEventListener('click', click => {
        if(item.classList.contains('booked')) {
            item.classList.remove('booked');
            count--;
            seatBooked.innerHTML = `Booked Seats: ${count}`
            seatLeft.innerHTML = `Remaining seats: ${36 - count}`
        }
        else {
            item.classList.add('booked');
            count++;
            seatBooked.innerHTML = `Booked Seats: ${count}`
            seatLeft.innerHTML = `Remaining seats: ${36 - count}`
        }
    });
});



