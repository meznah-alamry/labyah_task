const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    consultant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Consultant'
    },
    details: {
        type: String
    },
    category: {
        type: String
    },
    sub_category: {
        type: String
    },
    type: {
        type: String,
        allowNull: true,
        enum: ['instant', 'scheduled','visit']
    },
    start_time: {
        type: Number,
        allowNull: true
    },
    end_time: {
        type: Number,
        allowNull: true
    },
    duration: {
        type: Number
    },
    had_free_appointment: {
        type: Boolean,
        default: false
    },
    createdByUserId:{
        type: String,
    },
    appointment_status: {
        type: String,
        enum: ['is-free', 'un-paid', 'is-paid']
    },
    status: {
        type: String,
        enum: ['pending', 'scheduled', 'on-going', 'completed']
    },
    date:{type:String},

    day:{type:String},

    timeRange:{
        type: Array,
        from:{type: Number},
        to:{type: Number}
    },

    isCanceled: {
        type: Boolean,
        default: false
    },
    isTransferred: {
        type: Boolean,
        default: false
    },
    isExtended: {
        type: Boolean,
        default: false
    },
    isFollowUp: {
        type: Boolean,
        default: false
    },
    isRefunded: {
        type: Boolean,
        default: false
    },
    uniqueID:{
        type:String,
        unique: true
    },
    completed_at:{
        type: Number
    }
},{
    collection:'appointment',
    timestamps: true
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;