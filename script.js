'use strict';

// Setting the scores

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playing = true;

//FUNCTION SWITH PLAYERS

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  Player0Element.classList.toggle('player--active');
  Player1Element.classList.toggle('player--active');
};

//Selecting the active player window
let Player0Element = document.getElementById('player--0');
let Player1Element = document.getElementById('player--1');

// Selecting elements
let score0Element = document.getElementById('score--0');
let score1Element = document.getElementById('score--1');
score0Element.textContent = 0;
score1Element.textContent = 0;

let current0Element = document.getElementById('current--0');
let current1Element = document.getElementById('current--1');

//Selecting the DICE
const diceElement = document.querySelector('.dice');
diceElement.classList.add('hidden');

//Selecting the buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      //switch to next player
      switchPlayer();

      /* LARGER VERSION
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
    */
    }
  }
});

// HOLD FUNCTION

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // Check the winner SCORE>100
    if (score[activePlayer] >= 15) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  activePlayer = 0;
  document.querySelector(`.player--0`).classList.add('player--active');
  currentScore = 0;
  score = [0, 0];
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  diceElement.classList.add('hidden');
});
