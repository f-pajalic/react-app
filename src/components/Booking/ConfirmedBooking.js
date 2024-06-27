import React from 'react';
import './ConfirmedBooking.css'; // Import the CSS file for ConfirmedBooking styling

const ConfirmedBooking = () => {
    return (
        <div className="confirmed-booking-background">
            <div className="confirmed-booking-container">
                <h1 className="confirmed-booking-title">Booking Confirmed!</h1>
                <p className="confirmed-booking-message">Your booking has been successfully confirmed.</p>
            </div>
        </div>
    );
};

export default ConfirmedBooking;
