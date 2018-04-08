var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {


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


    res.render('user')
});

module.exports = router