import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import SectionDivider from '../components/SectionDivider';
import '../main.css';

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Why Choose SND Insurance?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            textAlign: 'center',
            justifyItems: 'center'
          }}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Comprehensive Coverage</h3>
              <p>Protection that adapts to your needs with flexible policy options and comprehensive coverage plans.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Fast Claims Processing</h3>
              <p>Quick and efficient claims handling with 24/7 support to get you back on track faster.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Service</h3>
              <p>Dedicated customer service team committed to providing exceptional support and guidance.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Trusted & Reliable</h3>
              <p>Years of industry experience with a proven track record of reliability and customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

