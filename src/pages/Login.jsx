import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import '../main.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login:', formData);
    setSubmitted(true);
    setTimeout(() => {
      navigate('/');
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
          <h2>Welcome Back</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
            Sign in to your account to continue
          </p>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <h3 style={{ color: 'var(--molten-copper)', marginBottom: '1rem' }}>
                Logging In...
              </h3>
              <p>Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="auth-form">
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
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>

              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ cursor: 'pointer' }} />
                  <span style={{ fontSize: '0.9rem' }}>Remember me</span>
                </label>
                <Link to="/forgot-password" style={{ 
                  color: 'var(--molten-copper)', 
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Sign In
              </button>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <p style={{ fontSize: '0.95rem' }}>
                  Don't have an account?{' '}
                  <Link to="/register" style={{ color: 'var(--molten-copper)', textDecoration: 'none' }}>
                    Sign Up
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

export default Login;

