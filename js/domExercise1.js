// by hemantc09

//1.way ID
var elById= document.getElementById("first");
console.log("Element by id");
console.log(elById);


//2.way class name
var elByClass= document.getElementsByClassName("special")[0];
console.log("by class Name") ;
console.log(elByClass);


//3.way tag name
var elByTagName = document.getElementsByTagName("p")[0];
console.log("by tag name");
console.log(elByTagName);

//4.way query selector class
var elByQsc = document.querySelector(".special"); //it will give first result only
console.log("by query selector class name");
console.log(elByQsc);

//way to select by referring the adjucent tags e.g. after h1 + p
var temp = document.querySelector("h1 + p");
console.log("Select using adjucent tag  h1 + p:");
console.log(temp);



