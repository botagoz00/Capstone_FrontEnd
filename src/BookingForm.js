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

const validateDate = (date) => {
    if (!date) 
         return "Please choose a date.";
    const selectedDate = new Date(date);
    const today = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) 
        return "Date cannot be in the past.";
    return "";
};

const validateTime = (time) => {
    if (!time) 
        return "Please select a time.";
    return "";
};

const validateGuests = (guests) => {
    if (guests < 1 || guests > 20)
        return "Guests must be between 1 and 20.";
    if (!guests) 
        return "Please enter number of guests.";
    return "";
};

const validateOccasion = (occasion) => {
    if (occasion === "Choose occasion") 
        return "Please choose an occasion.";
    return "";
};

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("Choose occasion");
    const [errors, setErrors] = useState({});

    const   handleSubmit = (e) => {
        e.preventDefault();
        const   newErrors = {};
        const dateError = validateDate(date);
        if (dateError) 
            newErrors.date = dateError;
        const timeError = validateTime(time);
        if (timeError) 
            newErrors.time = timeError;
        const guestsError = validateGuests(guests);
        if (guestsError) 
            newErrors.guests = guestsError;
        const occasionError = validateOccasion(occasion);
        if (occasionError) 
            newErrors.occasion = occasionError;
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            const formData = { date, time, guests, occasion };
            submitForm(formData);
        }
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
                    <input type="date" id="res-date" value={date} onChange={handleDateChange} min={new Date().toISOString().split("T")[0]}/>
                    {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}
                <label htmlFor="res-time">Choose time</label>
                    <select id="res-time" onChange={(e) => {setTime(e.target.value)}}>
                        {availableTimes?.map((t, index) => (
                            <option key={index} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                    {errors.time && <p style={{ color: "red" }}>{errors.time}</p>}
                <label htmlFor="guests">Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="20" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
                    {errors.guests && <p style={{ color: "red" }}>{errors.guests}</p>}
                <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                        <option>Choose occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {errors.occasion && <p style={{ color: "red" }}>{errors.occasion}</p>}
                <button type="submit" aria-label="On Click">Make Your reservation</button>
            </form>
        </>
    );
}

export default BookingForm;
export {initializeTimes, updateTimes, validateDate, validateTime, validateGuests, validateOccasion};