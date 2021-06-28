const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');


// log-in, sign up routes
router.get('/', (req, res) => {
    res.redirect('/home');
});

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/home', async (req, res) => {
    
    try {
        const allPosts = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
            order: [['id', 'DESC']]
        });

        let blogPosts = allPosts.map((post) => 
            post.get({ plain: true })
        )
        blogPosts.forEach(async (post) => {
            let authorData = await User.findOne({
                where: {
                    id: post.user_id
                }
            });
            author = authorData.get({ plain: true });
            post.author = author.username;

        })
        // res.status(200).json(blogPosts)
        res.render('homepage', { blogPosts });
    } catch (err) {
        res.status(400).json(err);
    }







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
