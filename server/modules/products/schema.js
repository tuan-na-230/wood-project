const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `Yêu cầu 'name'!`]
    },
    price: {
        type: Number,
        required: [true, `Yêu cầu 'price'!`]
    },
    image: {
        type: String,
        required: [true, `Yêu cầu 'image'!`]
    },
    description: {
        type: String,
        require: [true, `yêu cầu 'description'`]
    },
    status: {
        type: String,
        require: [true, `yêu cầu 'status'`]
    },
    category: {
        type: String,
        require: [true, `yêu cầu 'category'`]
    }
})

module.exports = schema