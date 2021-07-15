require('dotenv').config();
const Sequelize = require('sequelize');

// checks for jawsDB, if it doesnt exist, use local variables instead.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT,
    });

module.exports = sequelize;



