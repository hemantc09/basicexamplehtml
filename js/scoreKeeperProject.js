// by hemantc09
var p1Button = document.querySelector("#p1"); //# for the id in the query selector
var p2Button = document.getElementById("p2");
var resetBtn  = document.getElementById("resetBtn");//("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type = 'number']");
var winnningScoreDisplay = document.querySelector("p span"); //span inside the p tag
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore =   numInput // this is the winning score 5

p1Button.addEventListener("click", function(){ //player 1 score
	if(!gameOver){ // if game is not over e.g. user is not reached to winning score of 5 then 
		p1Score++; //user can increment the score
		console.log(p1Score, winningScore);
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;	
	}
	
});
p2Button.addEventListener("click", function(){ //player 2 scare
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;	
	}
	
});
resetBtn.addEventListener("click", function(){ //change is the event

	reset();
	
});
function reset(){
	gameOver= false; //set game over to false to keep playing after reset
	p1Score = 0; //reset the score to 0
	p2Score = 0;
	p1Display.textContent = 0; //reset the content to 0
	p2Display.textContent = 0;
	p1Display.classList.remove("winner"); // remove the class after reset
	p2Display.classList.remove("winner");
}
numInput.addEventListener("click", function(){

	if(numInput.value < 0){
		alert("Enter winning score greater than 0")
	}
	else
	{
		winnningScoreDisplay.textContent = numInput.value; //assign the input value to the display
		winningScore = Number(numInput.value);
		reset();//if the number input change halfway game reset the score
	}
});