/**Devsnest JavaScript Front End Day 6 Assignment
 * Topic: Arrays
*/
//------------------------------------- Question 1 --------------------------------------

//Write a JavaScript function to check whether an `input` is an array or not

function is_Array(arr){
    return Array.isArray(arr);
    
}

//Test Cases
console.log(is_Array('w3resource')); //prints false
console.log(is_Array([1, 2, 4, 0])); //prints true

//------------------------------------- Question 2 -------------------------------------

//Write a JavaScript function to clone an array

function array_Clone(arr){
    const clone = arr.slice(0);
    return clone;
}

//Test Cases
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

//------------------------------------- Question 3 -------------------------------------

/** Write a JavaScript function to get the first element of an array. 
 * Passing a parameter 'n' will return the first 'n' elements of the array.*/ 

function first(arr,n){
    if (arr == null) return void 0;
    else if (n == null) return arr[0];
    else if (n < 0) return [];
    return arr.slice(0, n);
}

//Test Cases
 console.log(first([7, 9, 0, -2]));
 console.log(first([],3));
 console.log(first([7, 9, 0, -2],3));
 console.log(first([7, 9, 0, -2],6));
 console.log(first([7, 9, 0, -2],-3));
 

//------------------------------------- Question 4 -------------------------------------

//Write a simple JavaScript program to join all elements of the following array into a string.

const myColor = ["Red", "Green", "White", "Black"];

function string_Join(myColor){
    console.log(myColor.join(' , '));
    console.log(myColor.join(' + '));
}
string_Join(myColor); //function call w/ test cases

//------------------------------------- Question 5 -------------------------------------

//Write a JavaScript program to find the most frequent item of an array

var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var newArr = arr1.slice().sort(), most = [undefined, 0], counter = 0;

newArr.reduce(function(old, chr){
   old == chr ? ++counter > most[1] && (most = [chr, counter]) : (counter = 1)
   return chr
});

console.log(most[0] + " ( "+most[1]+" times )");