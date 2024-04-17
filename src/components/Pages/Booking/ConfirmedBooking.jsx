import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './ConfirmationBookingPage.css';

const ConfirmationBookingPage = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" className="icon"/>
      <h2 className="heading">Your reservation has been confirmed.</h2>
      <p className="description">You will receive an email with all the details.</p>
    </div>
  );
};

export default ConfirmationBookingPage;