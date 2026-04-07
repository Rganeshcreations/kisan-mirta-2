const mysql = require("mysql2");
require("dotenv").config();

// DEBUG (check env working or not)
console.log("DB_HOST:", process.env.DB_HOST);

// CREATE CONNECTION POOL
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// TEST CONNECTION
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Connection Failed:", err);
    return;
  }

  console.log("✅ MySQL Connected Successfully");
  connection.release();
});

// EXPORT
module.exports = db;