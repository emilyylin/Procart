const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
const CartSchema = new Schema ({
    id: {
        type: String,
        required: true
    },
    store_name: {
        type: String,
        required: true
    },
    num_items: {
        type: Number,
        required: true
    },
    owner_email: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

});
module.exports = Cart = mongoose.model("carts", CartSchema);