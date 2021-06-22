// FUNCTION FOR Q1

function properties(obj) {
    return Object.keys(obj);
    // or
    // return Object.getOwnPropertyNames(student);
}


// FUNCTION FOR Q2

function deleteproperty(obj, key) {
    // Object before deleting
    console.log('Object before deleting: ' + JSON.stringify(obj));

    // DELETING rollno property -  delete objectname.property
    delete obj[key];

    // Object after deleting
    console.log('Object after deleting: ' + JSON.stringify(obj));
}


// FUNCTION FOR Q3

function lengthOfObject(obj) {
    return Object.keys(obj).length;
    // or
    // return Object.getOwnPropertyNames(student).length;
}


// FUNCTION FOR Q4

function displayBooksDetails(obj) {
    obj.map(item => {
        console.log(`Book Title: ${item['title']}, Auther: ${item['author']}, Reading Status: ${item['readingStatus']}`);
    });

    // OR

    // for(let i=0; i<obj.length; i++) {
    //     // console.log('Book Title: ' + obj[i]['title'] + ', ' + 'Auther: '  + obj[i]['author'] + ', ' + 'Reading Status: ' + obj[i]['readingStatus']);
    //     // or
    //     console.log(`Book Title: ${obj[i]['title']}, Auther: ${obj[i]['author']}, Reading Status: ${obj[i]['readingStatus']}`);
    // }

        // let a = obj.map(item => {
    //     console.log(`Book Title: ${item['title']}, Auther: ${item['author']}, Reading Status: ${item['readingStatus']}`);
    //     item['name'] = 'nishant';
    //     return item
    // });

    // console.log(a);
}


// FUNCTION FOR Q5

function volumeOfCylinder(obj) {
    return `Volume of cylinder with radius ${obj.radius} and height ${obj.height} is: ${(Math.PI * obj.radius * obj.radius * obj.height).toFixed(4)}`

    // toFixed for fix the decimal places
}


// FUNCTION FOR Q6

function sortArrayOfObject(obj) {
    return obj.sort((a, b) => b.libraryID - a.libraryID);
}


// ------------------------------------------------------------

console.log("QUESTION 1");

console.log(properties({ name : "David Rayy", sclass : "VI", rollno : 12 }));
// for(item in student) {
//     // console.log(student[item]); // FOR VALUE
//     console.log(item); // FOR KEYS
// }

// or
// console.log(Object.keys(student)); // FOR KEYS
// console.log(Object.getOwnPropertyNames(student)); // FOR KEYS
// console.log(Object.values(student)); // FOR VALUES

console.log();


console.log("QUESTION 2");
deleteproperty({ name : "David Rayy", sclass : "VI", rollno : 12 }, 'rollno');
console.log();


console.log("QUESTION 3");
console.log('Length of Object is: ' + lengthOfObject({ name : "David Rayy", sclass : "VI", rollno : 12 }));
console.log();


console.log("QUESTION 4");
displayBooksDetails([ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]);
console.log();


console.log("QUESTION 5");
console.log(volumeOfCylinder({ radius: 5, height: 2}));
console.log();


console.log("QUESTION 6");
console.log(sortArrayOfObject([ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]));