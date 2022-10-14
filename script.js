"use strict";
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const outputMessage = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const inputField = document.querySelector(".guess");
const centerNumber = document.querySelector(".number");

let highscore = 0;
let score = 20;

//Render messge function
const scoreMsgFunc = function (msg) {
  if (score > 1) {
    outputMessage.textContent = msg;
    score--;
    scoreEl.textContent = score;
  } else {
    outputMessage.textContent = "😥GAME OVER!";
    scoreEl.textContent = 0;
  }
};

//Generate random dice roll
let secretNumber = Math.floor(Math.random() * 20) + 1;

const checkBtn = btnCheck.addEventListener("click", function (e) {
  const guess = +inputField.value;
  console.log(typeof guess);

  //If there is no guess
  if (!guess) {
    return (outputMessage.textContent = "❌ NO NUMBER");
  }
  //if guess is correct
  if (guess === secretNumber) {
    outputMessage.textContent = "🎉 Correct Number";
    centerNumber.textContent = guess;
    document.querySelector("body").style.backgroundColor = "green";
    centerNumber.style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }
  }

  //if guess !=  secretNumber
  if (guess > secretNumber) scoreMsgFunc("⬆ Too High!");

  if (guess < secretNumber) scoreMsgFunc("⬇ Too Low!");
});

const tryAgainFunc = function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  outputMessage.textContent = "Start Guessing...";
  inputField.value = "";
  centerNumber.textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  centerNumber.style.width = "15rem";
  scoreEl.textContent = 20;
};
btnAgain.addEventListener("click", function () {
  tryAgainFunc();
});

//Escape key press triggers the Again button
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") tryAgainFunc();
});

