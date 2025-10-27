import './App.css';
import Homepage from './Homepage';
import {Routes, Route} from 'react-router-dom';
import BookingPage from './BookingPage';
import React, {useReducer} from 'react';

const initializeTimes = () => {
  return[
      {times: "17:00"},
      {times: "18:00"},
      {times: "19:00"},
      {times: "20:00"},
      {times: "21:00"},
      {times: "22:00"},
  ];
  };

  const   updateTimes = (availableTimes, action) => {
    console.log('Date', action.date);
    return (initializeTimes());
  }

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, null, initializeTimes);

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
export {initializeTimes, updateTimes};
