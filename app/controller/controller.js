const express = require('express');

const router = express.Router();

const db = require('../models');

router.get('/', (req, res) => {
    let data = {message: "Hello World"}
    res.render("index", data)
})

module.exports = router;