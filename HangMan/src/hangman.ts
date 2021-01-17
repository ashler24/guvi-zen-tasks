// function Hangman () {
// }

// Hangman.prototype._getWord = function () {
// };

// Hangman.prototype._isFinished = function () {
// };

// Hangman.prototype._gameOver = function () {
// };

// Hangman.prototype.askLetter = function (letter) {
// };

// Hangman.prototype.gameStatus = function () {
// };

// Hangman.prototype.getWordStatus = function () {
// };
export class Hangman {
  words: Array<string>;
  secretWord: string;
  letters: Array<any>;
  attemptsLeft: number;

  constructor() {
    this.words = ["NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR", "REACT"];
    this.secretWord = "";
    this.letters = [];
    this.attemptsLeft = 10;
  }

  getRandomWord(): string {
    let random = Math.floor(Math.random() * this.words.length);
    this.secretWord = this.words[random];
    return this.secretWord;
  }

  inputLetterFromUser(letter: string): boolean {
    let uppercaseLetter: string = letter.toUpperCase();

    if (this.letters.indexOf(uppercaseLetter) > -1) {
      return false;
    }

    this.letters.push(uppercaseLetter);
    let correct: boolean = this.secretWord.indexOf(uppercaseLetter) > -1;

    if (!correct) {
      --this.attemptsLeft;
    }

    return correct;
  }

  getWordStatus(): string {
    let wordStatus: Array<String> = [];
    let splitedWord: Array<String> = this.secretWord.split("");

    splitedWord.forEach((item) => {
      if (this.letters.indexOf(item) > -1) {
        wordStatus.push(item);
      } else {
        wordStatus.push(" _ ");
      }
    });

    return wordStatus.join("");
  }

  // getGameStatus():boolean{
  //   if(this.attemptsLeft<=0){
  //     return false;
  //   }
  // }

}
