"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 20;

/** ========================================================================== */

// Math.trunc(): trả về phần nguyên của một số bằng cách loại bỏ bất kỳ số thập phân.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
	const guess = Number(document.querySelector(".guess").value);

	// When there is no input
	if (!guess) {
		displayMessage("⛔️ No number!");

		// When player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		if (score > hightScore) {
			hightScore = score;
			document.querySelector(".highscore").textContent = hightScore;
		}

		// When guess is wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
			);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("💥 You lost the game!");
			document.querySelector(".score").textContent = 0;
		}
	}
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", () => {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	displayMessage("Start guessing...");
	document.querySelector(".score").textContent = score;
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.width = "15rem";
});
