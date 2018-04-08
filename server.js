// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

// Sets up the express app
var PORT = process.env.PORT || 8080;
var app = express();

// Requires our models for syncing db
var db = require('./models');

// Sets up the express app to handle data parsing

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sets up the static directory

app.use(express.static('public'));

// Set up Handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import router

var htmlroutes = require('./controllers/htmlController.js');
var apiroutes = require('./controllers/apiController.js')

app.use(htmlroutes);
app.use(apiroutes);


db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('Server listening on: http://localhost:' + PORT)
    });
});