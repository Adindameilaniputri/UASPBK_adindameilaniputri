// stores/skincare.js
import { defineStore } from 'pinia'

export const useSkincareStore = defineStore('skincare', {
  state: () => ({
    products: [
      // Cleanser
      { id: 34, name: 'Emina Bright Stuff Prebiotic Tranexamic Acid Brightening Facial Cleanser 100ML', type: 'Cleanser', price: 34000, image: '/images/fw/fw1.png' },
      { id: 35, name: 'Emina Bright Stuff Prebiotic Tranexamic Acid Brightening Facial Cleanser 50ml', type: 'Cleanser', price: 21500, image: '/images/fw/fw2.png' },
      { id: 36, name: 'Emina Bright Stuff Niacinamide Oxy Ceramide Brightening Facial Cleanser 100ml', type: 'Cleanser', price: 30000, image: '/images/fw/fw3.png' },
      { id: 37, name: 'Emina Bright Stuff Niacinamide Oxy Ceramide Brightening Facial', type: 'Cleanser', price: 19500, image: '/images/fw/fw4.png' },
      { id: 38, name: 'Emina Glow Rad+ Hassle Free Cleanser Amino Fusion ProCleanser', type: 'Cleanser', price: 60000, image: '/images/fw/fw5.png' },
      { id: 39, name: 'Ms. Pimple Acne Solution', type: 'Cleanser', price: 22000, image: '/images/fw/fw6.png' },
      { id: 40, name: 'Bright Stuff for Acne Prone Skin 100ml', type: 'Cleanser', price: 33000, image: '/images/fw/fw7.png' },
      { id: 41, name: 'Bright Stuff Face Scrub', type: 'Cleanser', price: 24000, image: '/images/fw/fw7.png' },
      { id: 42, name: 'Emina Made-Calm & Purify Low pH Micellar Water 300 ml', type: 'Makeup Remover', price: 53000, image: '/images/fw/mr1.png' },
      { id: 43, name: 'Emina HyaluBright & Smooth Low pH Micellar Water 300 ml', type: 'Makeup Remover', price: 18000, image: '/images/fw/mr2.png' },
      { id: 44, name: 'Bright Stuff Micellar Water', type: 'Makeup Remover', price: 39000, image: '/images/fw/mr3.png' },
      { id: 45, name: 'Creamy Milk Cleansing Lotion', type: 'Makeup Remover', price: 25000, image: '/images/fw/mr4.png' },

      // Moisturizer
      { id: 46, name: 'Emina Water Barrier Balancing Gel', type: 'Moisturizer', price: 42000, image: '/images/mois/m1.jpg' },
      { id: 47, name: 'Emina Water Bright Glow Gel', type: 'Moisturizer', price: 42000, image: '/images/mois/m2.png' },
      { id: 48, name: 'Emina Glo Rad+ 9-Hyalucica Glow Moisture Gel', type: 'Moisturizer', price: 99000, image: '/images/mois/m3.png' },
      { id: 49, name: 'Emina Water Calming Gel 30 g', type: 'Moisturizer', price: 42000, image: '/images/mois/m4.png' },
      { id: 50, name: 'Bright Stuff Night Cream', type: 'Moisturizer', price: 27000, image: '/images/mois/m5.png' },
      { id: 51, name: 'Ms. Pimple Acne Solution Calming Gel 20 mL', type: 'Moisturizer', price: 32000, image: '/images/mois/m6.png' },
      { id: 52, name: 'Ms. Pimple Acne Solution Moisturizing Gel', type: 'Moisturizer', price: 27000, image: '/images/mois/m7.png' },
      { id: 53, name: 'Bright Stuff for Acne Prone Skin Moisturizing Cream', type: 'Moisturizer', price: 32000, image: '/images/mois/m8.png' },
      { id: 54, name: 'Bright Stuff Tone Up Cream', type: 'Moisturizer', price: 26000, image: '/images/mois/m9.png' },
      { id: 55, name: 'Bright Stuff Moisturizing Cream', type: 'Moisturizer', price: 26000, image: '/images/mois/m10.png' },
      { id: 56, name: 'Aloe Vera Face Mist', type: 'Moisturizer', price: 40000, image: '/images/mois/m11.png' },
      { id: 57, name: 'Aloe Vera Gel', type: 'Moisturizer', price: 31000, image: '/images/mois/m12.png' },

      // Serum
      { id: 58, name: 'Ms. Pimple Acne Solution Spot Gel', type: 'Spot Gel', price: 38000, image: '/images/serum/s1.png' },
      { id: 59, name: 'Emina Glo Rad+ Instant Refresh Puffy', type: 'Serum', price: 81000, image: '/images/serum/s2.png' },
      { id: 60, name: 'Emina Glo Rad+ Bright Glow Water-Sphere Serum', type: 'Serum', price: 94000, image: '/images/serum/s3.png' },
      { id: 61, name: 'Ms. Pimple Acne Solution Face Serum 30 mL', type: 'Serum', price: 61000, image: '/images/serum/s4.png' },
      { id: 62, name: 'Emina Natura Pal Splash Serum 40 ml', type: 'Serum', price: 86000, image: '/images/serum/s5.png' },
      { id: 63, name: 'Bright Stuff 7.5 ml', type: 'Serum', price: 18000, image: '/images/serum/s6.png' },
      { id: 64, name: 'Bright Stuff Serum 30ml', type: 'Serum', price: 55000, image: '/images/serum/s7.png' },

      // Toner
      { id: 65, name: 'Bright Stuff Exfoliating Toner', type: 'Toner', price: 41500, image: '/images/tn/tn1.png' },
      { id: 66, name: 'Ms. Pimple Acne Solution Exfoliating Toner 100 mL', type: 'Toner', price: 43000, image: '/images/tn/tn2.png' },
      { id: 67, name: 'Emina Natura Pal Toner Essence 100ml', type: 'Toner', price: 51000, image: '/images/tn/tn3.png' },
      { id: 68, name: 'Bright Stuff Face Toner', type: 'Toner', price: 31000, image: '/images/tn/tn4.png' },
      { id: 69, name: 'Emina Ms. Pimple Acne Solution Face Toner 50 ml', type: 'Toner', price: 21000, image: '/images/tn/tn5.png' },
      { id: 70, name: 'Double The Moist Face Toner', type: 'Toner', price: 55000, image: '/images/tn/tn6.png' },

      // Sunscreen
      { id: 71, name: 'Emina Sun Battle SPF 50 PA++++ Barrier Hydraburst Sunscreen 30 ml', type: 'SPF 50', price: 45000, image: '/images/SS/S1.png' },
      { id: 72, name: 'Emina Sun Battle SPF 50 PA++++ Cica Acne Fighter Sunscreen', type: 'SPF 50', price: 45000, image: '/images/SS/S2.png' },
      { id: 73, name: 'Emina Sun Battle SPF 50 PA++++ Cica Acne Fighter Sunscreen', type: 'SPF 50', price: 30000, image: '/images/SS/S3.png' },
      { id: 74, name: 'Emina Sun Battle SPF 35 PA +++ Acne Clear Cica', type: 'SPF 35', price: 35000, image: '/images/SS/S4.png' },
      { id: 75, name: 'Emina Sun Battle Bright Glow SPF 35 PA+++', type: 'SPF 35', price: 35000, image: '/images/SS/S5.png' },

      // Mask
      { id: 76, name: 'Masquerade Charcoal', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm1.jpg' },
      { id: 77, name: 'Masquerade Grapefruit', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm2.jpg' },
      { id: 78, name: 'Masquerade Blueberry', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm3.png' },
      { id: 79, name: 'Masquerade Cactus', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm4.jpg' },
      { id: 80, name: 'Bright Stuff Essence', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm5.png' },
      { id: 81, name: 'Masquerade Tea Tree Oil', type: 'Sheet Mask', price: 16000, image: '/images/mask/sm6.png' },
      { id: 82, name: 'Capsule Treat Gel Mask Green Tea', type: 'Face Mask', price: 21000, image: '/images/mask/fm1.jpg' },
      { id: 83, name: 'Capsule Treat Gel Mask Honey', type: 'Face Mask', price: 21000, image: '/images/mask/fm2.jpg' },
      { id: 84, name: 'Capsule Treat Sleeping Mask Cucumber', type: 'Face Mask', price: 21000, image: '/images/mask/fm3.jpg' },
      { id: 85, name: 'Capsule Treat Sleeping Mask Rice', type: 'Face Mask', price: 21000, image: '/images/mask/fm4.jpg' },
      { id: 86, name: 'Clay Mask Soothe and Smooth', type: 'Face Mask', price: 43000, image: '/images/mask/fm5.png' },
      { id: 87, name: 'Clay Mask Sebum Control', type: 'Face Mask', price: 42000, image: '/images/mask/fm6.png' }
    ]
  }),
})
