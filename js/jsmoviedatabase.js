// by hemantc09

var movieArray = [
	
	{
		title: "movie title 1", //enter your movie name here
		rating: 1,
		hasWatched: true
	},
	{
		title: "movie title 2",
		rating: 2,
		hasWatched: true
	},
	{

		title: "movie title 3",
		rating: 3.5,
		hasWatched: false
	}

];

/*
//display using for loop
for( var i = 0; i < movieArray.length; i++ ){
	if(movieArray[i].hasWatched == true){
		var strSeen =  " seen ";
	}
	else{
		var strSeen = " not seen ";
	}

	console.log('You have ' + strSeen + ' " '+movieArray[i].title +' " - ' + movieArray[i].rating + " stars"); 
}

*/

//display using forEach
movieArray.forEach(function(movie){
	
	console.log(buildString(movie)); //return resul come to inside the consol.log
});

function buildString(movie){
	var result ='You have ';
	if(movie.hasWatched ){
		result += 'watched';
	}
	else{
		result += 'not seen';
	}
	result += " \"" + movie.title +"\" - " ; // each time the string is concatinating
	result += movie.rating + " stars";

	return result; 

}