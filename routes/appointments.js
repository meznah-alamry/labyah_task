const express = require('express');
const router = express.Router();
const Patient = require('../models/Patients');
const Consultant = require('../models/Consultants');
const Appointment = require('../models/Appointments');
const Transaction = require('../models/Transactions');

// Add New Patient 
router.post("/new-patient", (req, res) => {
    const { name, email, mobile } = req.body;

    Patient.create({ name: name, email: email, mobile: mobile }, (err, newPatient) => {
        res.json({ msg: "Add a new patient", newPatient })
    })
});

// Add New Consultant 
router.post("/new-consultant", (req, res) => {
    const { name, email, mobile } = req.body;

    Consultant.create({ name: name, email: email, mobile: mobile }, (err, newConsultant) => {
        res.json({ msg: "Add a new consultant", newConsultant })
    })
});

// Add New Appointment 
router.post("/new-appointment", (req, res) => {

    const { patientId, consultantId, type, duration, status, appointment_status, createdByUserId, category, sub_category, start_time, end_time, date, day, uniqueID, isExtended, isFollowUp, isRefunded, isCanceled, isTransferred } = req.body;

    Appointment.create({ patient: patientId, consultant: consultantId, type: type, duration: duration, status: status, appointment_status: appointment_status, createdByUserId: createdByUserId, category: category, sub_category: sub_category, start_time: start_time, end_time: end_time, date: date, day: day, uniqueID: uniqueID, isExtended: isExtended, isFollowUp: isFollowUp, isRefunded: isRefunded, isCanceled: isCanceled, isTransferred: isTransferred }, (err, newAppointment) => {
        res.json({ msg: "Add a new appointment", newAppointment })
    })
});

// Add New Transaction 
router.post("/new-transaction", (req, res) => {

    const { patientId, consultantId, appointmentId, total, method, originalPrice, priceAfterDiscount, tax, discount, promocode } = req.body;

    Transaction.create({ patient: patientId, consultant: consultantId, appointment: appointmentId, total: total, method: method, originalPrice: originalPrice, priceAfterDiscount: priceAfterDiscount, tax: tax, discount: discount, promocode: promocode }, (err, newTransaction) => {
        res.json({ msg: "Add a new Transaction", newTransaction })
    })
});

// Display all Appointments
router.get("/appointment", (req, res) => {
    Transaction.find()
        .populate("consultant", "name email mobile")
        .populate("patient", "name email mobile createdAt")
        .populate("appointment", "type duration status appointment_status createdByUserId category sub_category start_time end_time date day uniqueID isExtended isFollowUp isRefunded isCanceled isTransferred")
        .exec()
        .then((appointment) => {
            res.json({ appointment: appointment, count: appointment.length });
        })
        .catch((err) => res.json({ msg: err }));
});

//Data Analytics
router.get('/data-analytics', (req, res) => {
    Appointment.aggregate([

        /* To get the total of all appointments */

        // {
        //   $group: {
        //     _id: null,
        //     allAppointments: { $sum: 1 }
        //   }
        // }

        ///////////////////////

        /*To get the total of specific appointement */

        // {
        //     $match: {
        //         category: "Psychological"
        //     }
        // },
        // { $group: { _id: null, psychologicalAppointments: { $sum: 1 } } }

        //////////////////////

        /*To get the total and average of appointments duation */
        // {
        //     $group: { 
        //         _id: null, 
        //         appointmentsTotalDuration: {$sum: "$duration"},
        //         appointmentsAverageDuration: {$avg: "$duration"}
        //     }
        // }

        ///////////////////////

        /*To get the total of each sub category */
        {
            $group: {
                _id: "$sub_category",
                total: {$sum: 1}
            }
        }
          

      ],
      
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json(result);
        }
      }
      );
});


module.exports = router;