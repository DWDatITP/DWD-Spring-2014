DWD - Spring 2014
=================

Dynamic Web Development @ ITP, Spring 2014

Instructors:

- [Mike Dory](http://dory.me)
- [Cory Forsyth](http://coryforsyth.com/)


App notes
---------

This app was built with [Express.js](http://expressjs.com/), and relies on the following dependencies:

- [Express3-Handlebars](https://github.com/ericf/express3-handlebars)
- [Nodemon](http://nodemon.io/)


### Installing dependencies

Everything this app needs should be installable via npm:

    npm install


### Running the application

To start the app with npm/Nodemon (enabling fancy auto-reload action and all that), just run this:

    npm start

If you'd rather just run the server, you can 

    node web.js

To start the app with Nodemon by hand, do this instead:

    ./node_modules/.bin/nodemon web.js

You should then be up and running! As with Node itself, you can quit the process with `ctrl-c`.
