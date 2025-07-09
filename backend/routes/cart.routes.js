const express = require('express')
const router = express.Router()
const db = require('../db')

// ✅ Ambil semua item cart milik user tertentu
router.get('/:user_id', (req, res) => {
  const { user_id } = req.params
  db.query('SELECT * FROM cart WHERE user_id = ?', [user_id], (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Gagal mengambil data cart' })
    }
    res.json(results)
  })
})

// ✅ Tambah produk ke cart (cek duplikat)
router.post('/', (req, res) => {
  console.log('📦 Data POST cart:', req.body)

  const { user_id, name, price, image, quantity } = req.body

  if (!user_id || !name || !price || !image) {
    return res.status(400).json({ message: 'Data tidak lengkap' })
  }

  db.query(
    'SELECT * FROM cart WHERE user_id = ? AND name = ?',
    [user_id, name],
    (err, results) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Gagal mengecek data cart' })
      }

      if (results.length > 0) {
        // Produk sudah ada → update quantity
        const newQty = results[0].quantity + (quantity || 1)
        db.query(
          'UPDATE cart SET quantity = ? WHERE id = ?',
          [newQty, results[0].id],
          (err2) => {
            if (err2) {
              console.error(err2)
              return res.status(500).json({ message: 'Gagal update quantity' })
            }
            return res.json({ message: 'Quantity diperbarui' })
          }
        )
      } else {
        // Produk belum ada → insert
        db.query(
          'INSERT INTO cart (user_id, name, price, image, quantity) VALUES (?, ?, ?, ?, ?)',
          [user_id, name, price, image, quantity || 1],
          (err3, result) => {
            if (err3) {
              console.error(err3)
              return res.status(500).json({ message: 'Gagal menambahkan ke cart' })
            }
            res.json({ message: 'Produk berhasil ditambahkan ke cart', id: result.insertId })
          }
        )
      }
    }
  )
})

// ✅ Hapus satu item cart berdasarkan ID
router.delete('/:id', (req, res) => {
  const { id } = req.params
  db.query('DELETE FROM cart WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Gagal menghapus item dari cart' })
    }
    res.json({ message: 'Item berhasil dihapus dari cart' })
  })
})

// ✅ Update quantity item tertentu
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { quantity } = req.body

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: 'Quantity tidak valid' })
  }

  db.query('UPDATE cart SET quantity = ? WHERE id = ?', [quantity, id], (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Gagal mengupdate jumlah produk' })
    }
    res.json({ message: 'Jumlah produk berhasil diperbarui' })
  })
})

// ✅ Hapus semua item cart milik user tertentu
router.delete('/clear/:user_id', (req, res) => {
  const { user_id } = req.params
  db.query('DELETE FROM cart WHERE user_id = ?', [user_id], (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Gagal menghapus semua item cart' })
    }
    res.json({ message: 'Semua item cart berhasil dihapus' })
  })
})

// ✅ Checkout: pindah dari cart ke orders lalu kosongkan cart
router.post('/checkout/:user_id', (req, res) => {
  const { user_id } = req.params

  // 1. Ambil isi cart
  db.query('SELECT * FROM cart WHERE user_id = ?', [user_id], (err, cartItems) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'Gagal ambil data cart' })
    }

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart kosong, tidak bisa checkout' })
    }

    // 2. Masukkan ke orders
    const values = cartItems.map(item => [item.user_id, item.name, item.price, item.image, item.quantity])
    db.query(
      'INSERT INTO orders (user_id, name, price, image, quantity) VALUES ?',
      [values],
      (err2) => {
        if (err2) {
          console.error(err2)
          return res.status(500).json({ message: 'Gagal simpan ke orders' })
        }

        // 3. Hapus semua item dari cart
        db.query('DELETE FROM cart WHERE user_id = ?', [user_id], (err3) => {
          if (err3) {
            console.error(err3)
            return res.status(500).json({ message: 'Gagal hapus cart setelah checkout' })
          }

          res.json({ message: 'Checkout berhasil! Terima kasih sudah belanja 💖' })
        })
      }
    )
  })
})

// ✅ Ambil riwayat pesanan dari tabel orders
router.get('/orders/:user_id', (req, res) => {
  const { user_id } = req.params

  db.query(
    'SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC',
    [user_id],
    (err, results) => {
      if (err) {
        console.error(err)
        return res.status(500).json({ message: 'Gagal mengambil riwayat pesanan' })
      }
      res.json(results)
    }
  )
})

module.exports = router
