const router = require('express').Router();
const { User, BlogPost, Comment } = require('../models');
const withAuth = require('../public/js/utils/auth');


// redirects from root to home.
router.get('/', (req, res) => {
    res.redirect('/home');
});

// renders login screen.
router.get('/login', (req, res) => {
    res.render('login');
})

// grabs all posts and renders homepage with them.
router.get('/home', async (req, res) => {
    try {
        const allPosts = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                },
            ],
            order: [['id', 'DESC']],
        });

        const blogPosts = allPosts.map((post) =>
            post.get({ plain: true })
        );

        if (!req.session.logged_in) {
            res.render('homepage', { blogPosts });
        } else {
            res.render('homepage', { blogPosts, username: req.session.username, logged_in: req.session.logged_in })
        }
        res.status(200);
    } catch (err) {
        res.status(400).json(err);
    }
})

// checks if user is logged in, if so, bring them to user dash where all of their posts are displayed.
// if not logged in, redirect to login page.
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
            order: [['date_created', 'DESC']],
        });

        const userPosts = userData.map(posts =>
            posts.get({ plain: true })
        );
        res.render('user-dash', { userPosts, username: req.session.username, logged_in: req.session.logged_in })

    } catch (err) {
        res.status(500).json(err)
    }
})

// renders create post page.
router.get('/create-post', withAuth, async (req, res) => {
    res.render('create-post', { username: req.session.username, user_id: req.session.user_id, logged_in: req.session.logged_in });
})

// displays page for single post and all comments on that post.
router.get('/post/:user/:id', async (req, res) => {
    const postBy = req.params.user;
    const postId = req.params.id;
    try {
        const singlePostData = await BlogPost.findByPk(postId);
        const singlePost = singlePostData.get({ plain: true })

        const commentsData = await Comment.findAll({
            where: {
                blog_post_id: postId,
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        });

        const postComments = commentsData.map((comment) =>
            comment.get({ plain: true })
        )

        res.render('post-comment', { singlePost, postComments, postBy, logged_in: req.session.logged_in })

    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
})

module.exports = router;
