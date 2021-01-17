(()=>{"use strict";var e={752:(e,t,n)=>{var a=new(n(14).Hangman),r="",s=a.attemptsLeft,o=document.getElementById("startGameBtn"),i=document.getElementById("phase-1"),d=document.getElementById("phase-2"),c=document.getElementById("guess-word"),g=document.getElementById("stats"),l=document.getElementsByTagName("style")[0];o.onclick=function(){i.classList.add("hide"),d.classList.remove("hide"),r=a.getRandomWord(),l.innerHTML+="#hangman div {\n  background: #fff;\n}",console.log(r);for(var e=0;e<r.length;e++)c.innerHTML+="<div>_</div>&nbsp;";g.innerHTML='<span class="badge badge-pill badge-success">Attempts left : '+s+"</span>"},document.querySelectorAll("input").forEach((function(e){e.addEventListener("click",(function(){console.log(e.value),a.inputLetterFromUser(e.value)?e.classList.add("correct-guess"):(e.disabled=!0,e.classList.add("wrong-guess"),a.attemptsLeft<1&&(confirm("You lost...play again?"),window.location.reload()),function(e){switch(e){case 0:l.innerHTML+="#hangman .right-leg{ background: #000; }";break;case 1:l.innerHTML+="#hangman .left-leg{ background: #000; }";break;case 2:l.innerHTML+="#hangman .right-arm{ background: #000; }";break;case 3:l.innerHTML+="#hangman .left-arm{ background: #000; }";break;case 4:l.innerHTML+="#hangman .body{ background: #000; }";break;case 5:l.innerHTML+="#hangman .head{ background: #000; }";break;case 6:l.innerHTML+="#hangman .right-bar{ background: #000; }";break;case 7:l.innerHTML+="#hangman .top-bar{ background: #000; }";break;case 8:l.innerHTML+="#hangman .left-bar{ background: #000; }";break;case 9:l.innerHTML+="#hangman .base{ background: #000; }"}}(a.attemptsLeft)),c.innerHTML=a.getWordStatus(),c.innerText.length===r.length&&(confirm("You won the game....Play again?"),window.location.reload()),a.attemptsLeft>7?g.innerHTML='<span class="badge badge-pill badge-success">Attempts left : '+a.attemptsLeft+"</span>":a.attemptsLeft>4&&a.attemptsLeft<8?g.innerHTML='<span class="badge badge-pill badge-warning">Attempts left : '+a.attemptsLeft+"</span>":g.innerHTML='<span class="badge badge-pill badge-danger">Attempts left : '+a.attemptsLeft+"</span>"}))}))},14:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.words=["NODEJS","JAVASCRIPT","METEOR","ANGULAR","REACT"],this.secretWord="",this.letters=[],this.attemptsLeft=10}return e.prototype.getRandomWord=function(){var e=Math.floor(Math.random()*this.words.length);return this.secretWord=this.words[e],this.secretWord},e.prototype.inputLetterFromUser=function(e){var t=e.toUpperCase();if(this.letters.indexOf(t)>-1)return!1;this.letters.push(t);var n=this.secretWord.indexOf(t)>-1;return n||--this.attemptsLeft,n},e.prototype.getWordStatus=function(){var e=this,t=[];return this.secretWord.split("").forEach((function(n){e.letters.indexOf(n)>-1?t.push(n):t.push(" _ ")})),t.join("")},e}();t.Hangman=n}},t={};!function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}(752)})();