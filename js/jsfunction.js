// 
// 1. simple function
function sing()
{
	console.log("I am singing song");
}

sing(); //call sing() function

//2 calculate square with argument

function calsquare(num)
{
	console.log("square of "+num + " is " + num * num);
}

calsquare(9);


//3. calcualte area of rectangular

function rectarea(length, width)
{
	console.log("rectangular area : " + (length * width));
}

rectarea(3,4);

//4. return argument from function

var n = 3;

function squareReturn(num)
{
	return num * num;
}


var rs = squareReturn(n);
console.log("square of the " + n + " is " + rs);

//5. capitallize first letter of string

function capilFirstLetter(city)
{
	return city.charAt(0).toUpperCase() + city.slice(1);
}

var returnCity = capilFirstLetter("yalgud");
console.log("capitallize first letter of string: " + returnCity);


//6. check if is number or string and return


function capitalizeLetter(str){
	if( typeof str === "number"){
		return  "input " + str + " is not a string";
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}


var city = 10;
var capital  =  capitalizeLetter(city);
console.log("output is: "+ capital);

var city = "san francisco";
var capital  =  capitalizeLetter(city);
console.log("output is: "+ capital);


/* 7. different way to declare function 
a). Function declaration 
b). function expression */



console.log("function expression");

var sayHi = function(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var r = sayHi("yalgud");
console.log(r);
