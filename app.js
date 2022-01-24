const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const app = express()

app.use(express.json({ extended: true, limit: '50mb' }))
app.use(express.static('public'))

app.use('/', express.static(path.join(__dirname, 'client', 'dist')))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*/")

  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "HEAD, OPTIONS, GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

  next()
})

app.use('/api/getProducts', require('./routes/getProducts.rout'))
app.use('/api/basket', require('./routes/basket.route'))
app.use('/api/order', require('./routes/order.route'))
app.use('/api/product', require('./routes/product.route'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/find', require('./routes/find.routes'))
app.use('/api/create', require('./routes/create.routes'))


const PORT = config.get('PORT') || 3000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('connect to data bse')

    const User = require('./model/User')
    const bcrypt = require("bcrypt")

    const hashedPassword = await bcrypt.hash('773322', 12)

    const userData = {
      email: 'admin@mail.ru',
      login: 'admin',
      typeUser: 'Admin',
      password: hashedPassword, // 773322
    }

    const user = await User.findOneAndUpdate({ login: userData.login }, { ...userData }, { upsert: true })

  } catch (e) {
    console.log('Server Error: Error to connect to DataBase. Details:', e.message)
    process.exit(1)
  }
}

start()

app.listen(PORT, () => {
  console.log('Server has been started on port ' + PORT)
})