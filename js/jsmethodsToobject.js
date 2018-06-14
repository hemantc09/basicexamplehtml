// by hemantc09

console.log("Adding methods to an object");
var obj = {
	name : "charly",
	age: 25,
	friends: ["bob","tina"],
	add: function(x,y){ //method add
		return x+y;
	}
};

console.log("add function call : "+ obj.add(12,3));

//this keyword

//underscorejs.org popular js library

console.log("this keyword below :");

var comments = {};
comments.data = ["good job","bad review","bye"];

/*
without this 
function printarr(arr){    /
	arr.forEach(function(element){
		console.log(element);
	});
}

*/

//with this keyword

comments.printarr = function(){
	this.data.forEach(function(element){
		console.log(element);
	});
}


comments.printarr();