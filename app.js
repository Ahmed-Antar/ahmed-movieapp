var MovieApp = angular.module("MovieApp", []);

MovieApp.controller("MovieController", function($scope){
	console.log("in controller...");
	$scope.newMovie = {};
	$scope.info = "";

  $scope.movies = [ {"Title":"Despicable Me","Year":"2010","Released":"09 Jul 2010","Runtime":"95 min","Genre":"Animation, Adventure, Comedy","Director":"Pierre Coffin, Chris Renaud","Writer":"Cinco Paul (screenplay), Ken Daurio (screenplay), Sergio Pablos (story)","Actors":"Steve Carell, Jason Segel, Russell Brand, Julie Andrews","Plot":"When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.","Language":"English","Country":"USA, France","Awards":"Nominated for 1 Golden Globe. Another 3 wins & 40 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"72/100"}],"Metascore":"72","imdbRating":"7.7","imdbVotes":"419,121","imdbID":"tt1323594","Type":"movie","DVD":"14 Dec 2010","BoxOffice":"$251,476,985","Production":"Universal Pictures","Website":"http://www.despicable.me"},

  {"Title":"Guardians of the Galaxy","Year":"2014","Released":"01 Aug 2014","Runtime":"121 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Gunn","Writer":"James Gunn, Nicole Perlman, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Bill Mantlo (character created by: Rocket Raccoon), Keith Giffen (character created by: Rocket Raccoon), Jim Starlin (characters created by: Drax the Destroyer, Gamora & Thanos), Steve Englehart (character created by: Star-Lord), Steve Gan (character created by: Star-Lord), Steve Gerber (character created by: Howard the Duck), Val Mayerik (character created by: Howard the Duck)","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel","Plot":"A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.","Language":"English","Country":"USA, UK","Awards":"Nominated for 2 Oscars. Another 52 wins & 99 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg","Metascore":"76","imdbRating":"8.1","imdbVotes":"785,436","imdbID":"tt2015381","Type":"movie","DVD":"09 Dec 2014","BoxOffice":"$270,592,504","Production":"Walt Disney Pictures","Website":"http://marvel.com/guardians"},

  {"Title":"Captain America","Year":"1990","Released":"14 Dec 1990","Runtime":"97 min","Genre":"Action, Adventure, Sci-Fi","Director":"Albert Pyun","Writer":"Joe Simon (characters), Jack Kirby (characters), Stephen Tolkin (story), Lawrence Block (story), Stephen Tolkin (screenplay)","Actors":"Matt Salinger, Ronny Cox, Ned Beatty, Darren McGavin","Plot":"Frozen in the ice for decades, Captain America is freed to battle against arch-criminal, The Red Skull.","Language":"English","Country":"USA, Yugoslavia","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZDkxMjg3MzAtMmFjYS00YzUyLWFhYTQtZmFlMzFhZDhjNDI5XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"3.3","imdbVotes":"9,220","imdbID":"tt0103923","Type":"movie","DVD":"22 Jul 1992","BoxOffice":"N/A","Production":"Paramount","Website":"N/A"},



  {"Title":"Batman","Year":"1989","Released":"23 Jun 1989","Runtime":"126 min","Genre":"Action, Adventure","Director":"Tim Burton","Writer":"Bob Kane (Batman characters), Sam Hamm (story), Sam Hamm (screenplay), Warren Skaaren (screenplay)","Actors":"Michael Keaton, Jack Nicholson, Kim Basinger, Robert Wuhl","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Language":"English, French","Country":"USA, UK","Awards":"Won 1 Oscar. Another 9 wins & 26 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg","Metascore":"69","imdbRating":"7.6","imdbVotes":"288,303","imdbID":"tt0096895","Type":"movie","DVD":"25 Mar 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A"}

  ];

	$scope.saveMovie = function(){
		console.log("Saving...");
		$scope.movies.push($scope.newMovie);
		$scope.info = "New User Added Successfully!";
		$scope.newMovie = {};
	};

	$scope.selectMovie = function(movie){
		$scope.clickedMovie = movie;
	};

	$scope.deleteMovie = function(){
		console.log($scope.movies.indexOf($scope.clickedMovie));
		$scope.movies.splice($scope.movies.indexOf($scope.clickedMovie), 1);
		$scope.info = "Movie Deleted Successfully!";
	};

	$scope.clearInfo = function(){
		$scope.info = "";
	};
});
