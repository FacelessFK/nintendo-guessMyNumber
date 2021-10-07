"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;
console.log(secretNumber);

function displayMassage(massage) {
  document.querySelector(".message").textContent = massage;
}

document.querySelector(".check").addEventListener("click", check);
document.querySelector(".actionY").addEventListener("click", check);
document.querySelector(".again").addEventListener("click", again);
document.querySelector(".actionX").addEventListener("click", again);
document.querySelector(".DPAD-top").addEventListener(
  "click",
  () => {
    numberOrder("ArrowUp");
  },
  true
);
document.querySelector(".DPAD-bot").addEventListener(
  "click",
  () => {
    numberOrder("ArrowDown");
  },
  true
);

document.querySelector(".actionB").addEventListener("click", display);
document.querySelector(".gif").addEventListener("click", display);
document.addEventListener("keydown", function (e) {
  if (e.key === "x") {
    again();
  } else if (e.key === "y") {
    check();
  } else if (e.key === "b") {
    display();
  } else if (e.key === "ArrowUp") {
    numberOrder(e.key);
  } else if (e.key === "ArrowDown") {
    numberOrder(e.key);
  }
});
function display() {
  let display = document.querySelector(".display");
  display.style.visibility = "hidden";
  display.style.overflow = "hidden";
  display.style.height = "0";
  // display.style.width = "0";
  // display.style.display = "none";
}
function numberOrder(order) {
  let guessNumber = document.querySelector(".guess").value;
  if (order === "ArrowUp") {
    guessNumber++;
    document.querySelector(".guess").value = guessNumber;
  } else if (order === "ArrowDown") {
    guessNumber--;
    document.querySelector(".guess").value = guessNumber;
  }
}
function check() {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess || guess <= 0) {
    displayMassage("❌ pleas enter a number between 1 and 20");
  } else if (guess === secretNumber) {
    displayMassage("🥇 The correct number");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".content").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== secretNumber) {
    console.log("worng ");
    if (score > 1) {
      displayMassage(guess < secretNumber ? "📉 too low!" : "📈 too high");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMassage("💔 you lose try again!");
    }
  }
}
function again() {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMassage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".content").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
}
window.document.addEventListener("DOMContentLoaded", function () {
  // phoneAlert();
  startUp();
});
function startUp() {
  let elem = document.querySelector(".startup");
  elem.style.setProperty("-webkit-transition", "opacity 2s ease-in");
  elem.style.setProperty("transition", "opacity 2s ease-in");
  setTimeout(function () {
    elem.style.opacity = "0";
  }, 10);
  setTimeout(function () {
    elem.style.display = "none";
  }, 2000);
}
