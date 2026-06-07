import StylistCard from '../components/StylistCard.jsx';
import { stylists } from '../data/salonData.js';

function StylistsPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow dark">Stylists</span>
          <h1>Choose your expert</h1>
          <p>Browse biographies, specialties, experience, ratings, and available services.</p>
        </div>
        <div className="row g-4">
          {stylists.map((stylist) => (
            <div className="col-md-6 col-xl-3" key={stylist.id}>
              <StylistCard stylist={stylist} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StylistsPage;
