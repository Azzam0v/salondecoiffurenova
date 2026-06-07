import { Star } from 'lucide-react';

function StylistCard({ stylist }) {
  return (
    <article className="stylist-card">
      <img src={stylist.photo} alt={`${stylist.name}, ${stylist.title}`} />
      <div className="stylist-body">
        <div className="d-flex justify-content-between align-items-start gap-3">
          <div>
            <span className="card-kicker">{stylist.title}</span>
            <h3>{stylist.name}</h3>
          </div>
          <div className="rating-pill">
            <Star size={15} fill="currentColor" />
            {stylist.rating}
          </div>
        </div>
        <p>{stylist.bio}</p>
        <div className="detail-line">
          <strong>Experience</strong>
          <span>{stylist.experience}</span>
        </div>
        <div className="tag-list">
          {stylist.specialties.map((specialty) => (
            <span key={specialty}>{specialty}</span>
          ))}
        </div>
        <div className="available-services">
          <strong>Available services</strong>
          <p>{stylist.services.join(', ')}</p>
        </div>
      </div>
    </article>
  );
}

export default StylistCard;
