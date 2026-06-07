import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-media" role="img" aria-label="Premium salon interior with styling chairs" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="row align-items-end min-vh-100 py-5">
          <div className="col-lg-8">
            <div className="eyebrow"><Sparkles size={16} /> Montreal luxury salon</div>
            <h1>Premium Hair Care Experience</h1>
            <p>
              Book expert cuts, dimensional color, restorative treatments, and event styling with Nova's award-winning team.
            </p>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link className="btn btn-gold btn-lg d-inline-flex align-items-center gap-2" to="/booking">
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-outline-light btn-lg" to="/services">
                View Services
              </Link>
            </div>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <div className="hero-stat">
              <strong>4.9/5</strong>
              <span>Average client rating from 1,200+ appointments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
