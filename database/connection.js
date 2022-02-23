require('dotenv').config()

var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

module.exports = knex