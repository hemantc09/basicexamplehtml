// by hemantc09

var pTag = document.getElementsByTagName("p")[0];
console.log(pTag.textContent); // print the existing text
// use textContent carefully it might chagne existing html element e.g. here it will ignore the <strong> tag

var pTag1 = document.getElementsByTagName("p")[1];
console.log(pTag1.innerHTML);
//inner HTML select exact same as HTML
var ulTag = document.querySelector("ul");
console.log(ulTag.textContent); // use textContent carefully it might chagne existing html element

document.querySelector("h1").textContent = "welcome to my page - Text Content Manipulation";


console.log("******** See all body text Content *********");
console.log(document.body.textContent);


//document.body.innerHTML = "<h3> Good Bye!</h3>";