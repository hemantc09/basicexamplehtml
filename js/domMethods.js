// by hemantc09
// 1. getElementByID

var tag = document.getElementById("highlight");
console.log("by id: ");
console.log(tag);

//2. getElementsByClassName

var classTags = document.getElementsByClassName("bolded");
console.log("by Class Name: ");
console.log(classTags);

//3. getElementsByTagName 

var tagName = document.getElementsByTagName("li");
console.log("by tagName");
console.log(tagName);

//querySelector

var tagName1= document.querySelector("p");  //use # just like css Id
console.log("using querySelector #tag Name");
console.log(tagName1);

var tag1 = document.querySelector("#highlight");  //use # just like css Id
console.log("using querySelector #ID");
console.log(tag1);

var tag2 = document.querySelector(".bolded");
console.log("using querySelector . class"); //use . just like css class
console.log(tag2);

