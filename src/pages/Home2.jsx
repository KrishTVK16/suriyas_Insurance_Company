import { Link } from 'react-router-dom';
import SectionDivider from '../components/SectionDivider';
import '../main.css';

const Home2 = () => {
  const services = [
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family'
    },
    {
      icon: '🚗',
      title: 'Vehicle Insurance',
      description: 'Complete auto protection for all your vehicles'
    },
    {
      icon: '🏠',
      title: 'Property Insurance',
      description: 'Protect your home and valuable assets'
    },
    {
      icon: '💼',
      title: 'Business Insurance',
      description: 'Comprehensive coverage for your business'
    }
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Fast Processing',
      description: 'Quick claims processing with 24/7 support'
    },
    {
      icon: '🛡️',
      title: 'Comprehensive Coverage',
      description: 'Wide range of insurance products'
    },
    {
      icon: '💎',
      title: 'Premium Service',
      description: 'Dedicated customer support team'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Trusted by thousands of customers'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="home2-hero">
        <div className="container">
          <div className="home2-hero-content">
            <h1 className="home2-hero-title">
              Your Trusted Insurance Partner
            </h1>
            <p className="home2-hero-subtitle">
              Protecting what matters most with comprehensive coverage and exceptional service
            </p>
            <div className="home2-hero-buttons">
              <Link to="/get-quote" className="btn btn-primary">
                Get Started Today
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="home2-hero-decoration"></div>
      </section>

      <SectionDivider />

      {/* Services Highlight */}
      <section className="page-section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Our Insurance Services</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}>
            Choose from our comprehensive range of insurance products designed to protect 
            what matters most to you.
          </p>
          <div className="home2-services-grid">
            {services.map((service, index) => (
              <div key={index} className="home2-service-card">
                <div className="home2-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/get-quote" className="home2-service-link">
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Choose Us */}
      <section className="page-section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>Why Choose SND Insurance?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}>
            Experience the difference with our premium insurance solutions
          </p>
          <div className="home2-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="home2-feature-card">
                <div className="home2-feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats Section */}
      <section className="page-section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="home2-stats-grid">
            <div className="home2-stat-item">
              <h3 style={{ fontSize: '3rem', color: 'var(--neon-cyan)', marginBottom: '0.5rem' }}>10K+</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Happy Customers</p>
            </div>
            <div className="home2-stat-item">
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem' }}>50K+</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Active Policies</p>
            </div>
            <div className="home2-stat-item">
              <h3 style={{ fontSize: '3rem', color: 'var(--neon-cyan)', marginBottom: '0.5rem' }}>99%</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Satisfaction Rate</p>
            </div>
            <div className="home2-stat-item">
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem' }}>24/7</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="page-section home2-cta-section">
        <div className="container">
          <div className="home2-cta-content">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
              Ready to Protect What Matters?
            </h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Get a free quote today and discover how we can help protect your future
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/get-quote" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Get Your Free Quote
              </Link>
              <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home2-hero {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: linear-gradient(135deg, var(--matte-black) 0%, var(--dock-gray) 100%);
          overflow: hidden;
          padding: 2rem 0;
        }

        .home2-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80') center/cover;
          opacity: 0.2;
          z-index: 0;
        }

        .home2-hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          padding: 2rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .home2-hero-title {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, var(--neon-cyan) 0%, var(--yellow-orange) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: none;
        }

        .home2-hero-subtitle {
          font-size: 1.4rem;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .home2-hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .home2-hero-decoration {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(180deg, transparent 0%, var(--bg-primary) 100%);
          z-index: 1;
        }

        .home2-services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
          justify-items: center;
          align-items: center;
          width: 100%;
        }

        .home2-service-card {
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100%;
        }

        .home2-service-card * {
          text-align: center;
        }

        .home2-service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 240, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }

        .home2-service-card:hover::before {
          left: 100%;
        }

        .home2-service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
          border-color: var(--neon-cyan);
        }

        .home2-service-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home2-service-card h3 {
          color: var(--neon-cyan);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          text-align: center;
        }

        .home2-service-card p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1rem;
          text-align: center;
        }

        .home2-service-link {
          color: var(--yellow-orange);
          text-decoration: none;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          text-align: center;
          margin: 0 auto;
        }

        .home2-service-link:hover {
          color: var(--neon-cyan);
          transform: translateX(5px);
        }

        .home2-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
          justify-items: center;
          align-items: center;
          width: 100%;
        }

        .home2-feature-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 100%;
        }

        .home2-feature-card * {
          text-align: center;
        }

        .home2-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 240, 255, 0.2);
          border-color: var(--neon-cyan);
        }

        .home2-feature-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home2-feature-card h3 {
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-size: 1.3rem;
          text-align: center;
        }

        .home2-feature-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          text-align: center;
        }

        .home2-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-top: 2rem;
          justify-items: center;
          align-items: center;
          width: 100%;
        }

        .home2-stat-item {
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .home2-stat-item h3 {
          text-align: center;
          margin: 0 auto;
        }

        .home2-stat-item p {
          text-align: center;
          margin: 0 auto;
        }

        .home2-cta-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          position: relative;
          overflow: hidden;
        }

        .home2-cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.1) 0%, transparent 70%);
          z-index: 0;
        }

        .home2-cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .home2-cta-content * {
          text-align: center;
        }

        /* Responsive Styles */
        @media screen and (max-width: 768px) {
          .home2-hero-title {
            font-size: 2.5rem;
          }

          .home2-hero-subtitle {
            font-size: 1.1rem;
          }

          .home2-services-grid,
          .home2-features-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .home2-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .home2-hero-buttons {
            flex-direction: column;
            align-items: stretch;
          }

          .home2-hero-buttons .btn {
            width: 100%;
          }
        }

        @media screen and (max-width: 425px) {
          .home2-hero-title {
            font-size: 2rem;
          }

          .home2-hero-subtitle {
            font-size: 1rem;
          }

          .home2-stats-grid {
            grid-template-columns: 1fr;
          }

          .home2-service-card,
          .home2-feature-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Home2;

