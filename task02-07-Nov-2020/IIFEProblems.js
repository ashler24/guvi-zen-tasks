//Print odd numbers in an array
// (function(arr){
//     console.log(arr.filter(x=>x%2!==0))
// })([1,2,3,4,5])
//========================================================================================================================>
//Convert all the strings to title caps in a string array
// (function(string){
//     let stringArray = string.split(" ");
//     for (let index = 0; index < stringArray.length; index++) {
//         stringArray[index] = stringArray[index][0].toUpperCase() + stringArray[index].slice(1)
//     }
//     console.log(stringArray.join(" "));
// })("my name is ashler")
//========================================================================================================================>

//Sum of all numbers in an array
// (function(arr){
//     console.log(arr.reduce((result, item) => result + item,0))
// })([1,2,3,4,5])
//========================================================================================================================>

//Return all the prime numbers in an array 
// (function (arr){
//     let result = arr.filter(item=>{
        
//         if(item<=2) return item === 2;
//         else{
//             for (let index = 3; index < item; index++){
                
//                 if (item % 2 === 0) {
//                     return false;
//                 }
                
//                 if((item % index) === 0){
//                     return false;
//                 }
                
//             }

//             return true;
//         }
//     })

//     console.log(result);
// })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
//========================================================================================================================>
//
//========================================================================================================================>
//========================================================================================================================>
//========================================================================================================================>
