const { Pool } = require("pg");
require("dotenv").config();

console.log("DB_USER:", process.env.DB_USER);

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
