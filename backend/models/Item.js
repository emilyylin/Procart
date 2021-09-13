const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
const ItemSchema = new Schema ({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    cart_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Item = mongoose.model("items", ItemSchema);