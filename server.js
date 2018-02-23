// Dependencies
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");
//var htmlRoute = require("./app/routing/htmlRoutes.js");
// Create express app instance.
var app = express();

// Specify the port.
vvar PORT = process.env.PORT || 3000;

//htmlRoute(app);

// define variable for json
var jsonParser = bodyParser.json();


app.use(bodyParser.urlencoded({ extended:true}));

//got most of the bodyparser code from npm and google

app.use(bodyParser.json({ type: 'application/*+json' }));
 
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
 
app.use(bodyParser.text({ type: 'text/html' }));

//require routes for api and html pages
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/app/public/home.html'));
    }); 

//Howard says this is the most important part on the page...the port listener
app.listen(PORT, function(){
	console.log("you are connected");
});

