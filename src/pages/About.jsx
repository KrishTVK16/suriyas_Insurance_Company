import SectionDivider from '../components/SectionDivider';
import '../main.css';

const About = () => {
  return (
    <>
      <section className="page-section">
        <div className="container">
          <h1 className="page-title">About SND Insurance</h1>
          <div className="about-content">
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Insurance Company"
              style={{ 
                width: '100%', 
                maxWidth: '800px', 
                height: '400px', 
                objectFit: 'cover', 
                borderRadius: '10px',
                marginBottom: '2rem'
              }}
            />
            <h2>Our Story</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
              Founded with a vision to revolutionize the insurance industry, SND Insurance 
              has been at the forefront of providing comprehensive protection solutions 
              for over two decades. We combine industrial-grade reliability with sophisticated 
              service delivery to ensure your peace of mind.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>
              Our commitment to excellence and innovation has made us a trusted partner 
              for thousands of individuals and families. We understand that insurance is 
              more than just a policy—it's a promise to protect what matters most to you.
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem', 
              marginTop: '3rem',
              textAlign: 'center'
            }}>
              <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Founded</h3>
                <p style={{ textAlign: 'center', fontSize: '1rem' }}>
                  Established in 2000, SND Insurance began as a small local agency with a big vision. 
                  Over the years, we've grown into a trusted national provider serving clients across the country.
                </p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Growth</h3>
                <p style={{ textAlign: 'center', fontSize: '1rem' }}>
                  From humble beginnings to industry leadership, our growth has been driven by 
                  customer satisfaction, innovative products, and a commitment to excellence in every interaction.
                </p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--bg-secondary)', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Today</h3>
                <p style={{ textAlign: 'center', fontSize: '1rem' }}>
                  Today, we're proud to serve over 50,000 clients nationwide, offering comprehensive 
                  insurance solutions backed by cutting-edge technology and personalized service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Our Mission & Values</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            textAlign: 'center',
            justifyItems: 'center'
          }}>
            <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '10px', textAlign: 'center', width: '100%', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Mission</h3>
              <p style={{ textAlign: 'center' }}>To provide unparalleled insurance protection through innovative solutions, 
              exceptional service, and unwavering commitment to our clients' security and prosperity.</p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '10px', textAlign: 'center', width: '100%', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Vision</h3>
              <p style={{ textAlign: 'center' }}>To be the most trusted and respected insurance provider, setting new standards 
              for excellence in protection and customer care in the modern world.</p>
            </div>
            <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: '10px', textAlign: 'center', width: '100%', border: '1px solid var(--border-color)' }}>
              <h3 style={{ color: 'var(--yellow-orange)', marginBottom: '1rem', textAlign: 'center' }}>Values</h3>
              <p style={{ textAlign: 'center' }}>Integrity, reliability, innovation, and customer-centricity guide everything we do. 
              We believe in building lasting relationships based on trust and transparency.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section">
        <div className="container">
          <h2>Our Team</h2>
          <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
            Meet the dedicated professionals who make SND Insurance a leader in the industry.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" 
                alt="Team Member"
              />
              <h3>John Anderson</h3>
              <p style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--molten-copper)' }}>
                Chief Executive Officer
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Leading SND Insurance with 20+ years of industry experience.
              </p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" 
                alt="Team Member"
              />
              <h3>Sarah Mitchell</h3>
              <p style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--molten-copper)' }}>
                Head of Operations
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Ensuring seamless service delivery and operational excellence.
              </p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" 
                alt="Team Member"
              />
              <h3>Michael Chen</h3>
              <p style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--molten-copper)' }}>
                Chief Financial Officer
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Expert in financial planning and risk management strategies.
              </p>
            </div>
            <div className="team-member">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" 
                alt="Team Member"
              />
              <h3>Emily Rodriguez</h3>
              <p style={{ fontStyle: 'normal', fontSize: '0.9rem', color: 'var(--molten-copper)' }}>
                Director of Customer Relations
              </p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Dedicated to providing exceptional customer service and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Our Achievements</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>50K+</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem', textAlign: 'center' }}>Happy Clients</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>25+</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem', textAlign: 'center' }}>Years Experience</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>98%</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem', textAlign: 'center' }}>Satisfaction Rate</p>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>24/7</h3>
              <p style={{ fontStyle: 'normal', fontSize: '1rem', textAlign: 'center' }}>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem', 
            marginTop: '3rem',
            textAlign: 'center',
            justifyItems: 'center'
          }}>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Award-Winning Service</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                Recognized by industry leaders for excellence in customer service and innovative insurance solutions.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌍</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Nationwide Coverage</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                Serving clients across all 50 states with comprehensive coverage options tailored to your needs.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💼</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Expert Advisors</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                Our team of licensed insurance professionals is dedicated to finding the perfect coverage for you.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Digital Innovation</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                State-of-the-art online platform for easy policy management, claims filing, and 24/7 access.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Fast Claims Processing</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                Quick and efficient claims handling with streamlined processes to get you back on track faster.
              </p>
            </div>
            <div style={{ 
              padding: '2rem', 
              background: 'var(--bg-secondary)', 
              borderRadius: '10px',
              textAlign: 'center',
              border: '1px solid var(--border-color)',
              width: '100%'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Competitive Rates</h3>
              <p style={{ textAlign: 'center', fontSize: '0.95rem' }}>
                Affordable premiums without compromising on coverage quality. Get the best value for your insurance needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="page-section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2>Our Commitment</h2>
          <div style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            textAlign: 'center',
            padding: '2rem'
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
              At SND Insurance, we believe that insurance is more than just a policy—it's a partnership. 
              We're committed to being there when you need us most, providing peace of mind and financial 
              security for you and your loved ones.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>
              Our team works tirelessly to ensure that every client receives personalized attention, 
              competitive rates, and comprehensive coverage that adapts to their changing needs. 
              We're not just your insurance provider; we're your trusted partner in protection.
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem', 
              marginTop: '3rem',
              textAlign: 'center'
            }}>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>Transparency</h4>
                <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                  Clear, honest communication about coverage, costs, and claims processes.
                </p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>Reliability</h4>
                <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                  Dependable service and support when you need it most, 24 hours a day.
                </p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--yellow-orange)', marginBottom: '0.5rem', textAlign: 'center' }}>Innovation</h4>
                <p style={{ fontSize: '0.95rem', textAlign: 'center' }}>
                  Cutting-edge technology and modern solutions for today's insurance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

