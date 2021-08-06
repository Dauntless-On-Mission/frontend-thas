export const addTwoNumber = (num1 : number, num2 : number) : number => {
  return num1 + num2;
}

console.log(addTwoNumber(5, 10))

type NumberOrString = number | string;

export const addTwoArrays = (arr1 : NumberOrString[], arr2 : NumberOrString[]) : NumberOrString[] => {
  let newArr : NumberOrString[] = [];
  arr1.forEach(element => {
    newArr.push(element);
  });

  arr2.forEach(element => {
    newArr.push(element);
  });

  return newArr;
}

console.log(addTwoArrays([10, 20, 30], [1, "andkl", 3]))

// objecta

interface UserType {
  name: string,
  email: String,
  phone: number
}

const setPhoneNumber = (user : UserType, number : number) : UserType => {
  user.phone = number;
  return user;
}

console.log(setPhoneNumber(  {name: "Sanjay", email: "sanjay@gmail.com", phone: 0}, 1234567890 ));

// type

type ZeroOrOneOptions = 0 | 1;
type MaleOrFemailOptions = "male" | "female" | "other";

let num : ZeroOrOneOptions = 0;
let userGender : MaleOrFemailOptions = "male"

// Class

class Person {
  name: string;
  email: string;
  phone: number;

  constructor(name : string, email :string, phone : number) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }

  getEmail() : string {
    return this.email;
  }
}

let person1 = new Person("a", "aa@gmail.com", 1111);
console.log(person1)