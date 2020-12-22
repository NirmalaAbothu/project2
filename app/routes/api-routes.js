const db = require("../models/index");
const passport = require("../config/passport");

module.exports = (app) => {
     // Login the user and send back user data or an error if it fails.
     app.post("/api/login", passport.authenticate("local"), (req, res) => {
          res.json(req.user);
     });

     // signUp route will...
     app.post("/api/signUp", (req, res) => {
          // create a new user
          db.User.create(req.body)
               .then(() => {
                    // then redirect tot api/login to authenticate the user.
                    res.redirect(307, "/api/login");
               })
               .catch(function (err) {
                    // or send back the err
                    res.status(401).json(err);
               });
     });

     // Route for logging the user...
     app.get("/logout", (req, res) => {
          // log them out then send them back to the home page.
          req.logout();
          res.redirect("/");
     });

     // Route for creating a new recipient expects a string for a name.
     app.post("/api/newRecipient/:name", (req, res) => {
          // Creating the new recipient in the db
          // Setting the name value with the passed param and user id with the current users id.
          db.Recipients.create({
               name: req.params.name,
               id_user: req.user.id,
          }).then((response) => {
               res.send(response);
          });
     });

     // Route for getting all the recipients for the current user
     app.get("/api/allRecipients", (req, res) => {
          // Finding all recipients for the logged in user
          db.Recipients.findAll({
               where: {
                    id_user: req.user.id,
               },
          }).then((recipients) => {
               // Sending the recipients back as an array.
               res.json(recipients);
          });
     });

     // Route for posting a new gift.
     app.post("/api/newGift", (req, res) => {
          // Expects a string in the response to name the gift as well as an id for the recipient it belongs to.
          db.Gifts.create(req.body).then((response) => {
               res.json(response);
          });
     });

     // Route for getting all gifts for a specific recipient.
     app.get("/api/allGifts/:id_recipient", (req, res) => {
          // expecting a num for the id of the recipient to be passed as a param.
          db.Gifts.findAll({
               where: {
                    id_recipient: req.params.id_recipient,
               },
          }).then(function (response) {
               // sending back all the gifts for that recipient as an array.
               res.json(response);
          });
     });

     // Route for deleting a recipient based on their id.
     app.delete("/api/deleteRecipient/:id_recipient", (req, res) => {
          // Search and destroy...
          console.log(req.params);

          db.Recipients.destroy({
               where: {
                    id: req.params.id_recipient,
               },
          }).then((response) => {
               res.json(response);
          });
     });

     app.delete("/api/deleteGift/:id_gift", (req, res) => {
          // Search and destroy...
          db.Gifts.destroy({
               where: {
                    id: req.params.id_gift,
               },
          }).then((response) => {
               res.json(response);
          });
     });
};
