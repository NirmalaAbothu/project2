const db = require('../models/index')


module.exports = app => {
    app.post('/api/createUser', (req, res) => {
        db.User.create(req.body).then(response => {
            res.send(response)
        })
    })
    app.post('/api/newRecipient', (req, res) => {
        db.Recipients.create(req.body).then(response => {
            res.send(response)
        })
    })
    app.get('/api/allRecipients/:id_user', (req, res) =>{
        db.Recipients.findAll({
            where: {
                id_user: req.params.id_user
            },
            include: [db.User]
          }).then(function(response) {
            res.json(response);
          });
    })
    
}