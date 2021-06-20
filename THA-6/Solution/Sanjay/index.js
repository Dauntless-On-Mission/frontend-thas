/* 1. Write a JavaScript function to check whether an input is an array or not */

const arr1_1 = "w3resource";
const arr1_2 = [1, 2, 4, 0];

const is_array = arr => {
  return Array.isArray(arr);
};

console.log(is_array(arr1_1));
console.log(is_array(arr1_2));

console.log("----------");

/* 2. Write a JavaScript function to clone an array */

const arr2_1 = [1, 2, 4, 0];
const arr2_2 = [1, 2, [4, 0]];

const array_clone = arr => {
  // deep copy VS shallow copy
  // REFER HERE: https://attacomsian.com/blog/javascript-deep-clone-array#:~:text=The%20simplest%20way%20to%20make%20a%20deep%20clone,an%20array%20with%20the%20help%20of%20JSON.parse%20%28%29.
  return JSON.parse(JSON.stringify(arr));
};

const arr2_3 = array_clone(arr2_1);
console.log(arr2_3);
const arr2_4 = array_clone(arr2_2);
console.log(arr2_4);

console.log("----------");

/* 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. */

const first = (arr, n = 1) => {
  if (arr) {
    return arr.splice(0, n);
  }
};

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
console.log(first([]));

console.log("----------");

/* 4. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"]; */

const arr4_1 = ["Red", "Green", "White", "Black"];
console.log(arr4_1.join(","));
console.log(arr4_1.join("+"));

console.log("----------");

/* 5. Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; */

const arr5_1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const most_frequent = arr => {
  const map = {};
  let freq = 0;
  let who = -1;
  if (arr)
    arr.forEach(a => {
      if (map[a]) {
        map[a] += 1;
      } else {
        map[a] = 1;
      }
      if (map[a] > freq) {
        freq = map[a];
        who = a;
      }
    });
  return `${who} ( ${freq} times )`;
};

console.log(most_frequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
console.log(most_frequent([]));

console.log("----------");
