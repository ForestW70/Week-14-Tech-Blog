const router = require('express').Router();
const { User, BlogPost, Comment } = require('../../models');

router.post('/new', async (req, res) => {
    try {
        const newPost = await BlogPost.create(req.body);
        res.status(200).json("new post created!");
        res.redirect('/home')
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;