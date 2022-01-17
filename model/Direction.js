const { Schema, model } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true }
})

module.exports = model('Direction', schema)