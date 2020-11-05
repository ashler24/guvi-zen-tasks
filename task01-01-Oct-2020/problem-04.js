// Parsing a list and transform the first and last elements of it:
// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

var array = ["GUVI","I","am","Geek"];

const transformFirstAndLast = (arr)=>{
    let first = arr[0];
    let last = arr[arr.length-1];
    let obj = {};
    obj[first] = last;
    return obj;
}

let obj= transformFirstAndLast(array);

console.log(obj);