var express = require('express');
var router = express.Router();

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
            res.json(results);
            console.log('success')

            
            
        })
    })








module.exports = router