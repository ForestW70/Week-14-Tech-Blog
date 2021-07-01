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

        const blogPosts = allPosts.map((post) => 
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
        if (!req.session.logged_in) {
            res.render('homepage', { blogPosts });
        } else {
            res.render('homepage', { blogPosts, username: req.session.username, logged_in: req.session.logged_in })
        }
    } catch (err) {
        res.status(400).json(err);
    }

})


router.get('/user-dash', withAuth, async (req, res) => {

    try {
        const userData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    where: {
                        id: req.session.user_id
                    }
                }
            ],
            order: [['date_created', 'DESC']]
        });

        const userPosts = userData.map(posts => 
            posts.get({ plain: true })
        )
        // res.status(200).json(userPosts)
        res.render('user-dash', {userPosts, username: req.session.username, logged_in: req.session.logged_in })

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/create-post', withAuth, async(req, res) => {
    res.render('create-post', {username: req.session.username, user_id: req.session.user_id, logged_in: req.session.logged_in});
})

module.exports = router;
