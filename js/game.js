// by hemantc09
var secretNumber  = 5;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//Number(guess) this will pass the string number we got from promot and convert to number version



if(secretNumber === guess)
{
	alert("bingo you got it");
}
else if(guess < secretNumber)
{
	alert("Your guess is to low")
}
else
{
	alert("Your guess is to high")
}

