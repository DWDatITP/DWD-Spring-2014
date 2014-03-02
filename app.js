
/**
 * app.js
 * Contains structure for the main app
 */

// require all the things
var express = require('express');
var hbs = require('hbs');
var classData = require('./classData.js');

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

// fill out the copy for the page
var bodyCopy = {
  pageTitle: 'DWD at ITP',
  pageDescription: 'Dynamic Web Development (Server) &mdash; Spring 2014',
  sidebarTitle: 'DWD @ ITP',
  instructors: [
    {firstName: "Cory", lastName: "Forsyth", email: ''},
    {firstName: "Mike", lastName: "Dory", email: 'mike@dory.me'},
  ],
  classes: [
    {
      name: "Class 1 - Intro",
      links: [
        {
          title: "Gettings Started with Node.js on Heroku",
          href: "https://devcenter.heroku.com/articles/getting-started-with-nodejs"
        }
      ]
    }
  ]
};

// define us some routes
app.get('/', function(req, res) {
  res.render('index', bodyCopy);
});

// ready, set, rocket
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
