const { Schema, model } = require('mongoose')

const schema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: true },
  body: { type: String, required: true }
})

module.exports = model('Note', schema)