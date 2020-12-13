const db = require('../models/index')

module.exports = app => {
    app.post('/api/createUser', (req, res) => {
        db.User.create(req.body).then(response => {
            res.send(response)
        })
    })
}