var passport = require('passport');
var bearerStrategy = require('passport-http-bearer');
var jwt = require('jsonwebtoken');
var User = require('../models/user');

passport.use(new BearerStrategy(function (token, done) {
    jwt.verify(token, 's3cr3t'), function (err, deceded) {
        if (err) {
            return (err);
        }
        if (deceded) { User.findOne({_id: token }, function (err, user) {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false);
                }
                return done(null, user, {
                    scope: 'all'
                });
            });
        }
    }
}
));