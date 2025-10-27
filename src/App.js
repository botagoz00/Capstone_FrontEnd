import './App.css';
import Homepage from './Homepage';
import {Routes, Route} from 'react-router-dom';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import {initializeTimes, updateTimes} from './BookingForm';
import React, {useReducer} from 'react';
import { submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
  submitAPI(formData);
  if (submitAPI(formData) === true)
    navigate('/bookings');
  }

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
          <Route path="/bookings" element={<ConfirmedBooking/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;