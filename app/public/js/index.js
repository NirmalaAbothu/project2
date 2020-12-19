const db = require('../models/index')

db.Recipients.create({ name: "Jane", id_user: 1 }).then(response => {
    console.log(req.body);
});

db.Gifts.create({ gift: "Chocolates", id_recipient: 1 }).then(response => {
    console.log(response);
});