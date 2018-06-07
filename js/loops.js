// by hemantc09

// while loop example

var count = 1;
while(count<6)
{
	console.log("The number is "+ count);
	count++;
}

// string characters lenght and characters

var str = "Hemant";
var count = 0;

while(count < str.length)
{
	console.log(str[count]);
	count++;
}


//1. print all number between -10 to 19

console.log("problem 1 : print all number between -10 to 19");
var num = -10;
while(num>=-10 && num<=19 )
{
	console.log("number is :" + num);
	num++;
}

//2. print all even numbers between 10 to 40
console.log(" Problem 2: print all even numbers between 10 to 40");
var num = 10;
while(num>=10 && num<=40)
{
	if(num%2==0)
	{
		console.log("Even number is: " + num);
	}
	num++;
}

//3. print all odd numebrs between 300 adn 333

console.log("Problem 3: print all odd numebrs between 300 adn 333 ");
var num = 300;
while(num>=300 && num<=333)
{
	if(num%2 !=0)
	{
			console.log("Odd number is: "+ num);
	}
	num++;
}

// 4. print all numbers divisible by 5 AND 3 between 5 and 50

console.log("Problem 4: print all numbers divisible by 5 AND 3 between 5 and 50");
var num = 5;

while(num>=5 && num<=50)
{
	if((num%5 == 0) && (num % 3 == 0))
	{
		console.log("Divisible by 5 and 3 is: "+ num);
	}
	num++;
}






