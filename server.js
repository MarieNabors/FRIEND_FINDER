// Dependencies
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoute = require("./app/routing/htmlRoutes.js");
// Create express app instance.
var app = express();

// Specify the port.
var PORT = 3000;

htmlRoute(app);

app.listen(PORT, function(){
	console.log("you are connected");
});

