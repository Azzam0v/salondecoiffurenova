import { useMemo, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, stylists } from '../data/salonData.js';
import { formatDateLabel, formatDateValue, generateAppointmentSlots, getNextWeekdays } from '../utils/bookingSlots.js';

const initialBooking = {
  serviceId: '',
  stylistId: '',
  date: '',
  time: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const steps = ['Service', 'Stylist', 'Date', 'Time', 'Info', 'Confirm'];

function BookingWizard() {
  const [step, setStep] = useState(0);
  const [booking, setBooking] = useState(initialBooking);
  const [errors, setErrors] = useState({});
  const [confirmed, setConfirmed] = useState(false);

  const dates = useMemo(() => getNextWeekdays(10), []);
  const slots = useMemo(() => generateAppointmentSlots(), []);
  const selectedService = services.find((service) => service.id === booking.serviceId);
  const selectedStylist = stylists.find((stylist) => stylist.id === booking.stylistId);

  const updateBooking = (field, value) => {
    setBooking((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: '' }));
  };

  const validateStep = () => {
    const nextErrors = {};

    if (step === 0 && !booking.serviceId) nextErrors.serviceId = 'Choose a service.';
    if (step === 1 && !booking.stylistId) nextErrors.stylistId = 'Choose a stylist.';
    if (step === 2 && !booking.date) nextErrors.date = 'Choose a date.';
    if (step === 3 && !booking.time) nextErrors.time = 'Choose a time.';
    if (step === 4) {
      if (!booking.firstName.trim()) nextErrors.firstName = 'First name is required.';
      if (!booking.lastName.trim()) nextErrors.lastName = 'Last name is required.';
      if (!/^\S+@\S+\.\S+$/.test(booking.email)) nextErrors.email = 'Enter a valid email.';
      if (booking.phone.trim().length < 7) nextErrors.phone = 'Enter a valid phone number.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep()) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const goBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const confirmBooking = () => {
    setConfirmed(true);
  };

  const renderStep = () => {
    if (confirmed) {
      return (
        <div className="confirmation-panel text-center">
          <CheckCircle2 size={56} />
          <h2>Appointment Confirmed</h2>
          <p>Your Nova Hair Studio appointment has been reserved. A confirmation email is on the way.</p>
          <AppointmentSummary service={selectedService} stylist={selectedStylist} booking={booking} />
        </div>
      );
    }

    if (step === 0) {
      return (
        <SelectionGrid error={errors.serviceId}>
          {services.map((service) => (
            <button
              className={`choice-card ${booking.serviceId === service.id ? 'selected' : ''}`}
              key={service.id}
              onClick={() => updateBooking('serviceId', service.id)}
              type="button"
            >
              <span>{service.category}</span>
              <strong>{service.name}</strong>
              <small>{service.duration}</small>
              <b>${service.price}</b>
            </button>
          ))}
        </SelectionGrid>
      );
    }

    if (step === 1) {
      return (
        <SelectionGrid error={errors.stylistId}>
          {stylists.map((stylist) => (
            <button
              className={`choice-card stylist-choice ${booking.stylistId === stylist.id ? 'selected' : ''}`}
              key={stylist.id}
              onClick={() => updateBooking('stylistId', stylist.id)}
              type="button"
            >
              <img src={stylist.photo} alt="" />
              <strong>{stylist.name}</strong>
              <small>{stylist.title}</small>
              <span>{stylist.rating} rating</span>
            </button>
          ))}
        </SelectionGrid>
      );
    }

    if (step === 2) {
      return (
        <SelectionGrid error={errors.date}>
          {dates.map((date) => {
            const value = formatDateValue(date);
            return (
              <button
                className={`date-card ${booking.date === value ? 'selected' : ''}`}
                key={value}
                onClick={() => updateBooking('date', value)}
                type="button"
              >
                {formatDateLabel(date)}
              </button>
            );
          })}
        </SelectionGrid>
      );
    }

    if (step === 3) {
      return (
        <SelectionGrid error={errors.time}>
          {slots.map((slot) => (
            <button
              className={`time-slot ${booking.time === slot.label ? 'selected' : ''} ${!slot.available ? 'unavailable' : ''}`}
              disabled={!slot.available}
              key={slot.label}
              onClick={() => updateBooking('time', slot.label)}
              type="button"
            >
              {slot.label}
              <small>{slot.available ? 'Available' : 'Unavailable'}</small>
            </button>
          ))}
        </SelectionGrid>
      );
    }

    if (step === 4) {
      return (
        <div className="booking-form-grid">
          {[
            ['firstName', 'First Name'],
            ['lastName', 'Last Name'],
            ['email', 'Email'],
            ['phone', 'Phone Number'],
          ].map(([field, label]) => (
            <label key={field}>
              {label}
              <input
                className={`form-control ${errors[field] ? 'is-invalid' : ''}`}
                type={field === 'email' ? 'email' : 'text'}
                value={booking[field]}
                onChange={(event) => updateBooking(field, event.target.value)}
              />
              {errors[field] && <span className="invalid-feedback">{errors[field]}</span>}
            </label>
          ))}
        </div>
      );
    }

    return <AppointmentSummary service={selectedService} stylist={selectedStylist} booking={booking} />;
  };

  return (
    <section className="booking-wizard">
      <div className="wizard-steps" aria-label="Booking progress">
        {steps.map((label, index) => (
          <div className={`wizard-step ${index === step ? 'active' : ''} ${index < step ? 'done' : ''}`} key={label}>
            <span>{index + 1}</span>
            <small>{label}</small>
          </div>
        ))}
      </div>

      <div className="wizard-panel">
        {!confirmed && (
          <div className="section-heading compact">
            <span className="eyebrow dark">Step {step + 1}</span>
            <h1>{steps[step]}</h1>
          </div>
        )}
        {renderStep()}
        {!confirmed && (
          <div className="wizard-actions">
            <button className="btn btn-outline-dark d-inline-flex align-items-center gap-2" disabled={step === 0} onClick={goBack} type="button">
              <ChevronLeft size={17} />
              Back
            </button>
            {step < steps.length - 1 ? (
              <button className="btn btn-gold d-inline-flex align-items-center gap-2" onClick={goNext} type="button">
                Continue
                <ChevronRight size={17} />
              </button>
            ) : (
              <button className="btn btn-gold" onClick={confirmBooking} type="button">
                Confirm Appointment
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function SelectionGrid({ children, error }) {
  return (
    <>
      <div className="selection-grid">{children}</div>
      {error && <div className="form-error">{error}</div>}
    </>
  );
}

function AppointmentSummary({ service, stylist, booking }) {
  return (
    <div className="appointment-summary">
      <div>
        <span>Service</span>
        <strong>{service?.name}</strong>
      </div>
      <div>
        <span>Stylist</span>
        <strong>{stylist?.name}</strong>
      </div>
      <div>
        <span>Date</span>
        <strong>{booking.date}</strong>
      </div>
      <div>
        <span>Time</span>
        <strong>{booking.time}</strong>
      </div>
      <div>
        <span>Total price</span>
        <strong>${service?.price}</strong>
      </div>
    </div>
  );
}

export default BookingWizard;
