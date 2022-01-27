const router = require('express').Router();

const User = require('../../models/User.js');
const Post = require('../../models/Post.js');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;