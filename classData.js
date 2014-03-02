
/**
 * classData.js
 * all data required for the view
 */

// ========
module.exports = {
  main: function () {

    // fill out the copy for the page
    var text = {
      pageTitle: 'DWD at ITP',
      pageDescription: 'Dynamic Web Development (Server) &mdash; Spring 2014',
      sidebarTitle: 'DWD @ ITP',
      classDescription: '',
      instructors: [
        {firstName: "Cory", lastName: "Forsyth", email: ''},
        {firstName: "Mike", lastName: "Dory", email: 'mike@dory.me'},
      ],
      classes: [
        {
          title: "Class 1 - Intro",
          description: "BOOOO",
          links: [
            {
              title: "Gettings Started with Node.js on Heroku",
              href: "https://devcenter.heroku.com/articles/getting-started-with-nodejs"
            }
          ]
        }
      ]
    };

    return text;

  }
};