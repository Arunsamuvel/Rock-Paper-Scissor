"use strict";

const userChoiceEl = document.getElementById("user-Choice");
const compChoiceEl = document.getElementById("comp-choice");
// helper variables
const weapons = ["rock", "paper", "scissor"];

function generateRandomNumber(n) {
  return Math.trunc(Math.random() * n);
}
function check(weapon) {
  const userChoice = weapon;
  const compChoice = weapons[generateRandomNumber(weapons.length)];

  userChoiceEl.innerText = "User Choose" + " " + userChoice;
  compChoiceEl.innerText = "comp Choose" + " " + compChoice;
  compareChoice(userChoice, compChoice);
}
