// by hemantc09

var nums = [1,2,3,4];

nums.forEach(function(num){
	console.log(num);
});

//how it works
function myForEach(arr, func){ //func is a function and its without parathesis
	//loop through the array
	for(var i = 0; i < arr.length; i++){
		//call func for each iten in array
		func(arr[i]); // executing here and alert the array elements 1 by 1
	}	
}

var colors = ["red","blue","orange"];
myForEach(colors,function(color){
	console.log(color);
}); //technically it will call alert and execute the fun with the data 
