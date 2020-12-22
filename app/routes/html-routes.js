const exphbs = require("express-handlebars");
const db = require("../models/index");
const isAuthenticated = require("../config/middleware/isAuthenticated");



module.exports = (app) => {
     // On Page load...
     app.get("/", (req, res) => {
          // if user is logged in redirect them to the members page.
          if (req.user) {
               res.redirect("/members");
          }
          // Or render out the login page
          res.render("login");
     });

     // On login route..
     app.get("/login", function (req, res) {
          // If the user id logged send them to the members page.
          if (req.user) {
               res.redirect("/members");
          }
          // else render out the login page
          res.render("login");
     });

     // on the register route..
     app.get("/register", (req, res) => {
          // render out the register page
          res.render("register");
     });

     // On the members route...
     app.get("/members", isAuthenticated, function (req, res) {
          // Checking if the user is authenticated and logged in
          // if not this route will not work.

          // render out the members page.
          res.render("members");
     });
};

