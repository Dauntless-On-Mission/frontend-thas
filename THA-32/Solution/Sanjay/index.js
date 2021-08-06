export const addTwo = (num) => {
    let add = 2;
    return num + add;
};
console.log(addTwo(5));
export const addStrings = (str1, str2) => {
    return str1 + str2;
};
console.log(addStrings("Hello", " World!"));
export const printArray = (arr) => {
    console.log(arr);
};
printArray([1, 2, 5]);
const printUser = (user) => {
    console.log(user);
};
printUser({ name: "Sanjay", email: "sanjay@gmail.com", phone: 1000000000 });
const print = (custom) => {
    console.log(custom);
};
console.log(print(1));
