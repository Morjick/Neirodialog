const { Router } = require('express')
const router = Router()


const config = require('config')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { check, validationResult } = require("express-validator")


const User = require('../model/User')

// /auth/login
router.post('/login',
  [
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему'
        })
      }

      const { login, password } = req.body

      const user = await User.findOne({ login })

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('SECRET_KEY'),
        { expiresIn: "30d" }
      )

      return res.status(200).json({ message: 'Всё ок', token, userId: user.id })
    } catch (e) {
      const error = e
      res.status(501).json({ message: 'Что-то пошло не так, попробуйте снова', error: `Детали: ${error}` })

      console.log(error)
    }
  })

module.exports = router