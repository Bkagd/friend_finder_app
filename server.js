// adding in dependencies

var express = require("express");
var bodyParser = require("body-parser");

// setting up express

var app = express();

// setting up initial port

var port = process.env.PORT || 3000;

// Setting up express to be able to handle data parsing

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up router

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// setting up our listener

app.listen(port, function() {
    console.log("App is listening on port: " + port);
});

