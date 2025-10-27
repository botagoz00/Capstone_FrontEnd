import React, {useState} from "react";

const BookingForm = ({availableTimes, dispatch}) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const   handleSubmit = (e) => {
        e.preventDefault();
        console.log({date, time, guests, occasion});
    }

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({type: 'UPDATE_TIMES', date: newDate});
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="res-date" date={date}>Choose date</label>
                    <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
                <label htmlFor="res-time" time={time}>Choose time</label>
                    <select id="res-time" value={time} onChange={(e) => {setTime(e.target.value)}}>
                        {availableTimes?.map((t, index) => (
                            <option key={index} value={t.times}>
                                {t.times}
                            </option>
                        ))}
                    </select>
                <label htmlFor="guests" guests={guests}>Number of guests</label>
                    <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {setGuests(e.target.value)}}/>
                <label htmlFor="occasion" occasion={occasion}>Occasion</label>
                    <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </>
    );
}

export default BookingForm;