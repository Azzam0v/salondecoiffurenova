import BookingWizard from '../components/BookingWizard.jsx';

function BookingPage() {
  return (
    <section className="page-section booking-page">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow dark">Book online</span>
          <h1>Reserve your appointment</h1>
          <p>Select your service, stylist, weekday date, time slot, and contact information.</p>
        </div>
        <BookingWizard />
      </div>
    </section>
  );
}

export default BookingPage;
