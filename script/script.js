"use strict";

const userChoiceEl = document.getElementById("user-Choice");
const compChoiceEl = document.getElementById("comp-choice");
const resultEl = document.getElementById("result");
// helper variables
const weapons = ['rock', 'paper', 'scissor'];
let result = "";

function generateRandomNumber(n) {
  return Math.trunc(Math.random() * n);
}
function compareChoice(userChoice, compChoice) {
  if (userChoice === compChoice) {
    resultEl.innerText = "Game Draw";
  } else if (userChoice === 'rock') 
    {
        if(compChoice==='paper')
            {resultEl.innerText = "Computer Won"+" "+"User Lost";}
        else{
            resultEl.innerText = "User Won";
        }
    
  } 
  else if (userChoice == 'paper')
     {
        if(compChoice==='scissor')
            {resultEl.innerText = "Computer Won";}
        else{
            resultEl.innerText = "User Won";
        }
  }
   else if (userChoice == 'scissor') 
    {
        if(compChoice==='rock')
            {resultEl.innerText = "Computer Won";}
        else{
            resultEl.innerText = "User Won";
        }
  }
}
function check(weapon) {
  const userChoice = weapon;
  const compChoice = weapons[generateRandomNumber(weapons.length)];

  userChoiceEl.innerText = "User Choose" + " " + userChoice;
  compChoiceEl.innerText = "Computer Choose" + " " + compChoice;
  compareChoice(userChoice, compChoice);
}
