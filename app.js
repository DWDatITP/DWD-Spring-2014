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
    pageTitle: 'DWD at ITP',
    pageDescription: 'Dynamic Web Development &mdash; Spring 2014',
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
  });
});
 
// ready, set, rocket 
app.listen(appPort);
console.log('firing up on port %d', appPort);
