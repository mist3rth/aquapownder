import React from 'react';
import { TestimonialCard } from '../ui/TestimonialCard';
import { TESTIMONIALS_DATA } from '../../constants/data';
import { useIntersection } from '../../hooks/useIntersection';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useIntersection();

  return (
    <section className={`tile-dark3 reveal ${isVisible ? 'active' : ''}`} ref={ref}>
      <div className="blueprint-bg" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/darkblueprint.webp')` }}></div>
      <div className="testimonials-content-wrapper">
        <h2>Ils ont essayé. Ils ont bu.</h2>
        <p className="lead">Des clients conquis. Des avis authentiques. Probablement.</p>
        <div className="test-3">
          {TESTIMONIALS_DATA.map((item, index) => (
            <TestimonialCard 
              key={item.id}
              quote={item.quote}
              name={item.name}
              role={item.role}
              className={isVisible ? 'animate-fade-up' : 'opacity-0'}
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
