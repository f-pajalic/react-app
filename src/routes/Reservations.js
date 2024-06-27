import React from 'react';
import './Reservations.css';
import BookingPage from '../components/Booking/BookingPage';

const Reservations = ({ state, dispatch }) => {
    return (
        <div className="reservations" aria-label="Reservation Form">
            <div className="reservations-container">
                <div className="text">
                    <h2>Experience the perfect balance of tradition and luxury.</h2>
                    <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                    <p>Book a table with us to share in this experience.</p>
                </div>
                <div className="form">
                    <h1>Reserve a Table</h1>
                    <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                    <BookingPage state={state} dispatch={dispatch} />
                </div>
            </div>
        </div>
    );
};

export default Reservations;
