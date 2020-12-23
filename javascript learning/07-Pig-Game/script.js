"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activitePlayer, playing, playerScore;

// Starting conditions
const init = () => {
	scores = [0, 0];
	currentScore = 0;
	activitePlayer = 0;
	playing = true;
	playerScore = 0;

	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;

	diceEl.classList.add("hidden");
	player0El.classList.remove("player--winner");
	player1El.classList.remove("player--winner");
	player0El.classList.add("player--active");
	player1El.classList.remove("player--active");
};
init();

const switchPlayer = () => {
	playerScore += currentScore;
	document.querySelector(
		`#score--${activitePlayer}`
	).textContent = playerScore;
	currentScore = 0;
	activitePlayer = activitePlayer === 0 ? 1 : 0;
	player0El.classList.toggle("player--active");
	player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", () => {
	// 1. Generating a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;

	// 2. Display dice
	diceEl.classList.remove("hidden");
	diceEl.src = `dice-${dice}.png`;

	// 3. Check for rolled 1
	if (dice !== 1) {
		// Add dice to current score
		currentScore += dice;
		document.querySelector(
			`#current--${activitePlayer}`
		).textContent = currentScore;
	} else {
		// Switch to next player
		switchPlayer();
	}
});

btnNew.addEventListener("click", init);
