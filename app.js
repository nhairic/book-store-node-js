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
/**
 * Library
 */
const express = require('express');
const ejs = require('ejs');
const app = express();
const routes =require('./src/routes');
const Product = require('./models/Product');
const Order = require('./models/Order');
const User = require('./models/User');
const ProductManager = require("./Manager/ProductManager");
const bodyParser = require('body-parser');
const passport = require('passport')
const session = require("express-session")
const flash = require('connect-flash')
const LocalStrategy = require('passport-local').Strategy;
const methodOverride = require('method-override')
const restify = require('express-restify-mongoose')
const router = express.Router()


app.use(session({ secret: "xxjdhjdfshkdghkjfdghslkdhnbutspejtrpsvầesutvxou" }));
app.use(passport.initialize());
app.use(passport.session());

const authentifications = require('./src/authentification');
authentifications(passport, LocalStrategy);

/**
 * Restification
 */
restify.serve(router, Product)
restify.serve(router, Order)
restify.serve(router, User)


/**
 * Middlewares
 */
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());

/**
 * Config templates
 */
app.set('view engine', 'ejs');

/**
 * ROUTES
 */
routes(app,passport);

app.use(router)
app.listen(3000);