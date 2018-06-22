// by hemantc09

var h1Tag = document.querySelector("h1");
h1Tag.style.color = "red";
h1Tag.style.border = "5px solid purple";

var img1 = document.querySelector("img");
img1.classList.add("some_class"); // added class from css fil to img using js externally

var p = document.querySelector("p");
p.classList.add("big");

/*to remove the class use the remove method of classList
e.g. p.classList.remove("class_name");
*/