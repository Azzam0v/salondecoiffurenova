import { NavLink, Link } from 'react-router-dom';
import { CalendarDays, Menu } from 'lucide-react';

const navItems = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Stylists', '/stylists'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nova-navbar" aria-label="Main navigation">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-mark">N</span>
          Nova Hair Studio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Menu size={24} />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {navItems.map(([label, path]) => (
              <li className="nav-item" key={path}>
                <NavLink className="nav-link" to={path}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-gold btn-sm d-inline-flex align-items-center gap-2" to="/booking">
                <CalendarDays size={16} />
                Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
