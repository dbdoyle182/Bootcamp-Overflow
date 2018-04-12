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
                lastName: req.body.last,
                userImage: req.body.userImage,
                bio: req.body.bio,
                career: req.body.career,
                resume: req.body.resume,
                desiredLearning: req.body.desiredLearning
                
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

    router.put("/api/users", function(req, res) {
        var newImage;
        var newBio;
        var newResume;
        var newCareer;
        var newDesiredLearning;
        if(req.body.userImage === '') {
            newImage = req.user.userImage
        } else {
            newImage = req.body.userImage
        };
        if(req.body.bio === '') {
            newBio = req.user.bio
        } else {
            newBio = req.body.bio
        };
        if(req.body.resume === '') {
            newResume = req.user.resume
        } else {
            newResume = req.body.resume
        };
        if(req.body.career === '') {
            newCareer = req.user.career
        } else {
            newCareer = req.body.career
        };
        if(req.body.desiredLearning === '') {
            newDesiredLearning = req.user.desiredLearning
        } else {
            newDesiredLearning = req.body.desiredLearning
        };
        db.User.update(
            {
                userImage: newImage,
                bio: newBio,
                resume: newResume,
                career: newCareer,
                desiredLearning: newDesiredLearning
            },
          {
            where: {
              id: req.user.id
            }
          }).then(function(results) {
              console.log("User page should render here")
            res.end();
        });
      });

    router.get('/logout', function(req, res) {
        req.logout();
        req.session.destroy();
        res.redirect('/');
    })








module.exports = router