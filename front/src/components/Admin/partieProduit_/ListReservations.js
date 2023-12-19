import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
const ListReservations = () => {
  const [reservations, setReservations] = useState();
const {userId} = useParams()
  const fetchReservations = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/reservation/${userId}`);
      console.log('response',response)
       setReservations(response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error.message);
    }
  };
  useEffect(() => {

    fetchReservations();
  }, [userId]);
console.log('reservations',reservations)
  return (
    <div>
      <h2>Reservations</h2>
      <ul>
       {reservations.map((reservation) => (
          <li key={reservation._id}>
            {reservation.reservationDate} - {reservation.accepted ? 'Accepted' : 'Pending'}
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default ListReservations;
