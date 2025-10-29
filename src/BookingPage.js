import BookingForm from "./BookingForm"

const BookingPage = ({availableTimes, dispatch, submitForm}) => {
    return (
        <>
            <section className="booking-page">
                <h2>Booking Page</h2>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
            </section>
        </>
    );
}

export default BookingPage;