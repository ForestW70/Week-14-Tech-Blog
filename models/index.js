const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

// creating associations between our tables to be able to return joined table's data.
User.hasMany(BlogPost, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
})

BlogPost.hasMany(Comment, {
    foreignKey: 'blog_post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(BlogPost, {
    foreignKey: 'blog_post_id'
})


module.exports = {
    User,
    BlogPost,
    Comment
}