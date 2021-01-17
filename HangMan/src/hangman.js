"use strict";
// function Hangman () {
// }
Object.defineProperty(exports, "__esModule", { value: true });
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
var Hangman = /** @class */ (function () {
    function Hangman() {
        this.words = ["NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR", "REACT"];
        this.secretWord = "";
        this.letters = [];
        this.attemptsLeft = 10;
    }
    Hangman.prototype.getRandomWord = function () {
        var random = Math.floor(Math.random() * this.words.length);
        this.secretWord = this.words[random];
        return this.secretWord;
    };
    Hangman.prototype.inputLetterFromUser = function (letter) {
        var uppercaseLetter = letter.toUpperCase();
        if (this.letters.indexOf(uppercaseLetter) > -1) {
            return false;
        }
        this.letters.push(uppercaseLetter);
        var correct = this.secretWord.indexOf(uppercaseLetter) > -1;
        if (!correct) {
            --this.attemptsLeft;
        }
        return correct;
    };
    Hangman.prototype.getWordStatus = function () {
        var _this = this;
        var wordStatus = [];
        var splitedWord = this.secretWord.split("");
        splitedWord.forEach(function (item) {
            if (_this.letters.indexOf(item) > -1) {
                wordStatus.push(item);
            }
            else {
                wordStatus.push(" _ ");
            }
        });
        return wordStatus.join("");
    };
    return Hangman;
}());
exports.Hangman = Hangman;
