DWD - Spring 2014
=================

Dynamic Web Development @ ITP, Spring 2014

Instructors:

- [Mike Dory](http://dory.me)
- [Cory Forsyth](http://coryforsyth.com/)


App notes
---------

This app was built with [Express.js](http://expressjs.com/), and relies on the following dependencies:

- Handlebars
- Supervisor


### Installing dependencies

Everything this app needs should be installable via npm:

    npm install

Supervisor will whine about not being installed globally, so if you'd rather to that, you install it thusly:

    npm install -g


### Running the application

To launch the app, simply run:

    node app.js

To start the app with Supervisor (enabling fancy auto-reload action and all that), do this instead:

    ./node_modules/.bin/supervisor app.js

That's it!
