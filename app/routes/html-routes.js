
const exphbs = require('express-handlebars');
const db = require('../models/index');

const isAuthenticated = require("../config/middleware/isAuthenticated");


const createRecipients = () => {
    for (let i = 0; i < 10; i++) {
        db.Recipients.create(
            {name: 'person ' + i, 
            id_user: 1,}
        )
    }
}


module.exports = app => {
    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/members")
        }

        res.render("login")
    })
    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.render("login");
    });
    app.get("/register", (req, res) => {
        res.render("register")
    })

    app.get("/members", isAuthenticated, function (req, res) {
        //   let currentUser = {
        //       id: req.user.id,
        //       full_name: `${req.user.firstName} ${req.user.lastName}`
        // createRecipients()
        //   }
        db.Recipients.findAll({
            where: {
                id_user: req.user.id,
            },
            // include: [db.User]
        }).then(function (recipients) {
            // res.json(recipients);

            // Rendering the members page containing all the recipients for the logged in user.
            res.render("members");
            // res.json(recipientsData)
        });

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

