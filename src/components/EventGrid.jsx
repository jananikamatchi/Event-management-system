import React from "react";
import { useNavigate } from "react-router-dom"; 
import eventUsers from "../db/eventUsers";
import "./EventGrid.css";

const EventGrid = () => {
  const navigate = useNavigate(); 

  const handleBookNow = (id) => {
    navigate(`/booking/${id}`); 
  };

  return (
    <div className="event-grid">
      {eventUsers.map((event) => (
        <div key={event.id} className="event-card">
          <img src={event.image} alt={event.name} className="event-image" />
          <h3>{event.name}</h3>
          <p><strong>Time:</strong> {event.time}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Amount:</strong> {event.amount}</p>
          <button className="book-button" onClick={() => handleBookNow(event.id)}>
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventGrid;
