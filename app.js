//Connexion BDD
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/workshop')

mongoose
    .connection
    .on('connected', function () {
        console.log('Mongoose default connection open to db');
    })

mongoose
    .connection
    .on('error', function (err) {
        console.log('Monngose default connection error:' + err);
    })
// Librairies
var express = require('express');
let ejs = require('ejs');
var app = express();
var Product = require('./models/Product');
var Order = require('./models/Order');
var User = require('./models/User');
var ProductManager = require("./Manager/ProductManager");
var bodyParser = require('body-parser');
var passport = require('passport'),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    flash = require('connect-flash'),
     LocalStrategy = require('passport-local').Strategy;

app.use(session({ secret: "xxjdhjdfshkdghkjfdghslkdhnbutspejtrpsvầesutvxou" }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


// les use middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(flash());

//User.create({'username' : 'nhairic', 'password': 'mongo'});

/**
 * Config templates
 */
app.set('view engine', 'ejs');


/**
 * ROUTES
 */

app.get('/', function (req, res) {
    ProductManager.getAll(
        function (err, Liste) {
            res.render('index', { body: Liste, messages : req.flash('error'), user : req.user });
        }
    )
});


// app.post('/addCommand', function (req, res) {
//     try {
//         Product.findOneAndUpdate({ _id: req.body.id }, { $inc: { orders_counter: 1 } }, function (err, doc) {
//             if (err) {
//                 //res.statusCode = 403;
//                 console.log(e);

//             } else {
//                 //res.statusCode = 403;
//                 console.log(doc);
//             }
//         });
//     } catch (e) {
//         console.log(e);
//     }

//     res.send('');
// });

app.post('/addCommand', function (req, res) {
    if(typeof req.user != 'undefined'){
        ProductManager.addCommand(req, function (err, doc) {
            res.contentType('json')
            if (err) {
                res.status(400);
                res.send(JSON.stringify("un problème et survenue"));
            } else {
                res.status(200);
                res.send(JSON.stringify(doc.orders_counter));
            }
        })
    }else{
        res.send(JSON.stringify("Connecter vous !"));
    }
});

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/',
                                   failureFlash: true })
);

app.listen(3000);