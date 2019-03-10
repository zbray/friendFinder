var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    //Store latest Survey Results
    var user = req.body;
    var userName = user.name;
    var userScores = user.scores;

    var bestFriend = {
      bfName: "",
      bfPhoto: "",
      bfDifference: 10
    };

    // Loop through all scores and friends
    for (var i = 0; i < friendsArray.length; i++) {
      console.log("31a names: " + friendsArray[i].name);
      var totalDiff = 0;

      //Loop through all the scores of all the stored friends
      for (var j = 0; j < friendsArray[i].scores.length; j++) {
        // console.log("28a userScores[j]: " + userScores[j])
        // console.log("29a friendsArray[i].scores[j]:" + friendsArray[i].scores[j]);
        // console.log("30a userScores " + userScores);
        totalDiff += Math.abs(userScores[j] - friendsArray[i].scores[j]);
        // console.log("30a friendsArray[i].scores[j]: " + friendsArray[i].scores[j]);
        // console.log("31a userScores[j]: " + userScores[j]);
        // console.log("35a totalDiff: " + totalDiff)
        console.log("37a totalDiff: " + totalDiff)
        console.log("38a bfDifference: " + bestFriend.bfDifference)
      }
      if (totalDiff <= bestFriend.bfDifference) {
        bestFriend.bfName = friendsArray[i].name;
        bestFriend.bfPhoto = friendsArray[i].photo;

        // console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
        // console.log(friendsArray[i].name);
        // console.log(friendsArray[i].photo);
      }

    }
    console.log("Best Friend Name: " + bestFriend.bfName);
    console.log("Best Friend Photo: " + bestFriend.bfPhoto);

    //Push to Array
    friendsArray.push(user);
    res.json(bestFriend)
    console.log("final bf: " + bestFriend.bfName);
    console.log("final photo: " + bestFriend.bfPhoto);
    console.log("------")
  });
}

// matchName
// matchPhoto