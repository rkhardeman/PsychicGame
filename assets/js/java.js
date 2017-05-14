
//computer choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g",  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
			"w", "x", "y", "z"];


//Declaring vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var computerLetter = null;

//computer selects random letter
var computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// //update guessesLeft when called
var updateGuessesLeft = function(){
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

//this will be called after reset to change computers letter selection
var updateComputerLetter = function() {
  computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// reset for after winning or losing...
var resetAll = function() {
  guessesLeft = 10;
  lettersGuessed = [];
  updateComputerLetter();
  updateGuessesLeft();
};


//on key up excute 
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    	//decrease guesses on key up
        guessesLeft --;

	//push letter to userGuess, update guesses remaining and letters guessed
	// lettersGuessed.push(userGuess);
		updateGuessesLeft();
	// updateLettersGuessed();

		if (guessesLeft > -1){
			if (userGuess === computerLetter){
				wins ++;
				document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You win!");
                resetAll();
			}
		}else if (guessesLeft === -1){
			losses ++;
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			alert("You lose. Sorry!");
			resetAll();
		}

}
