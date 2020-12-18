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
            console.log(req.body)
            res.send(response)
        })
    });

    app.get('/api/allRecipients/:id_user', (req, res) => {
        db.Recipients.findAll({
            where: {
                id_user: req.params.id_user
            },
            include: [db.User]
        }).then(function (response) {
            console.log(response)
            res.json(response);
        });
    });


    app.post('/api/newGift', (req, res) => {
        db.Gifts.create(req.body).then(response => {
            console.log(req.body);
            res.send(response);
        })
    });


    app.get('/api/allGifts/:id_recipient', (req, res) => {
        db.Gifts.findAll({
            where: {
                id_recipient: req.params.id_recipient
            }
        }).then(function (response) {
            console.log(response)
            res.json(response);
        });
    });
}