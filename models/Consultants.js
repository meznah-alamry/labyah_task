const mongoose = require('mongoose')

const ConsultantSchema = new mongoose.Schema({

    profile_image: { type: String },
    name: { type: String },
    email: { type: String},
    password: { type: String },
    mobile: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    age: { type: Number },
    degree: { type: String },
    speciality: { type: String },
    sub_speciality: { type: Object },
    cost: { type: Number },
    rating: { type: Number },
    license: { type: String },
    certificate: { type: String },
    about_me: { type: String },
    status: { type: String, enum: ['green', 'orange', 'grey'], default: 'green' },
    player: { type: String },
    deviceToken: { type:String},
    token: { type:String},
    experience: { type: Number },
    is_account_setup_finished: { type: Boolean, default: false },
    is_available_for_instant: { type: Boolean, default: true },
    is_account_hidden: { type: Boolean, defaultsTo: false },
    code: { type: String, allowNull: true },
    verified: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    instantAppointments:{ type: Boolean, default: false },
    apple_id:{type: String, allowNull: true},
    type: {type: String, allowNull: true},
    sub_type: {type: String, allowNull: true},
    city: {type: String, allowNull: true},
    homeVisit:{ type: Boolean, default: false },
},{
    collection:'consultant',
    timestamps: true
});

const Consultant = mongoose.model("Consultant", ConsultantSchema);
module.exports = Consultant;