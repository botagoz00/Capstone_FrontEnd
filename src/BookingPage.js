import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatch, submitForm}) => {
    return (
        <>
            <h1>Booking Page</h1>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
        </>
    );
}

export default BookingPage;