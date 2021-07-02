const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

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
        const newComment = await Comment.create({
            comment_body: req.body.comment_body,
            user_id: req.session.user_id,
            blog_post_id: req.body.post_id,
            date_created: Date.now(),
        })
        res.status(200).json("new comment created!");
        res.redirect('/post/' + post_id);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const post = await BlogPost.findByPk(req.params.id)
        if (!post) {
            alert("No post found with this ID!")
        }

        post.destroy();
        res.status(200).json("Post deleted!");

    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;