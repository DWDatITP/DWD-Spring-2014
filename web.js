
/**
 * app.js
 * Contains structure for the main app
 */

// require the third-party node modules
var express = require('express'),
  hbs = require('hbs'),
  jsonfile = require('jsonfile');

// load up the class data from the JSON file
var classDataFile = __dirname + '/data/classData.json';
var classData = jsonfile.readFileSync(classDataFile);

// app = express
var app = express();

// tell the app where our views and static things live
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// tell the app to rock the handlebars action
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// shiny shiny logger
app.use(express.logger('dev'));

// define env variables
app.set('port', process.env.PORT || 3000);

// define us some routes
app.get('/', function(req, res) {
  res.render('index', classData);
});

// ready, set, rocket
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
