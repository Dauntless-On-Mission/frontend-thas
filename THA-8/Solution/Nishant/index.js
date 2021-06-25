// Creating smallBoxes by for loop

for(let i=0; i<400; i++) {
    let smallboxes = document.createElement('div');
    if(i == 129 || i == 130 || i == 148 || i == 149 || i == 150 || i == 151 || i == 167 || i == 168 || i == 169 || i == 170 || i == 171 || i == 172 || i == 186 || i == 187 || i == 189 || i == 190 || i == 192 || i == 193 || i == 206 || i == 207 || i == 208 || i == 209 || i == 210 || i == 211 || i == 212 || i == 213 || i == 228 || i == 231 || i == 247 || i == 249 || i == 250 || i == 252 || i == 266 || i == 268 || i == 271 || i == 273) {
        smallboxes.className = "square white";
    }
    else {
        smallboxes.className = "square";
    }
    let box = document.getElementById('box');
    box.appendChild(smallboxes);
}

const clicked = document.querySelectorAll('.square');

clicked.forEach(item => {
    item.addEventListener('click', click => {
        item.classList.toggle("white");
    });
});

// To reset the game

// function reset() {
//     // alert("reset");
//     window.location.reload();
// }

const resetButtonClicked = document.getElementById('btn');

resetButtonClicked.addEventListener('click', btn => {
    clicked.forEach((item) => {
        item.classList.remove('white');
    });

    clicked.forEach((item, i) => {
        if(i == 129 || i == 130 || i == 148 || i == 149 || i == 150 || i == 151 || i == 167 || i == 168 || i == 169 || i == 170 || i == 171 || i == 172 || i == 186 || i == 187 || i == 189 || i == 190 || i == 192 || i == 193 || i == 206 || i == 207 || i == 208 || i == 209 || i == 210 || i == 211 || i == 212 || i == 213 || i == 228 || i == 231 || i == 247 || i == 249 || i == 250 || i == 252 || i == 266 || i == 268 || i == 271 || i == 273) {
            item.classList.add('white');
        }
    });
})



// Another METHOD WITH 400 PRE-WRITTEN DIV'S

// const clicked = document.querySelectorAll('.square');
// // console.log(clicked);

// clicked.forEach(item => {
//     item.addEventListener('click', event => {
//         item.classList.toggle("white");
//     });
// })

