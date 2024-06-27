import React from 'react';
import BookingForm from './BookingForm'; // Adjust path as necessary

const BookingPage = ({ state, dispatch }) => {
  return (
    <div>
      <BookingForm state={state} dispatch={dispatch} />
    </div>
  );
};

export default BookingPage;
