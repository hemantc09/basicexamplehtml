// by hemantc09


// 1. once function says return nothign is going to execute
function test(x)
{
	return x*2;
	console.log("x");
	return x/2
}

rs = test(40);
console.log(rs);

 
 //2. write a function isEven() to return true or false if the number is even

var isEven = function(num){
	if( num % 2 === 0 )
	{
		return true;
	}
	else
	{
		return false;
	}
}

// shorten version
/*isEven = function(num)
{
	return num % 2 === 0; //it returns true or false directly
}*/


var num =10;
var op = isEven(num);
console.log("Number " + num + " is even = " +op);

var num = 5;
var op = isEven(num);
console.log("Number " + num + " is even = " +op);



 /*3. fatorial() of a number - single argument 
4!= 4 x 3 x 2 * 1;
*/
var factorial = function(num)
{
	if(num < 0)
	{
		return -1;
	}
	else if(num == 0)
	{
		return 1;
	}
	else
	{
		return (num * factorial(num - 1));
	}
}
/*alternate version
1 x 2 x 3 x 4
*/

var num = 4;
var factop = factorial(num);
console.log("Factorial with if condition and  recursive function  of "+ num + " is " + factop);




factfor = function(num)
{
	var result = 1;

	for(var  i = 2 ; i <= num ;i++)
	{
		result =result * i;
	}
	return result;
}

var num = 4;
var factop = factfor(num);
console.log("Factorial with for loop of "+ num + " is " + factop);

//with while loop


var factwhile = function(num)
{
	result = num;

	if( num === 0 || num === 1)
	{
		return 1;
	}
	while (num > 1)
	{
		num--;
		result  *= num;
	}
	return result;
}

var num =4 ;
fact = factwhile(num);
console.log("factoial of " + num + " with while loop: "+fact);

 /*4. Write a function kebabToSnake()
  pass kebab-cased argument and return snake_cased version

  replace all '-''  with '_'

  */



  var kebabToSnake =function(str)
  {

  		var reg = new RegExp(/-/g);//g is the gloabal match
  		var newStr = str.replace(reg, "_");
  		return newStr;
  }

var kebabCased = kebabToSnake("hello-Hemant-How-are-you");
console.log(kebabCased);


/*
 set interval function*/

var singMyself = function()
{
	console.log("twinkle twinkle little star");
	console.log("twinkle twinkle little star");
	
}


//setInterval(singMyself,1000);

/* setInterval(anotherfun,interval_millisecond)


you can write entire code and replace with singMyself
//singMyself();

clearInterval(singMyself); used to clear the interval adn stop 

*/