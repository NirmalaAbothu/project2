const db = require('../models/index')
const passport = require("../config/passport");

module.exports = app => {

    app.post('/api/login', passport.authenticate("local"), (req, res) => {
        res.json(req.user);
        console.log(req.user);
    })

    app.post('/api/signUp', (req, res) => {
        db.User.create(req.body).then(response => {
            // response = JSON.parse(response)
            // console.log(response.User.dataValues.id)
            // res.send(response);
        }).then(function () {
            res.redirect(307, "/api/login");
        })
            .catch(function (err) {
                res.status(401).json(err);
            });
    })
    // NEED TO PUT AFTER SETTING ID IN LOCAL STORAGE
    //window.location.replace("/members");




    // app.post("/api/signup", function(req, res) {
    //     db.User.create({
    //       email: req.body.email,
    //       password: req.body.password
    //     })
    //       .then(function() {
    //         res.redirect(307, "/api/login");
    //       })
    //       .catch(function(err) {
    //         res.status(401).json(err);
    //       });
    //   });

    app.post('/api/newRecipient', (req, res) => {
        db.Recipients.create(req.body).then(response => {
            res.send(response)
        })
    })

    //  Delete????
    app.get('/api/allRecipients', (req, res) => {


        db.Recipients.findAll({
            where: {
                id_user: req.user.id,
            },
            // include: [db.User]
        }).then(function (recipients) {
            // res.json(recipients);

            // Declaring an array to hold all the recipient id and name values as an object for each recipient 
            const parsedData = []
            //  If the db response is greater than 0 than...
            if (recipients.length > 0) {
                // Loop through the data and push an object containing the recipients id and name values.
                recipients.forEach(element => {
                    const data = { id: element.id, name: element.name }
                    parsedData.push(data)
                });
            }
            // Creating an object to hold the pared data to send out via handlebars.
            const recipientsData = {
                recipients: parsedData
            }
            res.json(recipientsData)
        // db.Recipients.findAll({
        //     where: {
        //         id_user: req.params.id_user
        //     },
        //     include: [db.User]
        // }).then(function (response) {
        //     res.json(response);
        });
    })

}