const mongoose = require('mongoose')

const TransactionsSchema = new mongoose.Schema({

    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    consultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    method: {
        type: String
    },
    cost: {
        type: Number
    },
    discount: {
        type: Number, default: 0
    },
    total: {
        type: Number
    },
    is_paid: {
        type: Boolean,
        default: false
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment'
    },
    paymentType:{
        type:String
    },
    promocode:{
        type:String
    },
    originalPrice:{
        type: Number
    },
    priceAfterDiscount:{
        type: Number
    },
    tax:{
        type: String
    },

},{
    collection:'payment',
    timestamps: true
});

const Transaction = mongoose.model("Transactions", TransactionsSchema);
module.exports = Transaction;