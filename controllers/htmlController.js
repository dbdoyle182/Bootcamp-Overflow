var express = require('express');

var router = express.Router();
var db = require('../models')


router.get('/', function(req, res) {
    if (req.user) {
        console.log(req.user.id);
    }
        console.log(req.isAuthenticated());

    res.render('home')
});

router.get('/login', function(req, res) {


    res.render('login')
});

router.get('/postview/:id', function(req, res) {
    db.Post.findOne(
        {
            where: {
                id: req.params.id
            },
            include: [db.User]
        }
    ).then(function(results) {
        res.render('postview', {
            postinfo: results
        })
    });
});

router.get('/postlist', function(req, res) {
    db.Post.findAll(
        {
            include: [db.User]
        }
    ).then(function(results) {

        res.render('postlist', { post: results })
    });
});

router.get('/signup', function(req, res) {


    res.render('signup')
});

router.get('/user', function(req, res) {
    db.User.findAll({}).then(function(data) {
        
        res.render('user', { user: data })
    })
});

router.get('/post', function(req, res) {
    res.render('post')
})

module.exports = router