
var friends = require("../data/friends.js");

module.exports = function (app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
		
	});

	app.post("/api/friends", function(req, res){
		
var topMatch = {
			name: "",
			photo: "",
			friendDiff: 1000
		};

console.log("req.body");

//stores user's input into req.body
var userInfo = req.body;
var userScores = userInfo.scores;

console.log(userScores);

	//use subtraction to find the best match by comparing values from UserInput
var Differences = 0;

// create a for loop to compare user input to all friends in array
	for (var i = 0; i<friends.length; i++) {
			console.log(friends[i]);
			Differences = 0;

// for loop, loops through friends' scores in friends array
//loop within a loop
		for (var f = 0; f<friends[i].scores[j]; f++){
	//math.abs (math absolute) ensures the use of a positive integer
	//subtracts the scores from friends array from user's score to calculate the difference
		Differences += Math.abs(parseInt(userScores[f])- parseInt(friends[i].scores[f]));
//+= difference is equal to difference plus the result of math.abs...
				//compaires friend differences for best match check all friends scores
		if (difference <= topMatch.friendDiff){
		topMatch.name = friends[i].name;
		topMatch.photo = friends[i].photo;
		topMatch.friendDiff = Differences;

				}

			}
		}
		friends.push(userInfo);

		res.json(topMatch);
		
	});

}
