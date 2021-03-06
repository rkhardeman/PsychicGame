
//computer choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g",  "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
			"w", "x", "y", "z"];


//Declaring vars
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var userGuess = [];
var computerLetter = null;

//computer selects random letter
var computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
// console.log(computerLetter);


// //update guessesLeft when called
var updateGuessesLeft = function(){
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}


var updateLettersGuessed = function (){
	var lettersGuessedString = '';
	for (var i = 0; i < userGuess.length; i++){
		if(userGuess.length == 1 || i == (userGuess.length - 1)){
			lettersGuessedString += userGuess[i];
		} else {
			lettersGuessedString += userGuess[i] + ", ";
		}
	}
	document.querySelector('#lettersGuessed').innerHTML = "Your guesses so far: " + lettersGuessedString;
}

//this will be called after reset to change computers letter selection
var updateComputerLetter = function() {
  computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
};

// reset for after winning or losing...
var resetAll = function() {
  guessesLeft = 10;
  lettersGuessed = [];
  userGuess = [];
  updateComputerLetter();
  updateGuessesLeft();
  updateLettersGuessed();
};


//on key up excute 
document.onkeyup = function(event) {
	 userGuess.push(String.fromCharCode(event.keyCode).toLowerCase());

    	//decrease guesses on key up
        guessesLeft --;

	updateGuessesLeft();
	updateLettersGuessed();

		if (guessesLeft > 0){
			if (userGuess == computerLetter){
				wins ++;
				document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You win!");
                resetAll();
			}
		}else if (guessesLeft == 0 ){
			losses ++;
			document.querySelector('#losses').innerHTML = "Losses: " + losses;
			alert("You lose. Sorry!");
			resetAll();
		}

}
