
/**
 * web.js
 * Contains structure for the main app
 */

// require the third-party node modules
var express = require('express'),
  http = require('http');

// app = express, naturally
var app = express();

// configure all the things
app.configure(function(){

  // tell the app where our views and static things live
  app.set('views', __dirname + '/views');
  app.use(express.static(__dirname + '/public'));

  // tell the app to rock the handlebars action
  app.engine('html', require('hogan-express'));
  app.set('view engine', 'html');

  app.set('layout','layouts/default');
  app.set('partials', {schedule: "partials/schedule"});

  // shiny shiny logger
  app.use(express.logger('dev'));

  // define env variables
  app.set('port', process.env.PORT || 3000);
});

// define us some routes
app.get('/', function(req, res) {
  res.render('index', {
      "pageTitle": "DWD at ITP",
      "pageDescription": "Dynamic Web Development (Server) — Spring 2014",
      "sidebarTitle": "DWD @ ITP",
    }
  );
});

// ready, set, rocket
app.listen(app.get('port'));
console.log('firing up on port %d', app.get('port'));
