const router = require('express').Router();
const { User, BlogPost } = require('../models');
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

router.get('/user-dash', async (req, res) => {
   

    try {
        const userData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    where: {
                        user_id: req.session.user_id
                    }
                }
            ]
        });
        
        const userPosts = userData.map(posts => {
            posts.get({ plain: true })
        })
        res.render('user-dash')

    } catch (err) {
        throw new Error(err);
    }
})

module.exports = router;
