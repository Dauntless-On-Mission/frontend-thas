// ---------------------------------------------THA-7--------------------------------------------

// --------------------------------------------Solution-1-----------------------------------------------------------------------------
var student = {
    fName : "David Rayy",
    sClasse : "VI",
    rollNo : 12
};

function dis() {
    let v =  Object.keys(student);
    return v.toString();
}

console.log(dis()); // Expected Output : fName,sClasse,rollNo


// --------------------------------------------Solution-2------------------------------------------------------------------------------

function del() {
   delete student["rollNo"];
   return student;
}

console.log(student); // Before deleting the prop
console.log(del()); // After deleting the prop

// --------------------------------------------Solution-3-----------------------------------------------------------------------------

var stud = {
    fName : "David Rayy",
    sClasse : "VI",
    rollNo : 12
};

function len() {
    return Object.keys(stud).length;
}

console.log(len()); // returns 3 

// --------------------------------------------Solution-4-----------------------------------------------------------------------------

var library = [ 
	{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 	{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
	{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

function lib() {
    library.forEach(element => {
        auth  = element.author;
        bookName = element.title;
        status = element.readingStatus;

        console.log(`The Title is '${bookName}' and it is written by '${auth}' and the reading status is '${status}'`);
    });
}
lib(); // Displays the the text written in console

// --------------------------------------------Solution-5---------------------------------------------------------------------------

function volOfCylinder(radius, height) {
    let vol = (Math.PI * radius * 2 * height).toFixed(4);
    return vol;
}

console.log(volOfCylinder(6,15)); // Returns the Volume of cylinder

// --------------------------------------------Solution-6---------------------------------------------------------------------------

var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
]; 

function sortObj() {
    let updated = library.sort((a,b)=>
        b.libraryID - a.libraryID);
    return updated
}

console.log(sortObj()); //Returns the objects in descending order of the libraryID