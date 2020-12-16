
const exphbs  = require('express-handlebars');



module.exports = app => {
    app.get('/', (req, res) => {
        let data = {message: "Hello World This is the html routes home page"}
        res.render('index', data)
    })

}

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================

