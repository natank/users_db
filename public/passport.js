var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var  Account = require('../models/account');

const local = new  LocalStrategy(
  function(username, password, done) {
    Account.findOne({ username })
      .then(account => {
        if (!account || !account.validPassword(password)) {
          done(null, false, {message: "Invalid username/password"});
        } else {
          done(null, account);
        }
      })
      .catch(e => done(e));
  });
     

passport.use("local", local);

passport.serializeUser(function(account, done) {
  done(null, account._id);
});

passport.deserializeUser(function(id, done) {
  Account.findById(id, function(err, account) {
    done(err, account);
  });
});

module.exports = passport