const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create Schema
const UserCartSchema = new Schema ({
    email: {
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
module.exports = UserCart = mongoose.model("usercarts", UserCartSchema);