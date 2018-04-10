// Dependencies

var express = require('express');
var bodyParser = require('body-parser');

// Authentication packages
var session = require('express-session');
var passport = require('passport');

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

//Authentication
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  var db = require('./models');
  db.User.findById(id).then(function(user) {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });

});

app.use(function(req, res, next) {
  res.locals.isLoggedIn = req.isAuthenticated();
  next();
});

// Set up Handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import router

var htmlRoutes = require('./controllers/htmlController.js');
var apiPostRoutes = require('./controllers/apiControllerPosts.js');
var apiUserRoutes = require('./controllers/apiControllerUsers.js');

app.use(htmlRoutes);
app.use(apiUserRoutes)
app.use(apiPostRoutes);

require('./config/passport/passport.js')(passport);


db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log('Server listening on: http://localhost:' + PORT)
    });
});