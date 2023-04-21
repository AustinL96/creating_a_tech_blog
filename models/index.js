const Blogs = require('./Blogs');
const User = require('./User');
const Comments = require('./Comments');

User.hasMany(Blogs, {
  foreignKey: 'poster_id'
})

Blogs.hasMany(Comments, {
  foreignKey: 'blog_id'
})

module.exports = {
    Blogs,
    User,
    Comments
  }