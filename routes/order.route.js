const {Router} = require('express')
const router = Router()

// /api/order/
router.post( '/', async (req, res, e) => {
  try {
    let orderList = req.body
    console.log('orderList:', orderList)

    return res.status(200).json({message: 'Ответ сервера положительный', body: orderList})
  }  catch(e) {
    console.log(e)
    res.status(501).json({ message: 'Ошибка на сервере при post запросе' })
  }
})

module.exports = router