// require all the things
var express = require('express');
var app = express();
// var reload = require('reload');

// handlebars
var hbs = require('hbs');

// tell the app where our views and static things live
app.set('views', __dirname + '/templates');
app.use(express.static(__dirname + '/public'));

// tell the app to rock the handlebars action
app.set('view engine', 'html');
app.engine('html', hbs.__express);


// define env variables
var appPort = 3000;

// fill out the copy for the page
var bodyCopy = {
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
};

// define us some routes
app.get('/', function(req, res) {
  res.render('index', bodyCopy);
});
 
// ready, set, rocket 
app.listen(appPort);
console.log('firing up on port %d', appPort);
