const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, `Yêu cầu 'type'!`],
    unique: true
  },
  description: String
})

module.exports = schema