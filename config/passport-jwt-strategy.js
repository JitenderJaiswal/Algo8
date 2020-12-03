const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "SecretKey";

passport.use(
  new JwtStrategy(opts, function (jwtPayLoad, done) {
    console.log("jwtPayLoad", jwtPayLoad);
    User.findById(jwtPayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user from JWT");
        return;
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
