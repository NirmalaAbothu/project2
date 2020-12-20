const db = require('../models/index')
const passport = require("../config/passport");

module.exports = app => {

    app.post('/api/login', passport.authenticate("local"), (req, res) => {
        res.json(req.user);
        
    })

    app.post('/api/signUp', (req, res) => {
        db.User.create(req.body).then(response => {

        }).then(function () {
            res.redirect(307, "/api/login");
        })
            .catch(function (err) {
                res.status(401).json(err);
            });
    })
    // Route for logging the user out
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.post('/api/newRecipient/:name', (req, res) => {
        db.Recipients.create(
            {
                name: req.params.name,
                id_user: req.user.id,
            }
        ).then(response => {
            res.send(response)
        })
    })

    app.get('/api/allRecipients', (req, res) => {
        db.Recipients.findAll({
            where: {
                id_user: req.user.id,
            }
        }).then((recipients) => {

            res.json(recipients)

        });
    });


    app.post('/api/newGift', (req, res) => {
        db.Gifts.create(req.body).then(response => {
            res.json(response);
        })
    });


    app.get('/api/allGifts/:id_recipient', (req, res) => {
        db.Gifts.findAll({
            where: {
                id_recipient: req.params.id_recipient
            }
        }).then(function (response) {
            res.json(response);
        });
    });

    app.get('/api/deleteRecipient/:id_recipient', (req, res) => {
        db.Recipients.destroy({
            where: {
                id: req.params.id_recipient
            }
        }).then(response => {
            res.json(response);
        });
    });

    app.get('/api/deleteGift/:id_gift/:id_recipient', (req, res) => {
        db.Recipients.destroy({
            where: {
                id: req.params.id_gift
            }
        }).then(response => {
            res.end(response);
        });

    });
}