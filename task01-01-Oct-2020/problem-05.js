// Parsing a list of lists and convert into a JSON object:
// Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key - value pair.

var array = [
    ["make","Ford"],
    ["model","Mustang"],
    ["year","1964"]
];

const fromListToObject = (arr)=>{
    var newObj = {};
    for (const ele of array) {
        newObj[ele[0]]=ele[1];
    }
    return newObj;
}

console.log(fromListToObject(array));