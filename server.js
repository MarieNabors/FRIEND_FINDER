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

// //MySQL DB Connection Information (remember to change this with our specific credentials)
// var connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: ""
// });

// // Initiate MySQL Connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
