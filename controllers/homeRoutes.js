const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// log-in, sign up routes
router.get('/', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/user-dash');
        return;
    }
    
    res.redirect('/welcome');
    
});

router.get('/welcome', withAuth, (req, res) => {
    res.render('login');
})

module.exports = router;
