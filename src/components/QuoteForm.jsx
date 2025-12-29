import { useState } from 'react';
import '../main.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    coverageAmount: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Quote Request:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        insuranceType: '',
        coverageAmount: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="page-section">
      <div className="container">
        <h2 className="page-title">Get Your Insurance Quote</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
          Fill out the form below and our team will provide you with a personalized quote 
          tailored to your needs. We'll get back to you within 24 hours.
        </p>
        <div className="form-container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--molten-copper)', marginBottom: '1rem' }}>
                Thank You!
              </h3>
              <p>Your quote request has been submitted successfully. We'll contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="insuranceType">Insurance Type *</label>
                <select
                  id="insuranceType"
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select insurance type</option>
                  <option value="health">Health Insurance</option>
                  <option value="vehicle">Vehicle Insurance</option>
                  <option value="property">Property Insurance</option>
                  <option value="life">Life Insurance</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="coverageAmount">Desired Coverage Amount *</label>
                <select
                  id="coverageAmount"
                  name="coverageAmount"
                  value={formData.coverageAmount}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select coverage amount</option>
                  <option value="basic">Basic ($50,000 - $100,000)</option>
                  <option value="standard">Standard ($100,000 - $250,000)</option>
                  <option value="premium">Premium ($250,000 - $500,000)</option>
                  <option value="ultra">Ultra Premium ($500,000+)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific insurance needs..."
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn btn-primary">
                  Request Quote
                </button>
              </div>
            </form>
          )}
        </div>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
            By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;

