var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/api/posts', function(req, res) {
    db.Post.findAll({
        include: [{all:true}]
    }).then(function(result) {
        res.json(result);
        console.log('working')
    })
});

router.post('/api/posts', function(req, res) {
    db.Post.create(
        {
            UserId: req.user.id,
            title: req.body.title,
            content: req.body.content,
            posttype: req.body.posttype
        
    }).then(function(results) {
        res.redirect('/postlist')
    })
})




module.exports = router