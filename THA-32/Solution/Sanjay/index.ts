export const addTwo = (num : number) => {
  let add : number = 2;
  return num+add;
}

console.log(addTwo(5));

export const addStrings = (str1: string, str2: string) => {
  return str1 + str2;
}

console.log(addStrings("Hello", " World!"));

export const printArray = (arr : (number|string)[]) => {
  console.log(arr);
}

printArray([1, 2, 5])

interface UserType {
  name :string,
  email: string,
  phone: number
}

const printUser = (user : UserType) => {
  console.log(user);
}

printUser({name : "Sanjay", email: "sanjay@gmail.com", phone: 1000000000});

type CustomType = 0 | 1;

const print = (custom : CustomType) : void => {
  console.log(custom);
}

console.log(print(1))