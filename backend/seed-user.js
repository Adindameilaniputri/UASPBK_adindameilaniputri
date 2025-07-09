// seed-user.js
const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// Konfigurasi koneksi MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // ganti kalau username MySQL kamu berbeda
  password: '',        // ganti kalau ada password MySQL
  database: 'project'  // sesuai nama database kamu
});

// Data user yang ingin diinsert
const username = 'adin';
const plainPassword = '123456';
const firstName = 'Dinda';
const lastName = 'Meilani';

// Hash password sebelum insert
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
  if (err) {
    console.error('❌ Gagal hashing password:', err);
    return;
  }

  const sql = 'INSERT INTO users (username, password, firstName, lastName) VALUES (?, ?, ?, ?)';
  db.query(sql, [username, hashedPassword, firstName, lastName], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        console.warn('⚠️ Username sudah ada! Gagal insert user "adin"');
      } else {
        console.error('❌ Gagal insert ke database:', err);
      }
    } else {
      console.log('✅ User "adin" berhasil dibuat dengan password "123456"');
    }

    db.end();
  });
});
