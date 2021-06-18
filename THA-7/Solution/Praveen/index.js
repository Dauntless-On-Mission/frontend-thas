
////////////////  ANS-1   ////////////////////

const detective = {
    name : " Jack Ryan ",
    class : " Shooting ",
    role : " Hunter ",
}

console.log(Object.keys(detective));
// console.log(JSON.stringify(detective))
// console.log(Object.values(detective));
// console.log(detective.name, detective.class, detective.role);
// Object.freeze(person);


//////////////// ANS-2 ///////////////////

// const detective = {
//         name : " Jack Ryan ",
//         class : " Shooting ",
//         role : " Hunter ",
//     }

// console.log(detective);    

// delete detective.role;
// console.log(detective);

//////////////// ANS-3 ////////////////////

// to get the length of object 

// const detective = {
//     name : " Jack Ryan ",
//     class : " Shooting ",
//     role : " Hunter ",
// }

// console.log(Object.keys(detective).length);

///////////////// ANS-4 ///////////////////

// const library = [ 
//     { 
//     author: 'Bill Gates', 
//     title: 'The Road Ahead', 
//     readingStatus: true 
// }, 
//     { author: 'Steve Jobs', 
//     title: 'Walter Isaacson', 
//     readingStatus: true 
// }, 
//     { author: 'Suzanne Collins', 
//     title: 'Mockingjay: The Final Book of The Hunger Games', 
//     readingStatus: false 
// }
// ]; 

// console.log(library);

/////////////////// ANS-5 ////////////////

const volume = new Object
volume.pi = Math.PI;
volume.r = 5;
volume.h = 10;

v = volume.pi * volume.r**2 * volume.h ;

// console.log(v)

console.log(Number(v).toFixed(4));
// console.log(parseFloat(v).toFixed(4));

// Number(1).toFixed(2); 
// parseFloat(num).toFixed(2);

////////////////// ANS-6 //////////////////

// 6. Write a JavaScript program to sort an array of JavaScript objects. 

// function compareAge(a, b) {

//     // return a.libraryID - b.libraryID;
//     return b.libraryID - a.libraryID;
// }

// function sortByKey(library, key) {
//     return library.sort(function(a, b) {
//         var x = a[key]; var y = b[key];
//         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
// }

var library = [ 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Book Hunger Games', author: 'Suzanne Collins', libraryID: 3245 },
]; 

// console.log(library.sort());

// console.log(library.sort(compareAge));
// console.log(library.sort(sortByKey));

// const sort = require('immutable-sort');
// const array = [1, 5, 2, 4, 3];
// const sortedArray = sort(array);

// console.log(sortedArray);

/////////////////////////////////////////////

// a = [{name:"alex"},{name:"clex"},{name:"blex"},{name:"dlex"}];

// For Ascending 

// a.sort((a,b)=> (a.name > b.name ? 1 : -1))

// console.log(library.sort((a,b)=> (a.name > b.name ? 1 : -1)));

// console.log(library.sort((a,b)=> (a.libraryID - b.libraryID )));
console.log(library.sort((a,b)=> (b.libraryID - a.libraryID )));





// Expected Output: [
    // [object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
    // [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
    // [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

