const {Router} = require('express')
const router = Router()

let basket = []

const getPayment = require('../functions/orders')

// /api/basket
router.post( '/', async (req, res) => {
  try {
    basket = req.body

    let basketCount = 0
    let basketItems = []

    basket.forEach( el => {
      basketCount += el.price * el.quantity
      basketItems.push(el.id)
    })

    let basketData = [
      basketCount + '.00 рублей',
      basketItems
    ]

    // const basketResult = getPayment(...basketData)

    return (
      res.status(200).json({ message: 'Ответ сервера положительный', body: basketResult })
    )
  }

  catch(e) {
    const error = e
    res.status(501).json({ message: 'Что-то пошло не так', error: error })
  }
})

module.exports = router