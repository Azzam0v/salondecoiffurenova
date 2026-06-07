import { Gem, Leaf, Users } from 'lucide-react';
import { stylists } from '../data/salonData.js';

function AboutPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="about-hero">
          <div>
            <span className="eyebrow dark">Our story</span>
            <h1>Modern beauty, personal attention</h1>
            <p>
              Nova Hair Studio was created for clients who want premium results without confusion. Our salon combines expert technique,
              clear consultation, transparent pricing, and a calm environment designed for confident decisions.
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80" alt="Nova Hair Studio salon chairs" />
        </div>

        <div className="row g-4 mt-4">
          {[
            [Gem, 'Mission', 'Deliver polished hair care through expertise, trust, and an effortless booking experience.'],
            [Leaf, 'Values', 'Clarity, craft, respect, inclusivity, and long-term hair health guide every service.'],
            [Users, 'Team', 'A focused group of stylists who specialize across cuts, color, treatment, and events.'],
          ].map(([Icon, title, copy]) => (
            <div className="col-md-4" key={title}>
              <div className="feature-card tall">
                <Icon size={28} />
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="salon-gallery mt-5">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80" alt="Salon styling station" />
          <img src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80" alt="Hair color consultation" />
          <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80" alt="Salon product shelf" />
        </div>

        <div className="team-strip mt-5">
          {stylists.map((stylist) => (
            <div key={stylist.id}>
              <img src={stylist.photo} alt={stylist.name} />
              <strong>{stylist.name}</strong>
              <span>{stylist.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
