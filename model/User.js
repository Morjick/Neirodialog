const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: false, unique: false },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  typeUser: { type: String, required: true }
})

module.exports = model('User', schema)