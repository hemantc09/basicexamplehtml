// by hemantc09
var  button = document.querySelector("button");
button.addEventListener("click", function(){
	console.log("Someone clicked the button");
	document.querySelector("h1").textContent = "you clicked me"
	var p = document.getElementsByTagName("p")[0];//index is important
	p.style.color = 'red';
});
