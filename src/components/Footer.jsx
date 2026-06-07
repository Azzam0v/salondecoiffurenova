import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="footer-brand">Nova Hair Studio</div>
            <p className="muted-copy mt-3">
              Premium hair care, thoughtful consultation, and effortless appointment booking in one elegant experience.
            </p>
            <div className="d-flex gap-2 mt-4">
              <a className="social-link" href="https://instagram.com" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a className="social-link" href="https://facebook.com" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a className="social-link" href="mailto:hello@novahairstudio.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h2 className="footer-title">Links</h2>
            <Link to="/services">Services</Link>
            <Link to="/stylists">Stylists</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-6 col-lg-3">
            <h2 className="footer-title">Contact</h2>
            <p><MapPin size={16} /> 125 Rue Sainte-Catherine, Montreal</p>
            <p><Phone size={16} /> (514) 555-0198</p>
            <p><Mail size={16} /> hello@novahairstudio.com</p>
          </div>
          <div className="col-lg-3">
            <h2 className="footer-title">Hours</h2>
            <p>Monday-Friday: 9 AM - 7 PM</p>
            <p>Saturday: 10 AM - 4 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright 2026 Nova Hair Studio.</span>
          <span>Designed by [Student Name]</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
