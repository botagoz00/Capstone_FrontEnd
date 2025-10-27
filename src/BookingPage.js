import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatch}) => {
    return (
        <>
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </>
    );
}

export default BookingPage;