const { Schema, model } = require('mongoose')

const schema = new Schema({
  image: { type: String, required: true },
  date: { type: String, required: false }
})

module.exports = model('Gallery', schema)