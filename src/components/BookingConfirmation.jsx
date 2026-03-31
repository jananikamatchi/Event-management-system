import React, { useRef } from 'react';
import './BookingConfirmation.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const BookingConfirmation = ({ bookingData }) => {
  const printRef = useRef();

  if (!bookingData) return <p>No booking data available.</p>;

  const handleDownload = () => {
    const input = printRef.current;
   html2canvas(input, {
  scale: 2,
  useCORS: true,
  allowTaint: true,
  logging: true
}).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Ticket_${bookingData.userName || 'user'}.pdf`);
    });
  };

  return (
    <div className="confirmation-container">
      <h2>🎉 Booking Confirmed!</h2>
      <p>Thank you, {bookingData.userName || 'User'}!</p>

      <div className="confirmation-box" ref={printRef}>
        {/* Event Banner */}
        <img
          src={bookingData.image || '/images/default-banner.jpg'}
          alt={bookingData.name || 'Event Banner'}
          className="booking-logo"
        />
        <img
  src="/images/default-banner.jpg"
  alt="Event Banner"
  className="booking-logo pdf-only"
/>

        <h3>{bookingData.name || 'Event Name'}</h3>
        <p><strong>Booking ID:</strong> #{Math.floor(Math.random() * 1000000)}</p>
        <p><strong>Date:</strong> {bookingData.date}</p>
        <p><strong>Time:</strong> {bookingData.time || '6:00 PM'}</p>
        <p><strong>Venue:</strong> {bookingData.location}</p>
        <p><strong>City:</strong> {bookingData.city || 'Chennai'}</p>

        <p><strong>Seats Booked:</strong> {bookingData.selectedSeats?.join(', ') || 'N/A'}</p>
        <p><strong>User Name:</strong> {bookingData.userName}</p>
        <p><strong>User Email:</strong> {bookingData.email || 'example@email.com'}</p>
        <p><strong>Payment Status:</strong> Paid</p>
        <p><strong>Amount:</strong> ₹{bookingData.amount || '999'}</p>

        <p><strong>Organizer:</strong> {bookingData.organizer || 'ABC Events Pvt Ltd'}</p>
        <p><strong>Contact:</strong> +91 98765 43210</p>

        <img src="/images/qr-sample.png" alt="QR Code" className="qr-code" />
      </div>

      <button className="btn" onClick={handleDownload}>Download Ticket</button>
    </div>
  );
};

export default BookingConfirmation;
