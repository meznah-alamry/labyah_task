const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    profile_image: { type: String },
    name: { type: String },
    email: { type: String },
    countryCode:{type:String},
    password: { type: String },
    mobile: { type: String },
    city: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    age: { type: Number },
    martial_status: { type: String },
    player: { type: String },
    deviceInfo:{ type:'Object' },
    had_free_appointment: { type: Boolean, default: false },
    iban: { type: String },
    code: { type: Number, allowNull: true },
    token: { type: String, allowNull: true },
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
}, {
    collection: 'patient',
    timestamps: true
});

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;