// Requiring all npm packages nessecary for functioning application
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Connecting to the public directory to access public files
app.use(express.static(path.join(__dirname, './public')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Setting up view engine for handlebars 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Importing and using router from the vehicle_controller.js file
var router = require('./controllers/vehicles_controllers');
app.use('/', router);

var PORT = 8080;
app.listen(process.env.PORT || PORT);
console.log("Listening On Port:" + PORT);
