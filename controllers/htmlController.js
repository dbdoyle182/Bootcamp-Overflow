var express = require('express');

var router = express.Router();
var db = require('../models')


router.get('/', function(req, res) {
    console.log(req.user);
    console.log(req.isAuthenticated());

    res.render('home')
});

router.get('/login', function(req, res) {


    res.render('login')
});

router.get('/post', function(req, res) {


    res.render('post')
});

router.get('/postlist', function(req, res) {


    res.render('postlist')
});

router.get('/signup', function(req, res) {


    res.render('signup')
});

router.get('/user', function(req, res) {
    db.User.findAll({}).then(function(data) {
        
        res.render('user', { user: data })
    })
});

module.exports = router