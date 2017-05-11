var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuess = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

window.onload = function(event) {
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guessLeft").innerHTML = guessesLeft;
};
document.onkeyup = function(event) {
	var userChoice = event.key;
	lettersGuess = lettersGuess + userChoice + " ";

	if (userChoice === compGuess) {
		wins++;
		lettersGuess = "";
		guessesLeft = 9;
		compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	}
	else {
		guessesLeft--;
		if (guessesLeft === 0) {
			losses++;
			lettersGuess = "";
			guessesLeft = 9;
			compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		}
	}

	document.getElementById("lettersGuess").innerHTML = lettersGuess;
	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
	document.getElementById("guessLeft").innerHTML = guessesLeft;


};