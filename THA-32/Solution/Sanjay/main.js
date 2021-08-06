"use strict";
exports.__esModule = true;
exports.addTwoArrays = exports.addTwoNumber = void 0;
var addTwoNumber = function (num1, num2) {
    return num1 + num2;
};
exports.addTwoNumber = addTwoNumber;
console.log(exports.addTwoNumber(5, 10));
var addTwoArrays = function (arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (element) {
        newArr.push(element);
    });
    arr2.forEach(function (element) {
        newArr.push(element);
    });
    return newArr;
};
exports.addTwoArrays = addTwoArrays;
console.log(exports.addTwoArrays([10, 20, 30], [1, "andkl", 3]));
var setPhoneNumber = function (user, number) {
    user.phone = number;
    return user;
};
console.log(setPhoneNumber({ name: "Sanjay", email: "sanjay@gmail.com", phone: 0 }, 1234567890));
var num = 0;
var userGender = "male";
// Class
var Person = /** @class */ (function () {
    function Person(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Person.prototype.getEmail = function () {
        return this.email;
    };
    return Person;
}());
var person1 = new Person("a", "aa@gmail.com", 1111);
console.log(person1);
