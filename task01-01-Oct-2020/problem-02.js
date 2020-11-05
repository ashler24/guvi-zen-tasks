// Parsing an JSON object’s Keys:
// Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
var object = {
    name: "Abhijeet",
    age: 23,
    hasPets: false
}

const printAllKeys = (obj)=>{
    let arr = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

console.log(printAllKeys(object));

