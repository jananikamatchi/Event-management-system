import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import eventUsers from '../db/eventUsers';
import './BookingDetails.css'; // Make sure this is imported

const BookingDetails = ({ onConfirm }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const selected = eventUsers.find((item) => item.id.toString() === id);
  const [showDetails, setShowDetails] = useState(false);

  if (!selected) {
    return <p>Booking not found.</p>;
  }

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleConfirmBooking = () => {
    const bookingInfo = {
      name: selected.name,
      type: selected.type,
      city: selected.city,
      price: selected.price,
      image: selected.image,
      date: selected.date,
      time: selected.time,
      location: selected.location,
    };
    onConfirm(bookingInfo); // Send to App.js
    navigate('/confirmation');
  };

  return (
    <div className="booking-details">
      <h2>Booking Details</h2>
      <img src={selected.image} alt={selected.name} className="booking-logo" />

      <p><strong>Name:</strong> {selected.name}</p>
      <p><strong>Type:</strong> {selected.type}</p>
      <p><strong>Availability:</strong> {selected.availability}</p>
      <p><strong>City:</strong> {selected.city}</p>
      <p><strong>Price:</strong> {selected.price}</p>
      <p><strong>Date:</strong> {selected.date}</p>
      <p><strong>Time:</strong> {selected.time}</p>
      <p><strong>Location:</strong> {selected.location}</p>

      <div className="button-container">
        <button onClick={handleShowDetails} className="action-button">
          {showDetails ? 'Hide Organizer Info' : 'Show Organizer Info'}
        </button>

        <button onClick={handleConfirmBooking} className="action-button confirm">
          Confirm Booking
        </button>
      </div>

      {showDetails && (
        <div className="organizer-info">
          <p><strong>Organizer Email:</strong> organizer@example.com</p>
          <p><strong>Contact Number:</strong> +91 98765 43210</p>
          <p><strong>Past Events Handled:</strong> 45 events</p>
          <p><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4.2/5)</p>
        </div>
      )}
    </div>
  );
};

export default BookingDetails;

