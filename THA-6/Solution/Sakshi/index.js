// 1. Write a JavaScript function to check whether an `input` is an array or not

function check(arr)  {
    return Array.isArray(arr);
 }
 console.log(check('w3resource'));
 console.log(is_array([1, 2, 4, 0]));

// ---------------------------------------------------

// 2. Write a JavaScript function to clone an array

function clone(arr) {
 return arr.slice(0);
    };
console.log(clone([1, 2, 4, 0]));
console.log(clone([1, 2, [4, 0]]));

// ----------------------------------------------------

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

function first(arr,n=1) {
     const a = arr.slice(0,n);
     return a;
 }
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

// ---------------------------------------------------

// 4. Write a simple JavaScript program to join all elements of the following array into a string.

function AtoS(input)
{
console.log(input.join(','));
console.log(input.join('+'));
}
AtoS(["Red", "Green", "White", "Black"]);

// -------------------------------------------------------

//  5. Write a JavaScript program to find the most frequent item of an array

function most(arr) {
    let item = {};
   for(i of arr){
       if(i in item) {
           item[i]++;
       } else {
           item[i] = 1;
       }
   }
    freq = 0;
   for(keys in item) {
       if(item[keys] > freq){
       freq = item[keys];
       times = keys;
       }
   }
   console.log(`${freq} (${times} times)`)
}
most([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])

// -------------------------------------------------------------