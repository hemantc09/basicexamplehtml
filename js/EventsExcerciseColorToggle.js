// by hemantc09

var button = document.querySelector("button");

/*

button.addEventListener("click",funChangeColor); // function not call until user click.. dont use the ()

var isPurple =  false;
function funChangeColor() {
	if(isPurple){
		document.body.style.background = 'yellow';
		//isPurple = false;
	}
	else{
		document.body.style.background = 'purple';
		//isPurple = true;
	}
	isPurple = !isPurple; // switch true to false. nice short cut
}

//if you are  using documents.tag Name make sure you use the body[0]


*/


// another short cut way to do it 

button.addEventListener("click", function(){
	document.body.classList.toggle("purple"); // it adds the class which is purple or white .. toggle white or purple
});