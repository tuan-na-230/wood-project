const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    address: {
        type: String,
        required: [true, `Yêu cầu 'address'!`]
    },
    phoneNumber: {
        type: Number,
        required: [true, `Yêu cầu 'phoneNumber'!`]
    },
    email: {
        type: String,
        require: [true, `yêu cầu 'email'`]
    },
    content: {
        type: String,
        require: [true, `yêu cầu 'content'`]
    },
})

module.exports = schema