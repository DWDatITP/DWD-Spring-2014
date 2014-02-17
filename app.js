// require all the things
var express = require('express');
var app = express();
// var reload = require('reload');

// handlebars
var hbs = require('hbs');

// tell the app to rock the handlebars action
app.set('view engine', 'html');
app.engine('html', hbs.__express);

// define env variables
var appPort = 3000;

// define us some routes
app.get('/', function(req, res) {
  res.sendfile('./views/index.html');
});
 
// ready, set, rocket 
app.listen(appPort);
console.log('firing up on port %d', appPort);
