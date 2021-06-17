function getKeys(obj){
    return Object.keys(obj);
}

function deleteKey(obj, key){
    console.log(`Before Delete: ${JSON.stringify(obj)}`);
    delete obj[key];
    console.log(`After Delete: ${JSON.stringify(obj)}`);
}

function getlength(obj){
    return `Length of Object: ${Object.keys(obj).length}`;
}

function getBookDescription(obj){
    obj.map((ele, index) => {
        console.log(`${index}.\nBook Name: ${ele.title}\nAuthor: ${ele.author}\nReading Status: ${ele.readingStatus}\n`);
    });
}

function cylinderVolume(obj){
    return `Volume of cylinder with radius ${obj.r} and height ${obj.h}: ${(obj.r*obj.h*2*Math.PI).toFixed(4)} unit square`;
}

function sortObj(obj){
    return obj.sort((a,b) => b.libraryID - a.libraryID);
}

console.log(getKeys({ name : "David Rayy", sclass : "VI", rollno : 12 }));
deleteKey({ name : "David Rayy", sclass : "VI", rollno : 12 }, "rollno");
console.log(getlength({ name : "David Rayy", sclass : "VI", rollno : 12 }))
getBookDescription( [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }])
console.log(cylinderVolume({r:2,h:2}));
console.log(sortObj([ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]));