const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

/*======================================================================================================================================= */

// setting 'ejs' as template engine for express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
app.use(express.static("public"));

/* ======================================================================================================================================= */ 

app.get('/', function(req, res){
    res.render("home");
});

app.listen(3000, function(req, res){
    console.log("Server is running up");
});

