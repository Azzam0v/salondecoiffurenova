import { Crown, Droplets, Palette, Scissors, Sparkles, UserRound } from 'lucide-react';

const iconMap = {
  Crown,
  Droplets,
  Palette,
  Scissors,
  Sparkles,
  UserRound,
};

function ServiceCard({ service, compact = false }) {
  const Icon = iconMap[service.icon] || Scissors;

  return (
    <article className={`service-card ${compact ? 'service-card-compact' : ''}`}>
      <div className="service-icon">
        <Icon size={24} />
      </div>
      <div>
        <span className="card-kicker">{service.category}</span>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
      </div>
      <div className="service-meta">
        <span>{service.duration}</span>
        <strong>${service.price}</strong>
      </div>
    </article>
  );
}

export default ServiceCard;
