import React from 'react';
import { render, screen } from '@testing-library/react'; // Import screen
import '@testing-library/jest-dom';
import BookingForms from './BookingForms';
import localStorageMock from '../../../../__mocks__/localStorage';

describe('BookingForms component', () => {
  // Mock localStorage before each test
  beforeEach(() => {

    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
  });

  // Clean up after each test
  afterEach(() => {
    localStorageMock.getItem.mockClear(); // Reset the mock
  });

  it('should load form data from local storage when component mounts', () => {
    // Mocked form data stored in local storage
    const mockedFormData = {
      date: '2024-04-15',
      time: '18:00',
      numberOfGuests: 5,
      occasion: 'Anniversary',
    };

    // Mock localStorage.getItem method to return mockedFormData when called with 'bookingFormData' key
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockedFormData));

    // Render the BookingForms component
    render(<BookingForms availableTimes={['17:00', '18:00', '19:00', '20:00']} />);

    // Check if the form inputs are populated with the values from local storage
    expect(screen.getByLabelText('Choose date')).toHaveValue('2024-04-15');
    expect(screen.getByLabelText('Choose time')).toHaveValue('18:00');
    expect(screen.getByLabelText('Number of guests')).toHaveValue(5);
    expect(screen.getByLabelText('Occasion')).toHaveValue('Anniversary');
  });
});
