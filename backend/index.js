const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

const saltRounds = 10;

// ✅ Import route orders
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes); // semua route orders pakai prefix /api/orders

// ✅ Import route cart (HAPUS duplikasi yang di bawah)
const cartRoutes = require('./routes/cart.routes');
app.use('/api/cart', cartRoutes); // semua route cart pakai prefix /api/cart

// === LOGIN ===
app.post('/users/authenticate', (req, res) => {
  try {
    const { username, password } = req.body || {};
    console.log('🔐 Login request:', username);
    console.log('📦 req.body =', req.body);

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, results) => {
      if (err) {
        console.error('❌ SQL Error:', err);
        return res.status(500).json({ message: 'Server error (DB)' });
      }

      if (results.length === 0) {
        console.warn('⚠️ Username not found:', username);
        return res.status(400).json({ message: 'Username not found' });
      }

      const user = results[0];
      console.log('🟢 User found:', user.username);

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          console.error('❌ Bcrypt error:', err);
          return res.status(500).json({ message: 'Server error (bcrypt)' });
        }

        if (!isMatch) {
          console.warn('⚠️ Wrong password for user:', username);
          return res.status(401).json({ message: 'Wrong password' });
        }

        console.log('✅ Login success for:', username);
        res.json({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token'
        });
      });
    });
  } catch (error) {
    console.error('❌ Unexpected error in /authenticate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// === REGISTER ===
app.post('/users/register', (req, res) => {
  const { username, password, firstName, lastName } = req.body || {};
  console.log('📝 Register request for:', username);

  if (!username || !password || !firstName || !lastName) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const checkSql = 'SELECT * FROM users WHERE username = ?';
  db.query(checkSql, [username], (err, results) => {
    if (err) {
      console.error('❌ DB Error saat cek username:', err);
      return res.status(500).json({ message: 'Server error' });
    }

    if (results.length > 0) {
      console.warn('⚠️ Username already taken:', username);
      return res.status(409).json({ message: 'Username is already taken' });
    }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        console.error('❌ Hash error:', err);
        return res.status(500).json({ message: 'Register failed (hash error)' });
      }

      const insertSql = 'INSERT INTO users (username, password, firstName, lastName) VALUES (?, ?, ?, ?)';
      db.query(insertSql, [username, hashedPassword, firstName, lastName], (err, result) => {
        if (err) {
          console.error('❌ DB Error saat insert user:', err);
          return res.status(500).json({ message: 'Register failed (insert error)' });
        }

        console.log('✅ Register berhasil untuk:', username);
        res.json({ message: 'Register successful' });
      });
    });
  });
});

// === START SERVER ===
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 API ready at http://localhost:${PORT}`);
});
