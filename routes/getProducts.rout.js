const { Router } = require('express')
const router = Router()

const Products = require('../data/products')

// /api/getProducts
router.get('/', async (req, res) => {
  try {
    const products = Products
    console.log('get')

    return (
      res.status(200).json({ message: 'Ответ сервера положительный', data: products })
    )
  } catch(e) {
    console.log(e)
  }
})

module.exports = router