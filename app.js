var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "http://photosforclass.com/download/pixabay-1845906?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f6c27aa3e9bcbe_960.jpg&user=Pexels"},
  {name: "Granite Hill", image: "http://photosforclass.com/download/flickr-4684194306"},
  {name: "Mountain Goat's Rest", image: "http://photosforclass.com/download/flickr-8444469474"}
];

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function (req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  
  campgrounds.push(newCampground);
  
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
  res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("The YelpCamp server has started!");
});