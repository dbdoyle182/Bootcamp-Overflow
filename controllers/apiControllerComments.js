var express = require('express');

var router = express.Router();

var db = require('../models');

router.get('/api/comments', function(req, res) {
    db.Comment.findAll({
        include: [db.User]
    }).then(function(result) {
        res.json(result);
        console.log('sucessfully posted')
        
    })
});

router.post('/api/comments', function(req, res) {
    console.log(req.body)
    db.Comment.create(
        {
            UserId: req.user.id,
            content: req.body.content,
            createdBy: req.user.username,
            PostId: req.body.postid
        }
    ).then(function(results) {
    
        res.redirect('/postlist');
    });
})

module.exports = router