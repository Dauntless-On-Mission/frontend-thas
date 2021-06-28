/**Devsnest JavaScript Front End Day 7 Assignment
 * Topic: Objects
 * Please refer to the questions in the attached 'questions.txt' file
*/

// Q1: Printing Object Keys
var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 
};

console.log('\n------ Object Keys------\n');
console.log(Object.keys(student));

//Q2: Deleting an Object Property
console.log('\n------ Object Deletion ------\n');
console.log('\nObject Before Deletion => \n');
console.log(student);

delete student.rollno;
console.log('\nObject After Deletion => \n');
console.log(student);

//Q3: Getting Object Length
console.log('\n------ Object Length ------\n');
console.log(Object.keys(student).length);

//Q4: Displaying Object Values
var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];
console.log('\n------ Object Values ------\n');
console.log(Object.values(library));

//Q5: Printing Volume of a Cylinder with 4 Decimals
console.log('\n------ Object Operations ------\n');
function Cylinder(height, diameter) {
    this.height = height;
    this.diameter = diameter;
  }
  
  Cylinder.prototype.Volume = function () {
    var radius = this.diameter / 2;
    return this.height * Math.PI * radius * radius;
  };
  
  var cylinder = new Cylinder(6, 4);
  // Volume of the cylinder with four decimal places.
  console.log('\nVolume of the cylinder =', cylinder.Volume().toFixed(4),'\n');

  //Q6: Sorting Objects Array
  console.log('\n------ Object Array Sorting ------\n');
  var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];

var sort_by = function(field_name, reverse, initial){
    var key = initial ?
    function(x)
    {
        return initial(x[field_name]);
    } :
    function(x) 
    {
        return x[field_name];
    };
 
    reverse = !reverse ? 1 : -1;
 
    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
      } ;
 };

 var newobj = library.sort(sort_by('libraryID', true, parseInt));

console.log(newobj);