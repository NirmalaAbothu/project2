// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const exphbs = require("express-handlebars");
const passport = require("./app/config/passport");

const compression = require('compression');

const path = require('path')

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./app/models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "app/public")));

// Set Handlebars as the default templating engine.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set('views', path.join(__dirname, 'app/views'));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// compress all responses
app.use(compression())

require("./app/routes/html-routes")(app);
require("./app/routes/api-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

