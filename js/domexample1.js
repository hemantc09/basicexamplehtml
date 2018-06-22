// by hemantc09

//simple dom example to change the background color
var body = document.querySelector("body"); //select the body tag
var h1 = document.querySelector("h1"); //select the h1 tag

var isBlue = false;

setInterval(function(){

if(isBlue){
	body.style.background = "yellow";
	h1.style.color = "red";
}
else{
	body.style.background = "orange";
	h1.style.color = "green";
}
isBlue = !isBlue; // set isBlue to false  -  its a nice and short way to do it

},1000); // every second change the color 1000 milisecond  = 1 second