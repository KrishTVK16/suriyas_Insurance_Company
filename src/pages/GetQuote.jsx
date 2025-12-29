import QuoteForm from '../components/QuoteForm';
import SectionDivider from '../components/SectionDivider';
import '../main.css';

const GetQuote = () => {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Get Your Insurance Quote</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Request a personalized insurance quote tailored to your specific needs. 
            Our team will review your information and provide you with competitive rates 
            and comprehensive coverage options.
          </p>
        </div>
      </section>

      <SectionDivider />

      <QuoteForm />

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--tungsten-gray)' }}>
        <div className="container">
          <h2>Why Get a Quote from SND Insurance?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem' 
          }}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Competitive Rates</h3>
              <p style={{ fontSize: '0.95rem' }}>
                We offer some of the most competitive rates in the industry without 
                compromising on coverage quality.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Quick Response</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Receive your personalized quote within 24 hours. Fast, efficient, 
                and hassle-free process.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Customized Plans</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Every quote is tailored to your specific needs and circumstances. 
                No one-size-fits-all solutions.
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Expert Guidance</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Our insurance experts will guide you through the process and help 
                you choose the best coverage options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section">
        <div className="container">
          <h2>What Happens Next?</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--molten-copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Submit Form</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Fill out the quote request form with your information and requirements.
              </p>
            </div>
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--molten-copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Review & Analysis</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Our team reviews your information and prepares a customized quote.
              </p>
            </div>
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--molten-copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Receive Quote</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Get your personalized quote via email or phone within 24 hours.
              </p>
            </div>
            <div>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'var(--molten-copper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--white)'
              }}>
                4
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Get Covered</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Review your options and activate your policy when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetQuote;

