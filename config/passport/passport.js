module.exports = function(passport) {
  
  var LocalStrategy = require('passport-local').Strategy;
  var db = require('../../models');
  passport.use(new LocalStrategy({passReqToCallback: true},
  
    function(req, username, password, done) {
      console.log('req---------' + JSON.stringify(req.body));
      console.log('-----------------');
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(user) {
        console.log('user---------' + JSON.stringify(user));
        console.log('-----------------');
        console.log('session------' + JSON.stringify(req.session));
        console.log('-----------------');
        console.log('session------' + JSON.stringify(req.user));
        console.log('-----------------');
        if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
        if (user.password != password) { return done(null, false, {message: 'Password does not match'}); }
        return done(null, user, {message: 'Login Successfull'});
        
      });
    }
  ));
}