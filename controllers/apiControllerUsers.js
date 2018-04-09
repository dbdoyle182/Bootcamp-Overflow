var express = require('express');
var router = express.Router();
var { check, validationResult } = require('express-validator/check');

var db = require('../models');

    router.get('/api/users', function(req, res) {
        db.User.findAll({
        }).then(function(results) {
            console.log('success')

            res.json(results)
        })
    });

    router.post('/api/users', function(req, res) {
        db.User.create(req.body).then(function(results) {
            check('email').isEmail().withMessage('Must be a valid email').trim().normalizeEmail();

            check('password', 'Password must be at least 7 characters in length').isLength({ min: 7}).matches(/\d/)
            res.json(results);
            console.log('success')
        })
    })








module.exports = router