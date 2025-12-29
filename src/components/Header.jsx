import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../main.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
        <Link to="/" className="logo" onClick={closeMenu}>
          SND Insurance
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ThemeToggle />
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Backdrop overlay */}
        {isMenuOpen && (
          <div 
            className="mobile-menu-backdrop" 
            onClick={closeMenu}
            aria-hidden="true"
          ></div>
        )}
        
        {/* Side menu */}
        <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <li>
            <Link 
              to="/" 
              onClick={closeMenu}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/home2" 
              onClick={closeMenu}
              className={location.pathname === '/home2' ? 'active' : ''}
            >
              Home 2
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              onClick={closeMenu}
              className={location.pathname === '/services' ? 'active' : ''}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
          <li className="nav-auth-items">
            <Link 
              to="/login" 
              onClick={closeMenu}
              className={`nav-auth-btn ${location.pathname === '/login' ? 'active' : ''}`}
            >
              Login
            </Link>
          </li>
          <li className="nav-auth-items">
            <Link 
              to="/register" 
              onClick={closeMenu}
              className={`nav-auth-btn ${location.pathname === '/register' ? 'active' : ''}`}
            >
              Register
            </Link>
          </li>
          <li className="nav-auth-items">
            <Link 
              to="/dashboard" 
              onClick={closeMenu}
              className={`nav-dashboard-btn ${location.pathname === '/dashboard' ? 'active' : ''}`}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

