const { Model, DataTypes } = require('sequelize');
const db = require('../config/connection');

class Comments extends Model { }

Comments.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Blogs',
          key: 'id'
        }
    },
    poster_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
        }
    },
    content: {
        type: DataTypes.STRING(5000),
        allowNull: false
    }
}, {
  sequelize: db,
  modelName: 'Comments'
});

module.exports = Comments;