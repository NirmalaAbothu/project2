
const exphbs = require('express-handlebars');
const db = require('../models/index');

const isAuthenticated = require("../config/middleware/isAuthenticated");

// Test for populating db
const createRecipients = () => {
    for (let i = 0; i < 10; i++) {
        db.Recipients.create(
            {
                name: 'person ' + i,
                id_user: 1,
            }
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
        // createRecipients()

        res.render("members");


    });

}


