import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../main.css';

const HeroSection = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = e.clientX - 10 + 'px';
      trail.style.top = e.clientY - 10 + 'px';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero-section parallax-container">
      <div className="crane-decoration"></div>
      <div className="hero-content">
        <h1 className="hero-title">Protecting What Matters Most</h1>
        <p className="hero-subtitle">
          Neon Dockyards. Industrial. Ultra-Premium Insurance.
        </p>
        <p style={{ 
          marginBottom: '2rem', 
          fontSize: '1.2rem', 
          textAlign: 'center',
          color: 'var(--text-primary)',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
          background: 'rgba(0, 0, 0, 0.3)',
          padding: '1rem 2rem',
          borderRadius: '10px',
          backdropFilter: 'blur(5px)',
          display: 'inline-block',
          maxWidth: '800px'
        }}>
          Experience the future of insurance protection with our comprehensive coverage 
          designed for the modern world. Trust, reliability, and excellence in every policy.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <Link to="/get-quote" className="btn btn-primary">
            Get Your Quote
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

