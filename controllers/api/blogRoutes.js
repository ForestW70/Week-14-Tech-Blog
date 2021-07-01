const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

router.post('/new', async (req, res) => {
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

module.exports = router;