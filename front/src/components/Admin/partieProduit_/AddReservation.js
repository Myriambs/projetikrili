import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { addingReservation } from '../../../api/admin/reservation';
const AddReservation = () => {

const {userId}=useParams()
const {produits}=useParams()
console.log('produitId',produits,'userId',userId)
const [formData, setFormData] = useState({
    userId,
    produits,
    reservationDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/reservation', formData);

      // Handle successful response, update UI, etc.
      await console.log('New reservation added:', response.data);
      await alert('you did it')
    } catch (error) {
      // Handle error, show error message, etc.
      console.log(error)
      console.error('Error adding reservation:', error.message);
    }
  };
console.log('reservation',formData)
  return (
    <div>
    <h2>Add Reservation</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Reservation Date:
        <input
          type="date"
          name="reservationDate"
          value={formData.reservationDate}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Reservation</button>
    </form>
  </div>
  );
};

export default AddReservation;
