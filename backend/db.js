const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // isi sesuai password MySQL kamu
  database: 'project'
});

db.connect(err => {
  if (err) throw err;
  console.log('✅ MySQL connected');
});

module.exports = db;
