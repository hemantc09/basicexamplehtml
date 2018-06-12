// by hemantc09
console.log("Todo list is");
var todo = [];

var choice = prompt("what you would like to do : 1. new 2.list  3. delete 4. quit");

var addTodo = function(){ // anonymos function type
	var newitem = prompt("enter the item");
		todo.push(newitem);
		console.log(newitem + " item added");
}

var listTodo = function(){
todo.forEach(function(todoitem,i){
			console.log("---------------------");
			console.log(i + " : "+ todoitem);
		});
		console.log("---------------------");
}


var deleteTodo = function(){
	//ask for index
		var index = prompt("Enter index of todo to delete: ");
		//spilce() helps to cut specific number of an array
		todo.splice(index,1); //which index & and how many item delete following that item
		console.log("Item is deleted")
}

while(choice !== "quit"){
	if(choice === "list"){	
		listTodo();
	}
	else if(choice === "new"){
		addTodo();
	}
	else if(choice === "delete"){
		deleteTodo();
	}
	 choice = prompt("what you would like to do : 1. new 2.list 3.delete 4.quit");
}

console.log("okay, you quit the app");

// below is just the example for the prin array element

/*console.log("forEach(someFunction) loop example below");
//forEach(someFunction) loop
var colors = ["red", "yellow","pink","blue"];

function printcolor(color)
{
	console.log("++++++++");
	console.log(color);
	console.log("++++++++");
}

colors.forEach(printcolor); //pasing function
*/
