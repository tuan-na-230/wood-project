const mongoose = require('mongoose')
const schema = require("./scheme")

const MODEL_NAME = 'contact'
const COLLECTION_NAME = 'contact' 

const model = mongoose.model(
    MODEL_NAME,
    schema,
    COLLECTION_NAME
)

module.exports = model