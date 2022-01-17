const { Router } = require('express')
const router = Router()

const Note = require('../model/Note')
const Product = require('../model/Product')
const Gallery = require('../model/Gallery')

// /create/notes
router.post('/notes', async (req, res) => {
  try {
    const { title, subtitle, image, type, body } = req.body
    const data = {
      title, subtitle, image, type, body
    }

    const notes = new Note({ ...data })
    notes.save()

    return res.status(200).json({ message: 'Всё ок', notes })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /create/products
router.post('/products', async (req, res) => {
  try {
    const { title, image, desc, price } = req.body
    const data = {
      title, image, desc, price
    }

    const product = new Product({ ...data })
    product.save()

    return res.status(200).json({ message: 'Всё ок', product })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /create/gallery
router.post('/gallery', async (req, res) => {
  try {
    const { image, date } = req.body
    const data = {
      image, date
    }

    const gallery = new Gallery({ ...data })
    gallery.save()

    return res.status(200).json({ message: 'Всё ок', gallery })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})


module.exports = router