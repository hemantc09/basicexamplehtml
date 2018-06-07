// by hemantc09

// var age = 21;

// if(age < 18){
// 	console.log("sorry, you can't drink and cant enter");
// }
// else if (age < 21)
// {
// 	console.log("You can enter, but can't drink");

// }
// else
// {
// 	console.log("Enjoy the party");
// }

//exercise



var age = 22;

if(age < 0)
{
	console.log("Age is not valid");
}
else if(age == 21)
{
	console.log("happy 21st birthday");
}
else if( age % 2 !== 0)
{
	console.log("your age is odd!! ");
}

else if( age%Math.sqrt(age)  === 0 )
{
	console.log("Age is perfect square valid");
}
else
{
	console.log("your age is "+ age + " and you can enter");
}
