var express = require("express");
var mongoose = require("mongoose");

var PORT = 3000;

var app = express();

mongoose.connect(
  "mongodb://localhost/3000",
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
