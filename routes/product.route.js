const {Router} = require('express')
const router = Router()
const config = require('config')
const Product = require('../model/Product')

const getPayment = require('../functions/orders')

// /api/basket/create
router.post( '/create', async (req, res) => {

  try {
    const { name, price, img, autor } = req.body

    const candidateProduct = await Product.findOne({ name, price, img, autor })

    if (candidateProduct) {
      return res.status(400).json({ message: 'Такой продукт уже существует' })
    }

    const product = new Product({ name, price, img, autor })

    await product.save()



    res.status(201).json({ message: 'Пользователь создан' })
  }

  catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
  
})

// /api/basket/delete
router.post( '/delete', async (req, res) => {

  try {
    const { name, price, img, autor } = req.body

    const candidateProduct = await Product.deleteOne({ name, price, img, autor })

    if (!candidateProduct) {
      return res.status(400).json({ message: 'Продукт не найден' })
    }

    const product = new Product({ name, price, img, autor })

    await product.save()



    res.status(201).json({ message: 'Пользователь создан' })
  }

  catch(e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
  
})

module.exports = router