// by hemantc09

//object declaration type  1
var person = {
	name  : "Hemant",    //Property: Value   //key value pair
	age :  25,
	city : "Los angeles"
};
console.log("person name is :"+person.name);
console.log("person age is : "+person["age"]);

//object declaration type  2
var person1 = {};
person1.height = "5.6";
person1.weight = "140";
person1.city = "LA";
console.log("person height is :"+person1.height);
console.log("person weight is : "+person1["weight"]);


//object declaration type  3
var dog = new Object();
dog.name = "cal";
dog.color = "white";
console.log("dog name  is :"+dog.name);
console.log("dog color is : "+dog["color"]);

//nested object below
var relation  = {
	dad : "teacher",
	mom : "housewife",
	children :{
		son: "Hemant",
		daughter: "Jyoti"
	}

};

console.log("Nested object: Dads daughter is: " + relation.children.daughter);
console.log("Nested object: Dads son is: " + relation.children.son);


// nested object

var someObject = {
	friends:[
        {name: "charly"},
        {name: "car"},
        {name: "pal"}
	],
	color: "baby blue",
	isEvil: true

};

console.log("First Friend name is : "+someObject.friends[0].name);
