const { Pool } = require("pg");
import "dotenv/config";

// PostgreSQL connection pool
const pool = new Pool({
  user: process.env.USERNAME,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
