var path = require("path");
var friendsArray = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);

  });
  app.post("/api/friends", function (req, res) {
    console.log("req: " + req);
    console.log("friendsArray: " + friendsArray)
    //Store latest Survey Results
    var user = {
      name: req.body.name,
      photo: req.body.photo,
      scores: JSON.parse(req.body.scores)
    }
    console.log("user: " + user)

    //Push to Array
    friendsArray.push(user);
    console.log("22name" + req.body.name)
    console.log("23photo" + req.body.photo)
    console.log("24scores" + req.body.scores)
    friendsArray.push(req.body);
    //Find Match

  });
}