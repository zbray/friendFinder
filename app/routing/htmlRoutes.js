//Dependencies
var path = require("path");

//Routes
module.exports = function (app) {
  //Fallback to home page for input other than /survey
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"))
  })
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  })
}