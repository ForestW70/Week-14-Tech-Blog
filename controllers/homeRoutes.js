const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// log-in, sign up routes
router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/home', (req, res) => {
    res.render('homepage');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/user-dash', (req, res) => {
    res.render('user-dash');
})

module.exports = router;
