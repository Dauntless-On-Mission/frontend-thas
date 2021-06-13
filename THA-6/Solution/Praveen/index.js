// ans 1

const z = [1,2,3,4,5,6]
// console.log(typeof(z));

z.isArray(z);
console.log(Array.isArray(z));

// Array.constructor === Array;
console.log(z.constructor === Array);

// ({}).toString.call(array);
console.log(({}).toString.call(z));

////////////////////////////////////////////////////

//  ans 2

arr = [1,2,3,4,5];
b = arr;

console.log(b);
b.push(6);
console.log(b);
b.pop(6);
console.log(b);

////////////////////////////////////////////////////

// ans 3

fun([1,2,3,4,5], 7);
// fun([], 3);

function fun(arr, n=0) {
    if (n == 0){
        console.log(arr[0]);
    }
    else{
        let a = arr.splice(0, n);
        console.log(a)
    }
}


////////////////////////////////////////////////////

// Ans 4

const array = ["Red", "Green", "White", "Black"];
const arrayToString = array.toString();

console.log(array);
console.log(arrayToString);

//////////////////////////////////////////////////////

// Ans 5

function red(arr) {
    // char = "";
    z = 0;
    green = {};
    for (const a of arr) {
        // console.log(a);
        if(a in green){
            green[a] +=1;
            if (green[a] > z){
                z = green[a];
                char = a;
            }
        }
        else{
            green[a] = 1;
            if (green[a] > z){
                z = green[a];
            }
        }
    }
    console.log(`${char} (${z} times)`);
    // console.log(green)
}

red([1,1,2,3,4,4,4,4,4,5,'a','a','a','a']);














