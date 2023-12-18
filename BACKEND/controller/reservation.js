// backend/controllers/reservation.js

const Reservation = require('../model/Reservation');

exports.getUserReservation = async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.params.userId });
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addReservation = async (req, res) => {
  

    const { userId, produits, reservationDate } = req.body;

    try {
        const newReservation = new Reservation({
            userId,
            produits,
            reservationDate
        });

        await newReservation.save();
        res.json(newReservation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        await Reservation.findOneAndDelete({ _id: req.params.reservationId, userId: req.params.userId });
        res.json({ message: 'Reservation deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const updatedReservation = await Reservation.findOneAndUpdate(
            { _id: req.params.reservationId, userId: req.params.userId },
            req.body,
            { new: true, useFindAndModify: false }
        );

        if (!updatedReservation) {
            return res.status(404).send({ message: 'Reservation not found' });
        }

        res.send(updatedReservation);
    } catch (error) {
        res.status(500).send(error);
    }
};