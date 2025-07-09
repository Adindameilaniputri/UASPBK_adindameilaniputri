const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Ambil semua order berdasarkan user_id, dikelompokkan berdasarkan created_at
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;

  const sql = 'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC';
  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error('❌ Gagal ambil riwayat:', err);
      return res.status(500).json({ message: 'Gagal ambil riwayat' });
    }

    const grouped = {};
    results.forEach(order => {
      const key = order.created_at.toISOString();
      if (!grouped[key]) grouped[key] = [];

      grouped[key].push({
        id: order.id,
        name: order.name,
        price: order.price,
        image: order.image,
        quantity: order.quantity
      });
    });

    const orders = Object.entries(grouped).map(([created_at, items]) => ({
      created_at,
      items
    }));

    res.json(orders);
  });
});

// ✅ Simpan order baru (dipanggil saat checkout)
router.post('/', (req, res) => {
  const { user_id, items } = req.body;

  if (!user_id || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Data tidak lengkap' });
  }

  const createdAt = new Date();
  const sql = 'INSERT INTO orders (user_id, name, price, image, quantity, created_at) VALUES ?';

  const values = items.map(item => [
    user_id,
    item.name,
    item.price,
    item.image,
    item.quantity,
    createdAt
  ]);

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error('❌ Gagal simpan order:', err);
      return res.status(500).json({ message: 'Gagal simpan order' });
    }

    res.status(201).json({ message: 'Order disimpan', affectedRows: result.affectedRows });
  });
});

module.exports = router;
