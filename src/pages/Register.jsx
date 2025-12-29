import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import '../main.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Register:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="auth-page">
      <div style={{ position: 'fixed', top: '30px', right: '30px', zIndex: 100 }}>
        <ThemeToggle />
      </div>
      <div className="auth-container">
        <div className="auth-form-wrapper">
          <div className="logo-card" style={{ marginBottom: '2rem', position: 'relative', top: 'auto', left: 'auto' }}>
            <Link to="/" className="logo-link">
              <div className="logo-text">SND Insurance</div>
              <div className="logo-subtitle">Protecting What Matters Most</div>
            </Link>
          </div>
          <h2>Create Account</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Join SND Insurance and protect what matters most
          </p>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--molten-copper)', marginBottom: '1rem' }}>
                Account Created!
              </h3>
              <p>Redirecting to login page...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
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
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" required style={{ cursor: 'pointer', marginTop: '0.2rem' }} />
                  <span style={{ fontSize: '0.9rem' }}>
                    I agree to the{' '}
                    <Link to="/terms" style={{ color: 'var(--molten-copper)', textDecoration: 'none' }}>
                      Terms & Conditions
                    </Link>
                    {' '}and{' '}
                    <Link to="/privacy" style={{ color: 'var(--molten-copper)', textDecoration: 'none' }}>
                      Privacy Policy
                    </Link>
                  </span>
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Create Account
              </button>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p style={{ fontSize: '0.95rem' }}>
                  Already have an account?{' '}
                  <Link to="/login" style={{ color: 'var(--molten-copper)', textDecoration: 'none' }}>
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

