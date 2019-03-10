var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    //Store latest Survey Results
    var user = req.body;
    console.log("12a req.body: " + user);
    var userName = user.name;
    console.log("14a req.body.name: " + userName);
    console.log("15a req.body.photo: " + user.photo);
    var userScores = user.scores;
    console.log("17a req.body.scores: " + userScores);
    console.log("178a: JSONuser" + JSON.stringify(user));


    var bestFriend = {
      bfName: "",
      bfPhoto: "",
      bfDifference: 10
    };
    var totalDiff = 0;


    // Loop through all scores and friends
    for (var i = 0; i < friendsArray.length; i++) {
      console.log("31a names: "+friendsArray[i].name);
      var totalDiff = 100;

      //Loop through all the scores of all the stored friends
      for (var j = 0; j < friendsArray[i].scores.length; j++) {
        console.log("36a userScores[j]: " + userScores[j])
        console.log("37a friendsArray[i].scores[j]:" + friendsArray[i].scores[j]);
        console.log("38a userScores " + userScores);
        totalDiff += Math.abs(userScores[j] - friendsArray[i].scores[j]);

        // console.log("30a friendsArray[i].scores[j]: " + friendsArray[i].scores[j]);
        // console.log("31a userScores[j]: " + userScores[j]);
        console.log("43a totalDiff: " + totalDiff)
        // totalDiff += difference;
        // console.log(totalDiff)




      }
    }





    // console.log("Best Friend Name: " + bestFriend.name);
    // console.log("Best Friend Photo: " + bestFriend.photo);

    //Push to Array
    friendsArray.push(req.body);
  });
}

// matchName
// matchPhoto