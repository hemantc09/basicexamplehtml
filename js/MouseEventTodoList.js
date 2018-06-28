// by hemantc09

// alert('hi');
var list = document.querySelectorAll("li");

for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("mouseover", function() {
	// body...
		this.classList.add("selected");
	});

	list[i].addEventListener("mouseout", function() {
		// body...
		this.classList.remove("selected");
	});

	list[i].addEventListener("click", function() {
		// body...
		this.classList.toggle("done");
	});
}


