const bcrypt = require('bcrypt');
const User = require('../models/User');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);
class Authentification {
    constructor(passport, LocalStrategy) {
        this.passport = passport;
        this.User = User;
        this.bcrypt = bcrypt;
        let use = this.use.bind(this);
        this.passport.use(new LocalStrategy(use));
        this.passport.serializeUser(this.serializeUser);
        this.passport.deserializeUser(this.deserializeUser);

    }
    use(username, password, done) {
        console.log(typeof username,typeof  password,typeof done);
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            bcrypt.compare(password, user.password).then(function (res) {
                if (!res) {
                    console.log('notOk')
                    return done(null, false, { message: 'Incorrect password.' });
                } else {
                    console.log('ok')
                    return done(null, user);
                }
            });

        });
    }
    serializeUser(user, done) {
        done(null, user.id);
    };
    deserializeUser(id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    }
}

module.exports = function (passport, LocalStrategy ) {
    return new Authentification(passport, LocalStrategy);
}

// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }

//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username.' });
//             }
//             bcrypt.compare(password, user.password).then(function (res) {
//                 if (!res) {
//                     console.log('notOk')
//                     return done(null, false, { message: 'Incorrect password.' });
//                 } else {
//                     console.log('ok')
//                     return done(null, user);
//                 }
//             });

//         });
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });