const { Router } = require('express')
const router = Router()


const Note = require('../model/Note')
const Product = require('../model/Product')
const Section = require('../model/Section')
const Course = require('../model/Course')
const Gallery = require('../model/Gallery')

// /find/notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find()

    return res.status(200).json({ message: 'Всё ок', notes })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /find/products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find()

    return res.status(200).json({ message: 'Всё ок', products })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /find/gallery
router.get('/gallery', async (req, res) => {
  try {
    const gallery = await Gallery.find()

    return res.status(200).json({ message: 'Всё ок', gallery })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /find/section
router.get('/section', async (req, res) => {
  try {
    const section = await Section.find()

    return res.status(200).json({ message: 'Всё ок', section })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})

// /find/course
router.get('/course', async (req, res) => {
  try {
    const course = await Course.find()
    
    return res.status(200).json({ message: 'Всё ок', course })
  } catch (e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })
  }
})



module.exports = router