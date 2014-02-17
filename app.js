// require all the things
var express = require('express');
var app = express();
// var reload = require('reload');

// handlebars
var hbs = require('hbs');

// tell the app to rock the handlebars action
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.engine('html', hbs.__express);

// define env variables
var appPort = 3000;

// define us some routes
app.get('/', function(req, res) {
  res.render('index', {
    title: 'DWD at ITP',
    description: 'Dynamic Web Development &mdash; Spring 2014'
  });
});
 
// ready, set, rocket 
app.listen(appPort);
console.log('firing up on port %d', appPort);
