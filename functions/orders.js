const config = require('config')
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk')

const qiwiApi = new QiwiBillPaymentsAPI(config.get('PUBLIC_KEY'))

const secretKey = config.get('SECRET_KEY')
const publicKey = config.get('PUBLIC_KEY')

function getPayment(price, basketList) {
  let orderStatus

  const personal = qiwiApi.generateId()

  const params = {
    amount: price,
    currency: 'RUB',
    comment: basketList,
    expirationDateTime: qiwiApi.getLifetimeByDay(1),
    email: 'smolena@mail.ru',
    account : personal,
    successUrl: config.get('SERVER_URL')
  }

  qiwiApi.createBill( personal, params ).then( data => {
    console.log(data)
  })
}

module.exports = getPayment