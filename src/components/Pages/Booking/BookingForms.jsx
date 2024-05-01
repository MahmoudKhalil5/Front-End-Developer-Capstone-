import React, { useState, useEffect } from 'react';
import './ConfirmationBookingPage.css';

function BookingForms({ availableTimes, dispatchOnDateChange, submitData }) {

  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  
  const isDateValid = () => date !== '';
  const isTimeValid = () => time !== '';
  const isNumberOfGuestsValid = () => numberOfGuests >= 1 && numberOfGuests <= 10;
  const isOccasionValid = () => occasion !== '';

  const areAllFieldsValid = () => 
       isDateValid() && 
       isTimeValid() && 
       isNumberOfGuestsValid() && 
       isOccasionValid();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        submitData({ date, time, numberOfGuests, occasion });
      };
        // Function to load form data from local storage
  useEffect(() => {
    const storedFormData = localStorage.getItem('bookingFormData');
    if (storedFormData) {
      const { date, time, numberOfGuests, occasion } = JSON.parse(storedFormData);
      setDate(date);
      setTime(time);
      setNumberOfGuests(numberOfGuests);
      setOccasion(occasion);
    }
  }, []);
  
    // Function to save form data to local storage
    useEffect(() => {
      localStorage.setItem(
        'bookingFormData',
        JSON.stringify({ date, time, numberOfGuests, occasion })
      );
    }, [date, time, numberOfGuests, occasion]);

      const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatchOnDateChange(selectedDate);
      };
      const handleTimeChange = (e) =>
        setTime(e.target.value);

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="booking-form">
  {/* Date Input */}
  <div className="form-group">
    <label htmlFor="booking-date">Choose date</label>
    <input
      type="date"
      id="booking-date"
      min={minimumDate}
      value={date}
      required
      onChange={handleDateChange}
      data-testid="date-input"

    />
  </div>

  {/* Time Select */}
  <div className="form-group">
    <label htmlFor="booking-time">Choose time</label>
    <select 
      id="booking-time"
      value={time}
      required
      onChange={handleTimeChange}
      data-testid="time-select"
    >
      {availableTimes.map((timeOption) => (
        <option key={timeOption}>{timeOption}</option>
      ))}
    </select>
  </div>

  {/* Number of Guests Input */}
  <div className="form-group">
    <label htmlFor="guests">Number of guests</label>
    <input
      type="number"
      min={1}
      max={10}
      id="guests"
      value={numberOfGuests}
      required
      onChange={(e) => setNumberOfGuests(parseInt(e.target.value))}
      data-testid="guests-input"
    />
  </div>

  {/* Occasion Select */}
  <div className="form-group">
    <label htmlFor="occasion">Occasion</label>
    <select 
      id="occasion" 
      value={occasion} 
      required
      onChange={e => setOccasion(e.target.value)}
      data-testid="occasion-select"
    >
      {['Birthday', 'Anniversary'].map((occasionOption) => 
        <option key={occasionOption}>{occasionOption}</option>
      )}
    </select>
  </div>

  {/* Submit Button */}
  <button 
    id="submit-button" 
    type="submit" 
    disabled={!areAllFieldsValid()}
    data-testid="submit-button"
  >
    Make your reservation
  </button>
</form>
        </div>
    );
}

export default BookingForms;
