import { Link } from 'react-router-dom';
import '../main.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p style={{ marginBottom: '2rem' }}>
          Don't worry, we'll help you get back on track. Return to our homepage 
          or explore our services to find what you need.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Go Home
          </Link>
          <Link to="/services" className="btn btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

