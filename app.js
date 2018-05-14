var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("landing");
});

app.get("/campgrounds", function (req, res) {
  var campgrounds = [
      {name: "Salmon Creek", image: "http://photosforclass.com/download/pixabay-1845906?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104497f6c27aa3e9bcbe_960.jpg&user=Pexels"},
      {name: "Granite Hill", image: "http://photosforclass.com/download/flickr-4684194306"},
      {name: "Mountain Goat's Rest", image: "http://photosforclass.com/download/flickr-8444469474"}
    ];
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("The YelpCamp server has started!");
});