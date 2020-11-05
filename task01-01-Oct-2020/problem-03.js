// Parsing an JSON object and convert it to a list:
// Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
 var object = {
     name:"ISRO",
     age:35,
     role:"Scientist"
 }

 const convertObjectToList = (obj) => {
     let list = [];
     for (const key in object) {
         if (object.hasOwnProperty(key)) {
            list.push([key, object[key]]);             
         }
     }
     return list;
 }

 console.log(convertObjectToList(object));