import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm'; // Adjust import path as per your project structure
import { fetchAPI, submitAPI } from '../../Api';

// Mock API functions and useNavigate hook
jest.mock('../../Api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(() => Promise.resolve(true)) // Mock successful submission
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

describe('BookingForm Component', () => {

  test('Shows initial date input with empty value', () => {
    render(<BookingForm state={{ resDate: '', resTime: '', guests: 1, occasion: '', availableTimes: [] }} dispatch={() => {}} />);
    const dateInput = screen.getByLabelText('Choose date:');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue('');
  });



  test('Form submission with invalid data', async () => {
    const dispatchMock = jest.fn();
    render(<BookingForm state={{ resDate: '', resTime: '', guests: 0, occasion: '', availableTimes: [] }} dispatch={dispatchMock} />);
    
    const submitButton = screen.getByText('Make Your reservation');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(submitAPI).not.toHaveBeenCalled();
      expect(dispatchMock).not.toHaveBeenCalledWith({ type: 'UPDATE_TIMES', payload: expect.any(Array) });
      expect(screen.getByText('Please select a date.')).toBeInTheDocument(); // Example error message check
    });
  });
});
