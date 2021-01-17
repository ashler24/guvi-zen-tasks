import { Hangman } from "./hangman.js";
let hangman: Hangman = new Hangman();
let wordToDisplay: string = "";
let attemptsLeft: number = hangman.attemptsLeft;

const startGameBtn = <HTMLElement>document.getElementById("startGameBtn");
const phaseOneEle = <HTMLElement>document.getElementById("phase-1");
const phaseTwoEle = <HTMLElement>document.getElementById("phase-2");
let guessWordEle = <HTMLElement>document.getElementById("guess-word");
let statsEle = <HTMLElement>document.getElementById("stats");
let css = <HTMLElement>document.getElementsByTagName("style")[0];

startGameBtn.onclick = () => {
  phaseOneEle.classList.add("hide");
  phaseTwoEle.classList.remove("hide");
  wordToDisplay = hangman.getRandomWord();
  css.innerHTML += `#hangman div {
  background: #fff;
}`;

  console.log(wordToDisplay);

  for (let i = 0; i < wordToDisplay.length; i++) {
    guessWordEle.innerHTML += "<div>_</div>&nbsp;";
  }

  statsEle.innerHTML = `<span class="badge badge-pill badge-success">Attempts left : ${attemptsLeft}</span>`;
};

let keyBoardInputs = document.querySelectorAll("input");
keyBoardInputs.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.value);
    if (!hangman.inputLetterFromUser(item.value)) {
      item.disabled = true;
      item.classList.add("wrong-guess");
      if (hangman.attemptsLeft < 1) {
        if (confirm("You lost...play again?")) {
          window.location.reload();
        } else {
          window.location.reload();
        }
      }
      drawHangmanOnError(hangman.attemptsLeft);
    } else {
      item.classList.add("correct-guess");
    }
    guessWordEle.innerHTML = hangman.getWordStatus();
    
    if (guessWordEle.innerText.length === wordToDisplay.length) {
      if (confirm("You won the game....Play again?")) {
        window.location.reload();
      } else {
        window.location.reload();
      }
    }
    if (hangman.attemptsLeft > 7) {
      statsEle.innerHTML = `<span class="badge badge-pill badge-success">Attempts left : ${hangman.attemptsLeft}</span>`;
    } else if (hangman.attemptsLeft > 4 && hangman.attemptsLeft < 8) {
      statsEle.innerHTML = `<span class="badge badge-pill badge-warning">Attempts left : ${hangman.attemptsLeft}</span>`;
    } else {
      statsEle.innerHTML = `<span class="badge badge-pill badge-danger">Attempts left : ${hangman.attemptsLeft}</span>`;
    }
  });
});

function drawHangmanOnError(attemptsLeft: number) {
  switch (attemptsLeft) {
    case 0:
      css.innerHTML += `#hangman .right-leg{ background: #000; }`;
      break; 
    case 1:
      css.innerHTML += `#hangman .left-leg{ background: #000; }`;
      break; 
    case 2:
      css.innerHTML += `#hangman .right-arm{ background: #000; }`;
      break; 
    case 3:
      css.innerHTML += `#hangman .left-arm{ background: #000; }`;
      break; 
    case 4:
      css.innerHTML += `#hangman .body{ background: #000; }`;
      break; 
    case 5:
      css.innerHTML += `#hangman .head{ background: #000; }`;
      break; 
    case 6:
      css.innerHTML += `#hangman .right-bar{ background: #000; }`;
      break; 
    case 7:
      css.innerHTML += `#hangman .top-bar{ background: #000; }`;
      break; 
    case 8:
      css.innerHTML += `#hangman .left-bar{ background: #000; }`;
      break; 
    case 9:
      css.innerHTML += `#hangman .base{ background: #000; }`;
      break; 
  }
}

// (function(){
//   if (guessWordEle.innerText.length === wordToDisplay.length) {
//     if (confirm("You won the game....Play again?")) {
//       window.location.reload();
//     }
//   }
// }())
