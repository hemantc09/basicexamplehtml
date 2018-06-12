// by hemantc09

var arr = ["A","B","C",3,4];
console.log("0th index has: " + arr[0] );
arr[3] = "D";
console.log("4th index has: " + arr[3] );

/* define empty array
array declaration 
*/
var arr1 = [];
var arr2 = new Array();
var arr3 = [1,3,4,5,"charlie",'A'];
console.log("arr3 muliple type in one arrya "+arr3);
var arr4 = [1,2,3,4,5];
console.log("arr4 has lenth: "+ arr4.length);

console.log("array push and pop method");
var colors = ["red","blue",'black'];
console.log("array is: "+colors);
colors.push("pink");

console.log("array after push :" + colors);

colors.pop();
console.log("array after pop method: "+colors);


var arr5 = [1,2,3,4,5,6];
console.log("array is: "+arr5)
arr5.unshift(7); //adds to the front of the array
console.log("array after unshift : "+arr5)
var s = arr5.shift(); //returns the shifted element
console.log("array after shift: " + arr5);
console.log("array after shift - shifted element is: " + s);


console.log("indexOf array method");
var arr6 = [1,2,3,4,5];
console.log("index of 3 is : "+arr6.indexOf(3));

console.log("index of 6 is : "+arr6.indexOf(6));

//use slice() to copy parts of an array

arr7 = ["hemant","charly",'kate',"james","9",10];
console.log("slice method array: "+arr7);
var arr7copy = arr7.slice(2,4); 
//starts with 2 & end at 4 - doenst include 4 FYI
console.log("after slice(2,3) [removing data from array]: " + arr7copy);





