//resources
const startBtn = document.getElementById("play");
const highScoresBtn = document.getElementById('highscores');
let questionEle = document.getElementById('question');
let questionContainerEle = document.querySelector('.answer-buttons');
let questionNumberEle = document.getElementById('que-num');
let scoreEle = document.getElementById('score');

let answerSelFlag = false;

let score = 0;
let questionNumber = 0;

let questions = [];

document.body.onload = getQuestions;

async function getQuestions() {
    localStorage.clear();
    await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple')
        .then(response => response.json())
        .then(data => { questions = data.results;
            document.querySelector('.lds-ripple').classList.add('hide');
            document.querySelector('.container-sm').classList.remove('hide');
        });

    console.log(questions);
    setQuestion(questionNumber);
}

function setQuestionNumber() {
    questionNumber++;
    questionNumberEle.innerHTML = `${questionNumber} \\ ${questions.length}`;
}

function setQuestion(qnum) {
    //to set the question.
    setQuestionNumber();
    questionEle.innerHTML = questions[qnum].question;
    //to set the answers
    setAnswers(qnum);
}


function setAnswers(qnum) {
    //for correct answer
    let div = document.createElement('div');
    let badgeDiv = document.createElement('div');
    badgeDiv.classList.add('badge', 'badge-primary');
    badgeDiv.innerHTML = '<i class="fas fa-arrow-right"></i>';
    let answerBtn = document.createElement('button');
    answerBtn.classList.add('btn');
    answerBtn.setAttribute('value', "correct_answer");
    answerBtn.innerHTML = questions[qnum].correct_answer;
    answerBtn.addEventListener("click", checkAnswers);
    div.append(badgeDiv);
    div.append(answerBtn);
    questionContainerEle.append(div);

    //for incorrect answers
    questions[qnum].incorrect_answers.forEach(item => {
        let div = document.createElement('div');
        let badgeDiv = document.createElement('div');
        badgeDiv.classList.add('badge', 'badge-primary');
        badgeDiv.innerHTML = '<i class="fas fa-arrow-right"></i>';
        let answerBtn = document.createElement('button');
        answerBtn.classList.add('btn');
        answerBtn.setAttribute('value', "incorrect_answer");
        answerBtn.innerHTML = item;
        answerBtn.addEventListener("click", checkAnswers);
        div.append(badgeDiv);
        div.append(answerBtn);
        questionContainerEle.append(div);
    })

}

//closure
//  function checkIfAnswerSelected() {
//      let checkIfAnswerSelectedFlag = false;

//      return function setFlagIfAnswerSelected(flag) {
//           checkIfAnswerSelectedFlag = flag;
//      }
//  }


function checkAnswers(e) {
    let answerEle = e.target;
    stopBtnClickAfterSelect();
    if (answerEle.value === "correct_answer") {
        score += 100;
        scoreEle.innerHTML = score.toString();
        answerEle.classList.add('correct-ans');
        answerSelFlag = true;
    }
    else {
        answerEle.classList.add('incorrect-ans');
        answerSelFlag = true;
    }

}

function setNextQuestion() {

    if(questionNumber==10){
        checkIfQueOver();
     }

    if (!answerSelFlag) {
        let alertDiv = document.createElement('div');
        alertDiv.classList.add('alert', 'alert-danger', 'mt-1');
        alertDiv.innerHTML = "You should select answer from above.";
        document.getElementById('next').parentElement.append(alertDiv);

        setTimeout(() =>{
            document.querySelector('.container-sm').lastElementChild.lastElementChild.remove();
        },2000);

        return false;
    }
    else {
        while (questionContainerEle.children.length) {
            questionContainerEle.removeChild(questionContainerEle.firstElementChild);
        }
        setQuestion(questionNumber);
    }

    answerSelFlag = false;

}

function stopBtnClickAfterSelect() {
    let answerBtns = document.querySelectorAll('.btn');

    for(let i = 0; i < answerBtns.length-2; i++){
        answerBtns[i].setAttribute('disabled','true');
    }
}

function checkIfQueOver(){
    if (questionNumber == 10) {
        document.querySelector('.container-sm').classList.add('hide');
        let scoreInfoDiv = document.getElementById('score-info');
        scoreInfoDiv.classList.remove('hide');
        let highScore = localStorage.getItem('highScore');
        if (!highScore) {
            localStorage.setItem('highScore', score);
            highScore = score;
        }
        else if (highScore < score) {
            localStorage.setItem('highScore', score);
            highScore = score;
        }

        let highScoreEle = document.getElementById('high-score');
        highScoreEle.innerHTML = highScore;

        let yourScoreEle = document.getElementById('your-score');
        yourScoreEle.innerHTML = score;

        setTimeout(() => {
            // window.location.href = 'http://127.0.0.1:5500/QuizApp/index.html'
            window.location.href = 'https://quize-app-js.netlify.app/index.html'
            
        }, 10000)
    }
}






