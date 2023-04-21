const Blogs = require('./Blogs');
const User = require('./User')

User.hasMany(Blogs, {
  foreignKey: 'poster_id'
})

module.exports = {
    Blogs,
    User
  }