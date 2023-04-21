const { Sequelize } = require('sequelize');
require('dotenv').config();
const isProduction = process.env.PORT;

const connection = isProduction ? new Sequelize (process.env.DB_CONNECTION_STRING) : new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = connection;