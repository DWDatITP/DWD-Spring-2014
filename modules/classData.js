
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
      classDescription: '<p>This experimental 7-week, 2 point course will provide a framework for learning how to develop and program web applications and will focus on server side development.  Rather than the traditional model of in-class lectures, `ments, projects, and office hours, this course will heavily leverage existing online and offline resources (videos, articles, interactive tutorials, online courses, books, and more) with class time fully devoted to group and individual help sessions.</p>' +
        '<p>This course will be focused on developing and deploying server side web applications using JavaScript, Node.js with the Express framework, and NoSQL databases on cloud based infrastructure.  Additional topics will include login and session management, web services and APIs, and will lightly touch on front-end web development.</p>' +
        '<p>Prerequisites include Comm Lab Web and Introduction to Computational Media.</p>',
      instructors: [
        {firstName: "Cory", lastName: "Forsyth", email: 'cory.forsyth@gmail.com'},
        {firstName: "Mike", lastName: "Dory", email: 'mike@dory.me'},
      ],
      classes: [
        {
          title: "Before the first class",
          description: "",
          links: [
            {
              title: '',
              href: '',
              description: ''
            }
          ],
          assignments: [
            {
              title: '',
              href: '',
              description: ''
            }
          ]

        },
        {
          title: "Class 1 - Intro",
          date: "",
          description: "Getting things started",
          links: [
            {
              title: "Gettings Started with Node.js on Heroku",
              href: "https://devcenter.heroku.com/articles/getting-started-with-nodejs"
            }
          ]
        },
        {
          title: "Class 2 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        },
        {
          title: "Class 3 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        },
        {
          title: "Class 4 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        },
        {
          title: "Class 5 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        },
        {
          title: "Class 6 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        },
        {
          title: "Class 7 - ",
          date: "",
          description: "",
          links: [
            {
              title: "",
              href: ""
            }
          ]
        }
      ] // end classes array
    };

    return text;

  }
};
