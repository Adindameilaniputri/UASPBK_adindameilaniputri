import { defineStore } from 'pinia'

export const useMakeupStore = defineStore('makeup', {
  state: () => ({
    allProducts: [
      // Face
      { id: 1, name: 'Loose Powder Cake', type: 'Loose Powder', category: 'Face', price: 40000, image: '/images/face/bedaktabur.png' },
      { id: 2, name: 'Bare With Me Mineral', type: 'Loose Powder', category: 'Face', price: 63500, image: '/images/face/barewithmemineral.png' },
      { id: 3, name: 'Bright Stuff', type: 'Loose Powder', category: 'Face', price: 28000, image: '/images/face/brightstuff.png' },
      { id: 4, name: 'Daily Matte Compact Powder', type: 'Powder Complexion', category: 'Face', price: 42000, image: '/images/face/dailymattecompactpowder.jpg' },
      { id: 5, name: 'City Chicc CC Cake', type: 'Powder Complexion', category: 'Face', price: 53500, image: '/images/face/citychicc.png' },
      { id: 6, name: 'Daily Matte BB Cream', type: 'Liquid Complexion', category: 'Face', price: 55000, image: '/images/face/DailyMatteBBCream.png' },
      { id: 7, name: 'Pore Range', type: 'Liquid Complexion', category: 'Face', price: 47000, image: '/images/face/PoreRange.png' },
      { id: 8, name: 'Cheeklit Cream Blush', type: 'Blush', category: 'Face', price: 39000, image: '/images/face/CheeklitCreamBlush.png' },
      { id: 9, name: 'Cheeklit Pressed Blush', type: 'Blush', category: 'Face', price: 48000, image: '/images/face/CheeklitPressedBlush.png' },
      { id: 10, name: 'Highlighter Stick', type: 'Highlighter', category: 'Face', price: 43000, image: '/images/face/Highlighterstick.png' },
      { id: 11, name: 'Highlighter Powder', type: 'Highlighter', category: 'Face', price: 39000, image: '/images/face/HighlighterPowder.png' },
      { id: 12, name: 'Squeeze Me Up Liquid Concealer Caramel', type: 'Concealer', category: 'Face', price: 42000, image: '/images/face/Concelar.jpg' },

      // Lip
      { id: 13, name: 'Squeeze Me Up Lip Glass', type: 'Lip Gloss', category: 'Lip', price: 58000, image: '/images/lip/lipglos1.png' },
      { id: 14, name: 'Liquid Lip Shine', type: 'Lip Gloss', category: 'Lip', price: 44000, image: '/images/lip/lipglos2.png' },
      { id: 15, name: 'Soulmatte', type: 'Lipstick', category: 'Lip', price: 63000, image: '/images/lip/lipstick1.png' },
      { id: 16, name: 'Sugar Rush', type: 'Lipstick', category: 'Lip', price: 39500, image: '/images/lip/lipstick2.png' },
      { id: 17, name: 'Creamatte', type: 'Liquid Lipstick', category: 'Lip', price: 52000, image: '/images/lip/llipstick1.png' },
      { id: 18, name: 'Lip Cushion', type: 'Liquid Lipstick', category: 'Lip', price: 60000, image: '/images/lip/llipstick2.png' },
      { id: 19, name: 'Emina Bouncy Tint 06 Bouncy Blush 7.4 g', type: 'Liptint', category: 'Lip', price: 69000, image: '/images/lip/liptint1.png' },
      { id: 20, name: 'Emina Airy Surprise Tint 11 So Fetch', type: 'Liptint', category: 'Lip', price: 39000, image: '/images/lip/liptint2.png' },
      { id: 21, name: 'Poppin Matte The 90 Edition', type: 'Lip Matte', category: 'Lip', price: 54500, image: '/images/lip/lipmate1.jpg' },
      { id: 22, name: 'Poppin Matte', type: 'Lip Matte', category: 'Lip', price: 43000, image: '/images/lip/lipmate2.png' },
      { id: 23, name: 'Oh So Kissable Tinted', type: 'Lip Balm', category: 'Lip', price: 39000, image: '/images/lip/lipbalm.png' },
      { id: 24, name: 'Emina Lip Mask Watermelon Sorbet', type: 'Lip Mask', category: 'Lip', price: 44000, image: '/images/lip/lipmask.png' },

      // Eye
      { id: 25, name: 'Pop Rouge Pressed Eye Shadow', type: 'Eyeshadow', category: 'Eye', price: 50500, image: '/images/eye/eyesha.png' },
      { id: 26, name: 'Total Eclipse Pen Liner 1 ml', type: 'Eyeliner', category: 'Eye', price: 61000, image: '/images/eye/eyel1.jpg' },
      { id: 27, name: 'Eye Do! Crayon Pour Les Yeux', type: 'Eyeliner', category: 'Eye', price: 72500, image: '/images/eye/eyel2.png' },
      { id: 28, name: 'Eye Do! Pencil Liner', type: 'Eyeliner', category: 'Eye', price: 52000, image: '/images/eye/eyel3.png' },
      { id: 29, name: 'Top Secret Eyebrow', type: 'Eyebrow', category: 'Eye', price: 62500, image: '/images/eye/eyeb.png' },
      { id: 30, name: 'Cosmic Lash Volume Mascara', type: 'Mascara', category: 'Eye', price: 70000, image: '/images/eye/mas1.jpg' },
      { id: 31, name: 'Squeeze Me Up Browcara', type: 'Mascara', category: 'Eye', price: 63000, image: '/images/eye/mas2.jpg' },
      { id: 32, name: 'Squeeze Me Up Mascara', type: 'Mascara', category: 'Eye', price: 67500, image: '/images/eye/mas3.jpg' },
      { id: 33, name: 'Star Lash Aqua Mascara', type: 'Mascara', category: 'Eye', price: 56000, image: '/images/eye/mas4.png' }
    ]
  }),
  actions: {
    // Bisa ditambahkan aksi jika fetch API dibutuhkan
  }
})
