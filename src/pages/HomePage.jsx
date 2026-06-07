import { Link } from 'react-router-dom';
import { Award, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import StylistCard from '../components/StylistCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import { services, stylists, testimonials } from '../data/salonData.js';

function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow dark">Featured services</span>
            <h2>Salon essentials, elevated</h2>
          </div>
          <div className="row g-4">
            {services.slice(0, 3).map((service) => (
              <div className="col-md-6 col-lg-4" key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow dark">Meet our stylists</span>
            <h2>Experts for every hair goal</h2>
          </div>
          <div className="row g-4">
            {stylists.slice(0, 3).map((stylist) => (
              <div className="col-md-6 col-xl-4" key={stylist.id}>
                <StylistCard stylist={stylist} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5">
              <div className="section-heading text-start">
                <span className="eyebrow dark">Why choose us</span>
                <h2>Designed around clarity, comfort, and craft</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="feature-grid">
                {[
                  [Clock, 'Fast booking', 'Reserve a service, stylist, date, and time with a guided flow.'],
                  [Award, 'Premium expertise', 'Specialists for color, barbering, treatments, and bridal styling.'],
                  [ShieldCheck, 'Clear pricing', 'Service duration and price are visible before confirmation.'],
                  [HeartHandshake, 'Personal care', 'Every appointment includes consultation and styling guidance.'],
                ].map(([Icon, title, copy]) => (
                  <div className="feature-card" key={title}>
                    <Icon size={24} />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow dark">Testimonials</span>
            <h2>Clients leave confident</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div className="col-md-4" key={testimonial.name}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div>
              <span className="eyebrow">Ready when you are</span>
              <h2>Book your next Nova appointment today.</h2>
            </div>
            <Link className="btn btn-light btn-lg" to="/booking">Book Appointment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
