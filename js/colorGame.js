	// by hemantc09
var numOfSquares = 6; 
var colors = generateRandomColors(numOfSquares) //string of array for 6 colors
var squares = document.querySelectorAll(".square");
//goal color to be picked
var pickedColor =  pickColor(); //function pick color
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
//make is look like selected easy button
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numOfSquares = 3; //easy mode 3 color only
	colors = generateRandomColors(numOfSquares); //generate only 3 random colors for 3
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for( var i = 0; i< squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

//make is look like selected hard button
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numOfSquares = 6;
	colors = generateRandomColors(numOfSquares); //generate only 3 random colors for 3
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for( var i = 0; i< squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

reset.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numOfSquares); // get teh array of colors[]
	//pick new random colors from arrya 
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor the span tag rgb(0,2,5) 
	colorDisplay.textContent = pickedColor;
	//change colors of square
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//change the background of h1
	h1.style.backgroundColor = "#232323";
	//change the message to blank
	message.textContent = " ";
});
colorDisplay.textContent = pickedColor; //assigning the picked color to RGB text display

for (var i = 0; i < squares.length; i++) {
	//on below line always use the style.backgroundColor instead of style.background
	// because style.background doesnt work on FF
	//add initial colors
	squares[i].style.backgroundColor = colors[i]; //assign colors the squares
	//add click listeres to square
	squares[i].addEventListener("click",function(){
		//grab color of the square
		var clickedColor = this.style.backgroundColor;
		//compare color to the picked color
		if(clickedColor === pickedColor){ 
			console.log(clickedColor, pickedColor)
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor); //pass the clicked color to change all square same picked color
			h1.style.backgroundColor = clickedColor; //make h1 background to clicked color
			reset.textContent = "Play Again?";

		}
		else{
			
			this.style.backgroundColor =  "#232323";
			messageDisplay.textContent = "Try again";
		}

	});
}


function changeColors(color){
	//all square to change each color to the given color e.g. picked correct color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick a random number
	//random number is from array length and floor it to get the whole number
	var random = Math.floor(Math.random() * colors.length); 
	//in above the length is 6 but we want the number between 1 to 5 ..
	//random dont include 6 FYI.
	return colors[random];
}

function generateRandomColors(num){
	//make an array 
	var arr = [];
	//repeat num times
	for (var i = 0 ; i < num ; i++) {
		//get random color push in to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256 ); //get number from 0 to 255
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256 );
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256 );
	return "rgb(" + r +", " + g + ", " + b + ")"; // rgb format  rgb(0, 255, 22); make a string 
}