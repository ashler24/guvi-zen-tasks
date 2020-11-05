// Parsing an JSON object’s Values:
// Write a function called “printAllValues” which returns an newArray of all the input object’s values.

var object = {
    name:"Abhijeet",
    age:23,
    hasPets:false
}

const printAllValues = (obj)=>{
    let arr = [];
   for (const ele in obj) {
       arr.push(obj[ele]);
   }
   console.log(arr);
}

printAllValues(object);