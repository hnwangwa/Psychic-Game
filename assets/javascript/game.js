// To make sure html loads first before Javascript gets run
$(document).ready(function() {
// Variables for the various counters
	var winsCounter = 0;
	var lossCounter = 0;
	var guessesLeft = 9;
	
//This array is currently empty but will populate as the user plays
	var incorrectGuesses = [];
//This array is for all the possible letters for the computer to choose from
	var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
	"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//This resets the game, but works only after a key is pressed again. Unsure how to fix.
	var reset = function () {
		guessesLeft = 9;
		incorrectGuesses = [];
		computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.
  		length)];
}
 // Randomly chooses a choice from the letters array (computer's guess)
  	var computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.
  		length)];
// Function to track what the user typed
	document.onkeyup= function (event) {
		
//This is the jQuery version of event.key
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//This was meant to prevent keys from double counting, but I had troubleshooting problems
//if (incorrectGuesses.indexOf(userGuess) < 0 && letterChoices.indexOf(userGuess) >= 0) {
		//incorrectGuesses[incorrectGuesses.length]=userGuess;
	//}

//Conditional if the user guesses the right letter

	if ((userGuess === computerGuess)) {
		alert("Whoa, you must be psychic! I was thinking " + computerGuess);
		winsCounter ++;
		document.querySelector("#Wins").innerHTML =
		"Wins: " + winsCounter;
		reset();
				
	}
	else {
//Conditional if user guesses wrong. 
		guessesLeft--;
//This adds the incorrect guess to that empty array above.
		incorrectGuesses.push(userGuess);

//This will display how many guesses are left
		document.querySelector("#GuessesLeft").innerHTML = 
		"Guesses Left: " + guessesLeft;
//And this should display what the guess itself was
		document.querySelector("#CurrentGuesses").innerHTML =
		"Your Guesses so far: " + incorrectGuesses.join(", ");
	}
//I want this to stop the game...but to maintain the counters
	if ((guessesLeft < 1)) {
	alert("Game over...it looks like your psychic powers have run out");
	lossCounter++;
	document.querySelector("#Losses").innerHTML =
	"Losses: " + lossCounter;
	reset();
	
}
	
}
 
	
	
});