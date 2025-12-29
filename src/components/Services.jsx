import { Link } from 'react-router-dom';
import '../main.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for individuals and families. Premium care when you need it most.',
      icon: '🏥',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
      details: 'Full medical coverage, prescription drugs, preventive care, and emergency services.'
    },
    {
      id: 2,
      title: 'Vehicle Insurance',
      description: 'Protect your vehicle with our premium auto insurance. Drive with confidence and peace of mind.',
      icon: '🚗',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80',
      details: 'Collision coverage, comprehensive protection, liability insurance, and roadside assistance.'
    },
    {
      id: 3,
      title: 'Property Insurance',
      description: 'Safeguard your home and assets. Comprehensive property protection for homeowners and renters.',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80',
      details: 'Home protection, natural disaster coverage, theft insurance, and property damage claims.'
    },
    {
      id: 4,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with our life insurance plans. Financial protection that lasts.',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
      details: 'Term life, whole life, universal life, and final expense coverage options.'
    },
    {
      id: 5,
      title: 'Business Insurance',
      description: 'Comprehensive coverage for businesses of all sizes. Protect your company assets and operations.',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
      details: 'General liability, professional liability, commercial property, and workers\' compensation.'
    },
    {
      id: 6,
      title: 'Travel Insurance',
      description: 'Protect your trips and adventures with comprehensive travel insurance coverage worldwide.',
      icon: '✈️',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&q=80',
      details: 'Trip cancellation, medical emergencies, baggage protection, and travel assistance.'
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <h2 style={{ textAlign: 'center' }}>Our Insurance Services</h2>
        <p style={{ marginBottom: '3rem', fontSize: '1.2rem', textAlign: 'center' }}>
          Choose from our comprehensive range of insurance products designed to protect 
          what matters most to you. Each policy is crafted with precision and care.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card" style={{ textAlign: 'center' }}>
              <div className="service-icon">{service.icon}</div>
              <img 
                src={service.image} 
                alt={service.title}
                className="service-image"
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem', display: 'block' }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x200/2B2B2B/00F0FF?text=' + encodeURIComponent(service.title);
                }}
                loading="lazy"
              />
              <h3 style={{ textAlign: 'center' }}>{service.title}</h3>
              <p style={{ textAlign: 'center' }}>{service.description}</p>
              <div className="glass-hud">
                <div className="glass-hud-content" style={{ textAlign: 'center' }}>
                  <h4 style={{ textAlign: 'center' }}>{service.title}</h4>
                  <p style={{ fontSize: '0.9rem', textAlign: 'center' }}>{service.details}</p>
                  <Link to="/get-quote" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '0.85rem', padding: '0.7rem 1.5rem', display: 'inline-block' }}>
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/services" className="btn btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

