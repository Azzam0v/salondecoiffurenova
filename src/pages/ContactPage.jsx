import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm.jsx';
import { businessHours } from '../data/salonData.js';

function ContactPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow dark">Contact</span>
          <h1>Visit Nova Hair Studio</h1>
          <p>Find our address, hours, contact details, and message the salon directly.</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-card">
              <div className="contact-line"><MapPin /> <span>125 Rue Sainte-Catherine, Montreal, QC</span></div>
              <div className="contact-line"><Phone /> <span>(514) 555-0198</span></div>
              <div className="contact-line"><Mail /> <span>hello@novahairstudio.com</span></div>
              <hr />
              <h2>Business hours</h2>
              {businessHours.map(([day, hours]) => (
                <div className="hours-row" key={day}>
                  <span>{day}</span>
                  <strong>{hours}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="map-placeholder">
              <MapPin size={36} />
              <strong>Google Maps Placeholder</strong>
              <span>125 Rue Sainte-Catherine, Montreal</span>
            </div>
          </div>
          <div className="col-lg-7 mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
