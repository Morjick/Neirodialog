const { Schema, model } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  desc: { type: String, required: true },
  curator: { type: String, required: true },
  slogan: { type: String, required: false },
  resume: { type: String, required: true },
  body: { type: String, required: true }
})

module.exports = model('Course', schema)