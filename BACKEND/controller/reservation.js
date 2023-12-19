// backend/controllers/reservation.js

const Reservation = require('../model/Reservation');


//http://localhost:4000/reservation/:userId/
exports.getUserReservation = async (req, res) => {
    try {
        const reservations = await Reservation.find({ userId: req.params.userId });
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//http://localhost:4000/reservation/:userId/

exports.addReservation = async (req, res) => {
  

    const { userId, produits, reservationDate } = req.body;

    try {
        const newReservation = new Reservation({
            userId,
            produits,
            reservationDate,
            accepted:false
        });

        await newReservation.save();
        res.json(newReservation);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//http://localhost:4000/reservation/:userId/:reservationId

exports.deleteReservation = async (req, res) => {
    try {
        await Reservation.findOneAndDelete({ _id: req.params.reservationId, userId: req.params.userId });
        res.json({ message: 'Reservation deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
//http://localhost:4000/reservation/:userId/:reservationId

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

exports.getReservationById = async (req, res) => {
    try {
      const { userId, reservationId } = req.params;
      const reservation = await Reservation.findOne({ _id: reservationId, userId });
  
      if (!reservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
  
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  