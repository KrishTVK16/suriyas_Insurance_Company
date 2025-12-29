import ContactForm from '../components/ContactForm';
import SectionDivider from '../components/SectionDivider';
import '../main.css';

const ContactPage = () => {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
            We're here to help! Reach out to us through any of the following methods. 
            Our team is ready to assist you with all your insurance needs.
          </p>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--tungsten-gray)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem', 
            marginBottom: '3rem' 
          }}>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--molten-copper)' }}>Office Address</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem' }}>
                123 Insurance Boulevard<br />
                Financial District<br />
                New York, NY 10004<br />
                United States
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--molten-copper)' }}>Phone</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem' }}>
                Main: (555) 123-4567<br />
                Toll-Free: 1-800-SND-INSUR<br />
                Fax: (555) 123-4568<br />
                Available 24/7
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--molten-copper)' }}>Email</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem' }}>
                General: info@sndinsurance.com<br />
                Claims: claims@sndinsurance.com<br />
                Support: support@sndinsurance.com<br />
                Sales: sales@sndinsurance.com
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🕒</div>
              <h3 style={{ marginBottom: '1rem', color: 'var(--molten-copper)' }}>Business Hours</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem' }}>
                Monday - Friday: 8:00 AM - 8:00 PM<br />
                Saturday: 9:00 AM - 5:00 PM<br />
                Sunday: Closed<br />
                Emergency: 24/7 Available
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section">
        <div className="container">
          <h2>Send Us a Message</h2>
          <ContactForm />
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--tungsten-gray)' }}>
        <div className="container">
          <h2>Visit Our Office</h2>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80" 
              alt="Office Location"
              style={{ 
                width: '100%', 
                maxWidth: '900px', 
                height: '400px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                marginBottom: '1.5rem'
              }}
            />
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Our headquarters is located in the heart of the financial district. 
              We welcome walk-in visits during business hours. For scheduled appointments, 
              please call ahead or use our contact form above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

