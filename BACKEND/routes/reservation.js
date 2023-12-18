// backend/routes/reservation.js
const express = require('express');
const routerReservation = express.Router();
const { validationResult } = require('express-validator');
const { getUserReservation, addReservation, deleteReservation, updateReservation } = require('../controller/reservation');

// partie user 
routerReservation.post('/:userId', addReservation);
//partie admin 
routerReservation.get('/:userId', getUserReservation);
routerReservation.delete('/:userId/:reservationId', deleteReservation);
routerReservation.patch('/:userId/:reservationId', updateReservation);

module.exports = routerReservation;