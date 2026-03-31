import React, { useState } from 'react';
import './App.css';
import bgImage from './images/bg-user.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import UserRequestForm from './components/UserRequestForm';
import EventGrid from './components/EventGrid';
import BookingDetails from './components/BookingDetails';
import BookingConfirmation from './components/BookingConfirmation';
import MyBookings from './components/MyBookings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [bookingData, setBookingData] = useState(null); // for confirmation page
  const [bookings, setBookings] = useState([]); // for MyBookings page

  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  const handleBookingConfirm = (data) => {
    setBookingData(data);
    setBookings(prev => [...prev, data]); // Add to bookings history
  };

  const backgroundStyle = {
    background: `url(${bgImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle} className="app-background">
      <Router>
        <Header role="User" />
        <Routes>
          {!isLoggedIn ? (
            <Route path="*" element={<LoginPage onLoginSuccess={handleLogin} />} />
          ) : !submittedData ? (
            <Route path="*" element={<UserRequestForm onSubmit={handleFormSubmit} />} />
          ) : (
            <>
              <Route path="/" element={<EventGrid />} />
              <Route path="/booking/:id" element={
                <BookingDetails onConfirm={handleBookingConfirm} />
              } />
              <Route path="/confirmation" element={
                <BookingConfirmation bookingData={bookingData} />
              } />
              <Route path="/my-bookings" element={<MyBookings bookings={bookings} />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;   
