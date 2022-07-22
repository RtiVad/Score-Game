'use strict';

// Setting the scores

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];

//Selecting the active player window
let Player0Element = document.getElementById('player--0');
let Player1Element = document.getElementById('player--1');

// Selecting elements
let score0Element = document.querySelector('#score--0');
let score1Element = document.getElementById('score--1');
score0Element.textContent = 0;
score1Element.textContent = 0;

let current0Element = document.querySelector('#current--0');
let current1Element = document.querySelector('#current--1');

//Selecting the DICE
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

//Selecting the buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Rolling dice function
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2 .Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  console.log(dice);

  // 3. Check for RULE 1 to change active player
  if (dice !== 1) {
    //adding dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    if (activePlayer === 0) {
      activePlayer = 1;
      Player0Element.classList.remove('player--active');
      Player1Element.classList.add('player--active');
    } else {
      activePlayer = 0;
      Player1Element.classList.remove('player--active');
      Player0Element.classList.add('player--active');
    }
    currentScore = 0;
    document.getElementById(`current--0`).textContent = currentScore;
    document.getElementById(`current--1`).textContent = currentScore;
  }
});
