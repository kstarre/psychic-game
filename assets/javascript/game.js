var wins = 0;
var losses = 0;
var lettersGuess = "";
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
	// When user presses key that becomes their choice
	var userChoice = event.key;
	var compGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	var lettersGuess = userChoice + " ";
	var guessesLeft = 9;

			if (userChoice === compGuess) {
				wins++;
				document.getElementById("wins").innerHTML = wins;
			}
			else {
				guessesLeft--;
				document.getElementById("lettersGuess").innerHTML = lettersGuess;
				document.getElementById("numGuess").innerHTML = guessesLeft;
			}
/*			losses++;
			document.getElementById("losses").innerHTML = losses;
		}*/


/*	loop1:
	for (var i = 0; i < 9 ; i++) {
		document.getElementById("numGuess").innerHTML = guessesLeft;
		if (userChoice === compGuess) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			break loop1;
		}
		else {
			guessesLeft--;
			document.getElementById("lettersGuess").innerHTML = lettersGuess;
		}
	}
	if (guessesLeft === 0) {
		losses++;
		document.getElementById("losses").innerHTML = losses;
	};*/
};