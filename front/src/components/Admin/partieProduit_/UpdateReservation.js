import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
const UpdateReservation = () => {
  const  {userId} =useParams()
  const  {reservationId} =useParams()
const navigate = useNavigate()
  const [formData, setFormData] = useState({
    accepted: false, // Default value, change it according to your data model
  });
console.log('formData',formData)
const fetchReservationData = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/reservation/${userId}/${reservationId}`);
    const { accepted } = response.data;
    setFormData({
      accepted,
    });
  } catch (error) {
    console.log(error)
    console.error('Error fetching reservation data:', error.message);
  }
};
  useEffect(() => {
    // Fetch the current reservation data and populate the form
    

    fetchReservationData();
  }, [userId, reservationId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`http://localhost:4000/reservation/${userId}/${reservationId}`, formData);

      // Handle successful response, update UI, etc.
      console.log('Reservation updated:', response.data);
    } catch (error) {
      // Handle error, show error message, etc.
      console.error('Error updating reservation:', error.message);
    }
    navigate(`/reservations/${userId}`)
  };

  return (
    <div>
      <h2>Update Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Accepted:
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Reservation</button>
      </form>
    </div>
  );
};

export default UpdateReservation;