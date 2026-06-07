function PricingTable({ services }) {
  return (
    <div className="pricing-table">
      {services.map((service) => (
        <div className="pricing-row" key={service.id}>
          <div>
            <strong>{service.name}</strong>
            <span>{service.duration}</span>
          </div>
          <p>{service.description}</p>
          <strong>${service.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
