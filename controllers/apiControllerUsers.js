var express = require('express');
var passport = require('passport');
var router = express.Router();
var { check, validationResult } = require('express-validator/check');

var db = require('../models');

    router.get('/api/users', function(req, res) {
        db.User.findAll({
            include: [{all:true}]
        }).then(function(results) {
            console.log('success')

            res.json(results)
        })
    });

    router.post('/api/users', function(req, res) {
        db.User.create(
            {
                email: req.body.email,
                password: req.body.password,
                username: req.body.username,
                firstName: req.body.first,
                lastName: req.body.last
                
        }).then(function(results) {
            check('email').isEmail().withMessage('Must be a valid email').trim().normalizeEmail();

            check('password', 'Password must be at least 7 characters in length').isLength({ min: 7}).matches(/\d/)
            res.redirect('/login')
            console.log('success')
        })
    })

    router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/user')
    });








module.exports = router