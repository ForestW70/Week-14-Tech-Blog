const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

router.get('/post/:id', async (req, res) => {
    // const postId = req.params.id;
    // try {
    //     const singlePostData = await BlogPost.findByPk(postId)
    //     const singlePost = singlePostData.get({ plain: true })
    //     // res.status(200).json(singlePost)
    //     res.redirect('/post/' + postId)
    //     res.render('post-comment', { singlePost })
    // } catch (err) {
    //     res.status(400).json(err);
    // }
})

router.post('/new-post', async (req, res) => {
    try {
        const newPost = await BlogPost.create({
            post_title: req.body.post_title,
            post_body: req.body.post_body,
            date_created: req.body.date_create,
            user_id: req.session.user_id
        });
        res.status(200).json("new post created!");
        res.redirect('/home')
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/new-comment', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;