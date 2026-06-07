import { useMemo, useState } from 'react';
import ServiceCard from '../components/ServiceCard.jsx';
import PricingTable from '../components/PricingTable.jsx';
import { services } from '../data/salonData.js';

const categories = ['All', 'Haircuts', 'Color', 'Treatment', 'Styling'];
const priceRanges = [
  ['All', 0, Infinity],
  ['$0-$75', 0, 75],
  ['$76-$150', 76, 150],
  ['$151+', 151, Infinity],
];

function ServicesPage() {
  const [category, setCategory] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  const filteredServices = useMemo(() => {
    const [, min, max] = priceRanges.find(([label]) => label === priceRange);
    return services.filter((service) => {
      const categoryMatch = category === 'All' || service.category === category;
      const priceMatch = service.price >= min && service.price <= max;
      return categoryMatch && priceMatch;
    });
  }, [category, priceRange]);

  return (
    <section className="page-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow dark">Services and tariffs</span>
          <h1>Transparent care for every style</h1>
          <p>Compare services by category, duration, and price before booking.</p>
        </div>

        <div className="filter-bar">
          <label>
            Category
            <select className="form-select" value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Price range
            <select className="form-select" value={priceRange} onChange={(event) => setPriceRange(event.target.value)}>
              {priceRanges.map(([label]) => <option key={label}>{label}</option>)}
            </select>
          </label>
        </div>

        <div className="row g-4 mt-2">
          {filteredServices.map((service) => (
            <div className="col-md-6 col-xl-4" key={service.id}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <PricingTable services={filteredServices} />
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
