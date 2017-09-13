// To make sure html loads first before Javascript gets run
$(document).ready(function() {
// Variables for the various counters
	var winsCounter = 0;
	var lossCounter = 0;
	var guessesLeft = 10;
	
//This array is currently empty but will populate as the user plays
	var incorrectGuesses = [];
//This array is for all the possible letters for the computer to choose from
	var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
	"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

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
		document.querySelector("#empty-div").innerHTML =
		("You must be psychic! Press any key to impress Ms. Cleo again!");
		winsCounter ++;
		guessesLeft = 10;
		incorrectGuesses = [];
		computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.
		length)];
		document.querySelector("#Wins").innerHTML =
		"Wins: " + winsCounter;
		
				
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
	document.querySelector("#empty-div").innerHTML = 
	("Game over...press any key to try again!");
	lossCounter++;
	guessesLeft = 10;
	incorrectGuesses = [];
	computerGuess = letterChoices[Math.floor(Math.random() * letterChoices.
	length)];
	document.querySelector("#Losses").innerHTML =
	"Losses: " + lossCounter;
	
	
}
	
}
 
	
	
});