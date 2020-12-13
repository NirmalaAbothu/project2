const exphbs  = require('express-handlebars');



module.exports = app => {
    app.get('/', (req, res) => {
        let data = {message: "Hello World This is the html routes home page"}
        res.render('index', data)
    })

}