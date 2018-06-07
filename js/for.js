// by hemantc09

// alert("connected")
//reverse string
console.log("Reverse string is");
var Things = "Hemant"
var rev="";

console.log(Things.length);
for (var i = Things.length - 1; i >= 0; i--) {
	rev+=Things[i];//console.log(Things[i]);
}
console.log(rev);

 console.log("Print all the numbers between -10 and 19");

for(var i = -10; i <= 19; i++ )
{
	console.log("Number is: " + i);
}

 console.log("Print all even numbers between 10 and 40");

for (var i = 10 ; i <=40;  i++) {
	if(i %2 == 0)
	{
		console.log("Even number is: "+i); 
	}

}

 console.log("Print all odd numbers between 300 and 333");

 for(var i = 300; i <= 333; i++)
 {
 	if(i %  2 != 0)
 	{
 		console.log("Odd number is: " + i);
 	}
 }

 console.log("Print all numbers divisible by 5 AND 3 betwen 5 and 50");
 for(var i = 5 ; i <= 50; i++)
 {
 	if( i % 5 === 0 && i % 3 === 0 )
 	{
 		console.log("Number divisible by 5 AND 3 is: " + i);
 	}
 }


