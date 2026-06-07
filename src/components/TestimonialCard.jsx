import { Quote, Star } from 'lucide-react';

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <Quote className="quote-icon" size={28} />
      <p>{testimonial.text}</p>
      <div className="d-flex align-items-center justify-content-between">
        <strong>{testimonial.name}</strong>
        <span className="stars" aria-label={`${testimonial.rating} star rating`}>
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} size={15} fill="currentColor" />
          ))}
        </span>
      </div>
    </article>
  );
}

export default TestimonialCard;
