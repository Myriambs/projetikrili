// backend/models/Reservation.js
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const reservationSchema = new mongoose.Schema({
    userId: {   type: ObjectId, ref: 'userSchema', required: true },
    produits: {   type: ObjectId, ref: 'produitsSchema', required: true },
    reservationDate: { type: Date, required: true },
    accepted:{
    type:Boolean,
default:false}
});

module.exports = mongoose.model('Reservation', reservationSchema);