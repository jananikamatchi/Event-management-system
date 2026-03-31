// MyBookings.jsx
import React from 'react';
import './MyBookings.css';

const MyBookings = ({ bookings }) => {
  return (
    <div className="my-bookings">
      <h2>📋 My Bookings</h2>
      {bookings.map((booking, index) => (
        <div key={index} className="booking-card">
          <h3>{booking.eventName}</h3>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Seats:</strong> {booking.selectedSeats.join(', ')}</p>
          <button>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;
