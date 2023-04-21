const { Blogs, User } = require('../models/index');
const { Sequelize } = require('sequelize');
const db = require('./connection');

// const db = new Sequelize(process.env.DB_CONNECTION_STRING)

db.sync({ force: true }).then(() => {
  Blogs.bulkCreate([
    {
      title: 'This is the first new blog',
      content: 'This is the first new blog\'s text content'
    },
    {
      title: 'This is the second new blog',
      content: 'This is the second new blog\'s text content'
    },
  ]).then(() => {
    console.log('Blogs seeded!');
    process.exit();
  });
});
