
const exphbs  = require('express-handlebars');
const db = require('../models/index');

const isAuthenticated = require("../config/middleware/isAuthenticated");




module.exports = app => {
    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/members")
        }
        let data = {message: "Hello World This is the html routes home page"}
        res.render("register")
    })
    app.get("/login", function(req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
          res.redirect("/members");
        }
        res.render("login");
      });

      app.get("/members", isAuthenticated, function(req, res) {
          let currentUser = {
              id: req.user.id,
              email: req.user.email
          }
        res.render("members", currentUser);
      });
    
    

      // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function(req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({});
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         email: req.user.email,
//         id: req.user.id
//       });
//     }
//   });

}

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

