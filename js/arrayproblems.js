// by hemantc09

// 1. reverse an array

var arr = [1,2,3,4];

var reversearr = function(){
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

console.log("reverse of an array : [" + arr +" ] = ");
reversearr();

// 2. Verify all items are unique in array

var arr = [1,1,1,1,1];
var temp = arr[0];
var result = "";

function uniquefun(){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] != temp)
		{
			return false;
		}
	}
	return true;
}

var r = uniquefun();
console.log("Is all items unique from array [ " + arr + " ] : "+r);

// 3. Sum the element of the array

var arr = [1,2,3,4,5];
var sum = 0;
var sumfun = function(){
	arr.forEach(function(item){
		sum += item;	
	});
	return sum;
}

total = sumfun();
console.log("sum of [ "+ arr + " ] is =  "  + total);

// 4. Return the max number from the array

var arr = [1,-2,33,4];
var maxnum = function(){
	var result = Math.max(...arr);
	return result;
}

var maxnumfor = function(arr1){
	var max = arr[0];
	for(var i =0;i<arr1.length ; i++){
		if(arr1[i] > max){
			max = arr1[i]
		}
	}	
	return max;
}
var arr1 = [1,4,2,35];
var r1 = maxnumfor(arr1);
console.log("Max num from array using for : [ " + arr1 + "] is = " + r1);

var r = maxnum();
console.log("Max num from array : [ " + arr + "] is = " + r);