const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId: ObjectId,
    productId: ObjectId,
    amount: Number,
    isFreeAppUser: Boolean,
    date: String
}, { timestamps: true });

module.exports = mongoose.model('MwOrder', orderSchema) //order