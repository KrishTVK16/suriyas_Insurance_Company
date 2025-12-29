import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import '../main.css';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage designed to protect you and your family\'s well-being.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
      features: [
        'Full medical coverage including doctor visits',
        'Prescription drug coverage',
        'Preventive care and wellness programs',
        'Emergency and hospital services',
        'Mental health and substance abuse coverage',
        'Maternity and newborn care'
      ],
      coverage: 'Individual, Family, and Group Plans Available'
    },
    {
      id: 2,
      title: 'Vehicle Insurance',
      description: 'Complete auto insurance protection to keep you safe on the road.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80',
      features: [
        'Collision and comprehensive coverage',
        'Liability protection',
        'Uninsured/underinsured motorist coverage',
        'Roadside assistance 24/7',
        'Rental car reimbursement',
        'Custom parts and equipment coverage'
      ],
      coverage: 'Cars, Trucks, Motorcycles, and Commercial Vehicles'
    },
    {
      id: 3,
      title: 'Property Insurance',
      description: 'Protect your home and belongings with comprehensive property insurance.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      features: [
        'Homeowners and renters insurance',
        'Natural disaster protection',
        'Theft and vandalism coverage',
        'Personal property protection',
        'Liability coverage',
        'Additional living expenses coverage'
      ],
      coverage: 'Residential and Commercial Properties'
    },
    {
      id: 4,
      title: 'Life Insurance',
      description: 'Secure your family\'s future with our life insurance plans. Financial protection that lasts.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      features: [
        'Term life insurance options',
        'Whole life and universal life',
        'Final expense coverage',
        'Accelerated death benefits',
        'Cash value accumulation',
        'Flexible premium payment options'
      ],
      coverage: 'Term, Whole, Universal, and Final Expense Plans'
    },
    {
      id: 5,
      title: 'Business Insurance',
      description: 'Comprehensive coverage for businesses of all sizes. Protect your company assets and operations.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      features: [
        'General liability insurance',
        'Professional liability coverage',
        'Commercial property insurance',
        'Workers\' compensation',
        'Business interruption insurance',
        'Cyber liability protection'
      ],
      coverage: 'Small Business, Mid-Size, and Enterprise Solutions'
    },
    {
      id: 6,
      title: 'Travel Insurance',
      description: 'Protect your trips and adventures with comprehensive travel insurance coverage worldwide.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80',
      features: [
        'Trip cancellation and interruption',
        'Medical emergency coverage',
        'Baggage loss and delay protection',
        'Travel delay reimbursement',
        'Emergency evacuation coverage',
        '24/7 travel assistance services'
      ],
      coverage: 'Domestic and International Travel Plans'
    }
  ];

  return (
    <>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Our Insurance Services</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            Explore our comprehensive range of insurance products. Each policy is designed 
            with your protection and peace of mind in mind. Choose the coverage that fits your needs.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="services-detail-grid">
            {services.map((service) => (
              <div key={service.id} className="service-detail-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  style={{ 
                    width: '100%', 
                    height: '250px', 
                    objectFit: 'cover', 
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    display: 'block',
                    backgroundColor: 'var(--dock-gray)',
                    flexShrink: 0
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/600x250/2B2B2B/00F0FF?text=' + encodeURIComponent(service.title);
                  }}
                  loading="lazy"
                />
                <h3 style={{ textAlign: 'center', flexShrink: 0 }}>{service.title}</h3>
                <p style={{ marginBottom: '1.5rem', textAlign: 'center', flexShrink: 0 }}>{service.description}</p>
                <p style={{ 
                  fontStyle: 'normal', 
                  fontSize: '0.9rem', 
                  color: 'var(--yellow-orange)',
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  flexShrink: 0
                }}>
                  {service.coverage}
                </p>
                <ul style={{ textAlign: 'left', listStylePosition: 'inside', flexGrow: 1, marginBottom: '1rem' }}>
                  {service.features.map((feature, index) => (
                    <li key={index} style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{feature}</li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', textAlign: 'center', flexShrink: 0 }}>
                  <Link to="/get-quote" className="btn btn-primary">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section">
        <div className="container">
          <h2>Additional Services</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem' 
          }}>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢</div>
              <h3>Business Insurance</h3>
              <p style={{ fontSize: '0.95rem', marginTop: '1rem', textAlign: 'center' }}>
                Comprehensive coverage for businesses of all sizes, including liability, 
                property, and workers' compensation.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✈️</div>
              <h3>Travel Insurance</h3>
              <p style={{ fontSize: '0.95rem', marginTop: '1rem', textAlign: 'center' }}>
                Protect your trips with travel insurance covering medical emergencies, 
                trip cancellations, and lost luggage.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
              <h3>Education Insurance</h3>
              <p style={{ fontSize: '0.95rem', marginTop: '1rem', textAlign: 'center' }}>
                Secure your children's future education with specialized education 
                savings and protection plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
            Contact us today to learn more about our insurance products and find the perfect 
            coverage for your needs.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn btn-primary">
              Get Your Quote
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

