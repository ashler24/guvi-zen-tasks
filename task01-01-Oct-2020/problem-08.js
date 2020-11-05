// Parsing JSON objects and Compare:
// I have a mock data of security Questions and Answers.You function should take the object and a pair of strings and should return if the quest is present and if its valid answer

var securityQuestions = [
    {
        question: "What was your first pet's name?",
        expectedAnswer: "FlufferNutter"
    },
    {
        question: "What was the model year of your first car ?",
        expectedAnswer: "1985"
    },
    {
        question: "What city were you born in?",
        expectedAnswer: "NYC"
    }
]

var ques = "What was your first pet's name?";
var ans =  "FlufferNutter";

const chksecurityQuestion = (securityQuestions,ques,ans)=>{
    let flag = false;
    for (const ele of securityQuestions) {
        flag = (ele.question===ques && ele.expectedAnswer===ans) ? true : false;
          if(flag){return true}
    }

    return flag;
}

// console.log(chksecurityQuestion(securityQuestions,ques,ans));
var status = chksecurityQuestion(securityQuestions,ques,ans);
console.log(status);