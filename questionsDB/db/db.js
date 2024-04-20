const { Pool } = require("pg");

// PostgreSQL connection pool
const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database_name",
  password: "your_password",
  port: 5432,
});

module.exports = pool;
