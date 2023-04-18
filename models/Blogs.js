const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Blogs extends Model { }

Blogs.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING(5000),
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Blog'
});

module.exports = Blogs;