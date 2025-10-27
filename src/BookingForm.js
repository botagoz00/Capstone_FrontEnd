import React, {useState} from "react";
import {fetchAPI} from './api';

const fetchData = (date) => {
  return(fetchAPI(date))
}

const initializeTimes = () => {
    const date = new Date();
    return (fetchData(date));
};

 const   updateTimes = (availableTimes, action) => {
    if (action.type === 'UPDATE_TIMES') {
        const date = new Date(action.date);
        return (fetchData(date));
    }
    return availableTimes;
  }

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const   handleSubmit = (e) => {
        e.preventDefault();
        console.log({date, time, guests, occasion});
        const formData = {
            date: date,
            time: time,
            guests: guests,
            occasion: occasion
        };
        submitForm(formData);
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({type: 'UPDATE_TIMES', date: newDate});
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={(e) => {setTime(e.target.value)}}>
                        {availableTimes?.map((t, index) => (
                            <option key={index} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
                <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                <input type="submit" value="Make Your reservation" onSubmit={handleSubmit}/>
            </form>
        </>
    );
}

export default BookingForm;
export {initializeTimes, updateTimes};