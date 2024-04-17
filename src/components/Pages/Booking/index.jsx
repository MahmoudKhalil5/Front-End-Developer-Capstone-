import React, { useReducer } from 'react';
import BookingForms from './BookingForms';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../../../api/fakeAPI';

const pages = new Map();
pages.set('/confirmed-booking', { path: '/confirmed-booking' }); // Mapping for the confirmation booking page

export const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length !== 0 ? response : availableTimes; 
};

export const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Booking =() => {
    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes, [], initializeTimes);
      const navigate = useNavigate();

const submitData = formData => {
    const response = submitAPI(formData);
    if (response) navigate(pages.get('/confirmed-booking').path);
  };

    return (
        <div role="main" aria-label="Booking Page">
            <BookingForms availableTimes={availableTimes} dispatchOnDateChange={dispatchOnDateChange} submitData={submitData} />
        </div>
    );
}

export default Booking;
