import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  const navigate = useNavigate(); // import and call hook

  const handleBookNow = () => {
    navigate(`/booking/${event.id}`); // navigate to booking route
  };

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <button onClick={handleBookNow}>Book Now</button> {/* this is required */}
    </div>
  );
}

export default EventCard;
