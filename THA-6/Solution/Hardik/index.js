const is_array = (input) => {
  return Array.isArray(input);
};

const array_clone = (array) => {
  return [...array];
};

const first = (arr, n = 1 ) => {
  return arr.slice(0, n);
};

const joinArray = (arr) => {
  console.log(`"${arr.join(",")}"`);
  console.log(`"${arr.join("+")}"`);
};

const mostFrequent = (arr) => {
  let elementMap = {};
  for (a of arr) {
    if (a in elementMap) elementMap[a]++;
    else elementMap[a] = 1;
  }
  frequency = 0;
  for (char in elementMap)
    if (elementMap[char] > frequency) {
      frequency = elementMap[char];
      maxOccured = char;
    }

  console.log(`${maxOccured} (${frequency} times)`);
};

console.log(is_array("w3resources"));
console.log(is_array([1, 2, 4, 0]));
console.log(array_clone([2, 4, 5]));
console.log(first([7, 9, 0, -2], 3));
joinArray(["Red", "Green", "Violet", "Black"]);
mostFrequent([3, "a", "a", "a", 2, 3, 3, 3, "a", "a"]);
