// Parsing a list of lists and convert into a JSON object:
// Write a function called “transformGeekData” that transforms some set of data from one format to another.

var array = [
    [["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]],
    [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]],

];

const transformEmployeeData = (data)=>{
    let employee = {};
    let transformEmployeeList = [];
    
    for (let i = 0; i < data.length; i++) {
        // console.log(data[i]);
        for (let j=0; j<data[i].length; j++){
            // console.log(data[i][j]);
            var key = data[i][j][0];
            var value = data[i][j][1];
            employee[key] = value;
        }
        transformEmployeeList.push(employee);
        employee={};
    }

    return transformEmployeeList;
}

console.log(transformEmployeeData(array));
