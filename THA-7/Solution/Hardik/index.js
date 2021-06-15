var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

var objLibrary = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Steve Jobs", author: "Walter Isaacson", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];
//  Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]

//-------------    first function  ------------------------------------------------------------
const listProperty = (obj) => {
  return Object.keys(obj);
};

//-------------    second function  ------------------------------------------------------------
const delProperty = (obj) => {
  console.log("Object before deletion : ", obj);
  if (obj.rollno) delete obj.rollno;
  console.log("Object  deletion : ", obj);
};

//-------------  third function  ------------------------------------------------------------
const objectLength = (obj) => {
  return Object.keys(obj).length;
};

//-------------  fourth function  ------------------------------------------------------------
const showReadingStatus = (arr) => {
  for (obj of arr) {
    const { author, title, readingStatus } = obj;
    console.log(
      `Title : ${title} , Author : ${author} , ReadingStatus : ${readingStatus}`
    );
  }
};

//-------------  fifth function  ------------------------------------------------------------
class Cylinder {
  constructor(height = 0, radius = 0) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return (Math.PI * this.radius * this.radius * this.height).toFixed(4);
  }
}

//-------------  sixth function  ------------------------------------------------------------
const sortObj = (objects) => {
  objList = [];
  for (obj of objects) {
    objList.push(
      Object.keys(obj)
        .sort()
        .reduce(function (result, key) {
          result[key] = obj[key];
          return result;
        }, {})
    );
  }
  objList.sort((a, b) => {
    return b.libraryID - a.libraryID;
  });
  return objList;
};

// const keyPrint = (obj) => {
//   Object.keys(obj).reduce(function (result, key) {
//     result[key] = obj[key];
//     console.log(key);
//     return result;
//   }, {});
// };

console.log(listProperty(student));
console.log(objectLength(student));
showReadingStatus(library);
delProperty(student);
const cyl = new Cylinder(10, 10);
console.log(cyl.getVolume());
console.log(sortObj(objLibrary));
// keyPrint({ title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 });
