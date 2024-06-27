import React, { useEffect, useCallback, useState } from 'react';
import { fetchAPI, submitAPI } from '../../Api';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = ({ state, dispatch }) => {
    const { resDate, resTime, guests, occasion, availableTimes } = state;
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({
        resDate: false,
        resTime: false,
        guests: false,
        occasion: false
    });

    const fetchAvailableTimes = useCallback(async () => {
        try {
            if (resDate) {
                const times = await fetchAPI(new Date(resDate));
                dispatch({ type: 'UPDATE_TIMES', payload: times });
            }
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    }, [resDate, dispatch]);

    useEffect(() => {
        fetchAvailableTimes();
    }, [fetchAvailableTimes]);

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        dispatch({ type: 'SET_RES_DATE', payload: selectedDate });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = { resDate, resTime, guests, occasion };

        const dateValid = validateResDate();
        const timeValid = validateResTime();
        const guestsValid = validateGuests();
        const occasionValid = validateOccasion();

        setFormErrors({
            resDate: !dateValid,
            resTime: !timeValid,
            guests: !guestsValid,
            occasion: !occasionValid
        });

        if (dateValid && timeValid && guestsValid && occasionValid) {
            try {
                const success = await submitAPI(formData);
                if (success) {
                    navigate('/confirmed');
                } else {
                    console.error('Booking failed');
                }
            } catch (error) {
                console.error('Error submitting booking:', error);
            }
        }
    };

    const validateGuests = () => guests > 0;
    const validateResDate = () => resDate.trim() !== '';
    const validateResTime = () => resTime.trim() !== '';
    const validateOccasion = () => occasion.trim() !== '';

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date:</label>
            <input
                type="date"
                id="res-date"
                name="res-date"
                value={resDate}
                onChange={handleDateChange}
                required
                className={formErrors.resDate ? 'error' : ''}
            />
            {formErrors.resDate && <span className="error-text">Please select a date.</span>}

            <label htmlFor="res-time">Choose time:</label>
            <select
                id="res-time"
                name="res-time"
                value={resTime}
                onChange={(e) => dispatch({ type: 'SET_RES_TIME', payload: e.target.value })}
                required
                className={formErrors.resTime ? 'error' : ''}
            >
                <option value="">Select time</option>
                {availableTimes.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            {formErrors.resTime && <span className="error-text">Please select a time.</span>}

            <label htmlFor="guests">Number of guests:</label>
            <input
                type="number"
                id="guests"
                name="guests"
                value={guests}
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => dispatch({ type: 'SET_GUESTS', payload: e.target.value })}
                required
                className={formErrors.guests ? 'error' : ''}
            />
            {formErrors.guests && <span className="error-text">Please enter number of guests (minimum 1).</span>}

            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={(e) => dispatch({ type: 'SET_OCCASION', payload: e.target.value })}
                required
                className={formErrors.occasion ? 'error' : ''}
            >
                <option value="">Select occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            {formErrors.occasion && <span className="error-text">Please select an occasion.</span>}

            <input
                type="submit"
                value="Make Your reservation"
                className="submit-button"
                aria-label="On Click"
            />
        </form>
    );
};

export default BookingForm;
