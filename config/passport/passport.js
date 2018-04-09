module.exports = function(passport) {
  
  var LocalStrategy = require('passport-local').Strategy;
  var db = require('../../models');
  passport.use(new LocalStrategy(
  
    function(username, password, cb) {
      
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(user) {
        console.log(user);
        //if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
        
      });
    }
  ));
}