var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/api/posts', function(req, res) {
    db.Post.findAll({

    }).then(function(result) {
        res.json(result);
        console.log('working')
    })
});

router.post('/api/posts', function(req, res) {
    db.Post.create(req.body).then(function(results) {
        res.redirect('/post')
    })
})




module.exports = router