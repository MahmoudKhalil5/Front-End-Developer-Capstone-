import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForms from './BookingForms';
import { initializeTimes, updateTimes } from './index';
import '@testing-library/jest-dom';

// Mock the fetchAPI function to return a non-empty array of available booking times
jest.mock('../../../api/fakeAPI', () => ({
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']),
}));

describe('initializeTimes function', () => {
  test('should return correct array of times', () => {
    // Call the initializeTimes function
    const times = initializeTimes([]);

    // Define the expected array of times
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    // Expect the result to equal the expected array of times
    expect(times).toEqual(expectedTimes);
  });
});

// Test suite for the updateTimes function
describe('updateTimes function', () => {
  test('should return the same array of available times regardless of the selected date', () => {
    const selectedDate = new Date('2024-04-22'); // Provide a specific selected date

    const currentAvailableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    const updatedTimes = updateTimes(selectedDate, currentAvailableTimes);

    expect(updatedTimes).toEqual(currentAvailableTimes);
  });
});

// Test suite for BookingForms component
describe('BookingForms Component', () => {
  let mockDispatchOnDateChange;

  beforeEach(() => {
    mockDispatchOnDateChange = jest.fn();
    render(<BookingForms availableTimes={['10:00', '11:00']} dispatchOnDateChange={mockDispatchOnDateChange} />);
  });

  test('renders all form inputs with correct attributes', () => {
    const dateInput = screen.getByTestId('date-input');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('required');

    const timeSelect = screen.getByTestId('time-select');
    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('required');

    const guestsInput = screen.getByTestId('guests-input');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    const occasionSelect = screen.getByTestId('occasion-select');
    expect(occasionSelect).toHaveAttribute('required');
  });

  test('enables submit button when all fields are filled', () => {
    const dateInput = screen.getByTestId('date-input');
    const timeSelect = screen.getByTestId('time-select');
    const guestsInput = screen.getByTestId('guests-input');
    const occasionSelect = screen.getByTestId('occasion-select');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(dateInput, { target: { value: '2024-04-22' } });
    fireEvent.change(timeSelect, { target: { value: '10:00' } });
    fireEvent.change(guestsInput, { target: { value: '5' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    expect(submitButton).not.toBeDisabled();
  });
});

describe('BookingForms Component - Invalid States', () => {
  beforeEach(() => {
    render(<BookingForms availableTimes={['10:00', '11:00']} dispatchOnDateChange={jest.fn()} />);
  });

  test('submit button should be disabled when required fields are missing', () => {
    const dateInput = screen.getByTestId('date-input');
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.change(dateInput, { target: { value: '' } });
    expect(submitButton).toBeDisabled();
  });

  test('submit button should be disabled with invalid number of guests', () => {
    const guestsInput = screen.getByTestId('guests-input');
    fireEvent.change(guestsInput, { target: { value: '0' } }); // Invalid
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });

  test('submit button should be disabled with invalid occasion', () => {
    const occasionSelect = screen.getByTestId('occasion-select');
    fireEvent.change(occasionSelect, { target: { value: '' } }); // Invalid
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeDisabled();
  });
});