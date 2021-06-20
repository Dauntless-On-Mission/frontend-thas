// FUNCTION FOR Q1

function is_array(arr) {
    return Array.isArray(arr);
}


// FUNCTION FOR Q2

// Spread Operator (Shallow copy)
// Ever since ES6 dropped, this has been the most popular method. It’s a brief syntax and you’ll find it incredibly useful when using libraries like React and Redux.

// Eg.
// numbers = [1, 2, 3];
// numbersCopy = [...numbers];
// console.log(numbersCopy);

function array_Clone(arr) {
    return [...arr];
}


// FUNCTION FOR Q3

function first1(arr){
    return arr[0];
}

function first2(arr, n) {
    if(n>=0) {
        return arr.slice(0, n);
    }
    else {
        return [];
    }
}


// FUNCTION FOR Q4

function joining_array(arr) {
    console.log(arr.join("."));
    console.log(arr.join(","));
    console.log(arr.join("+"));
}


// FUNCTION FOR Q5

function most_frequent(arr) {
    let hashmap = {};

    arr.forEach(i => {
        if(i in hashmap) {
            hashmap[i] += 1;
        }
        else {
            hashmap[i] = 1;
        }
    });

    // console.log(hashmap);

    let count = 0;
    let ans;
    for(key in hashmap) {
        if(count < hashmap[key]) {
            ans = key;
            count = hashmap[key];
        }
    };

    console.log(ans + " ( " + count + " times " + ")");
}


// ------------------------------------------------------------

console.log("QUESTION 1");
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log();


console.log("QUESTION 2");
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
console.log();


console.log("QUESTION 3");
console.log(first1([7, 9, 0, -2]));
console.log(first2([],3));
console.log(first2([7, 9, 0, -2],3));
console.log(first2([7, 9, 0, -2],6));
console.log(first2([7, 9, 0, -2],-3));
console.log();


console.log("QUESTION 4");
joining_array(["Red", "Green", "White", "Black"]);
console.log();


console.log("QUESTION 5");
most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);