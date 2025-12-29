import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import '../main.css';
import '../responsive.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const overviewCards = [
    { title: 'Total Clients', value: '2,547', icon: '👥', change: '+12%', color: 'var(--neon-cyan)' },
    { title: 'Active Policies', value: '3,892', icon: '📋', change: '+8%', color: 'var(--yellow-orange)' },
    { title: 'Claims Processed', value: '1,234', icon: '✅', change: '+15%', color: '#00FF88' },
    { title: 'Revenue', value: '$2.4M', icon: '💰', change: '+22%', color: '#FF6B9D' }
  ];

  const recentPolicies = [
    { id: 'POL-001', client: 'John Smith', type: 'Health Insurance', status: 'Active', date: '2024-01-15' },
    { id: 'POL-002', client: 'Sarah Johnson', type: 'Vehicle Insurance', status: 'Active', date: '2024-01-14' },
    { id: 'POL-003', client: 'Mike Davis', type: 'Property Insurance', status: 'Pending', date: '2024-01-13' },
    { id: 'POL-004', client: 'Emily Brown', type: 'Life Insurance', status: 'Active', date: '2024-01-12' },
    { id: 'POL-005', client: 'David Wilson', type: 'Business Insurance', status: 'Active', date: '2024-01-11' }
  ];

  const claims = [
    { id: 'CLM-101', policy: 'POL-001', client: 'John Smith', amount: '$5,000', status: 'Approved', date: '2024-01-10' },
    { id: 'CLM-102', policy: 'POL-002', client: 'Sarah Johnson', amount: '$2,500', status: 'Pending', date: '2024-01-09' },
    { id: 'CLM-103', policy: 'POL-003', client: 'Mike Davis', amount: '$8,000', status: 'Under Review', date: '2024-01-08' }
  ];

  const notifications = [
    { id: 1, message: 'New policy application received', time: '2 hours ago', type: 'info' },
    { id: 2, message: 'Claim CLM-102 requires review', time: '5 hours ago', type: 'warning' },
    { id: 3, message: 'Monthly report generated successfully', time: '1 day ago', type: 'success' }
  ];

  return (
    <div className="dashboard-container">
      {/* Top Bar */}
      <div className="dashboard-topbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            className="sidebar-toggle-btn"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <Link to="/" className="dashboard-logo">
            SND Insurance
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggle />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`dashboard-sidebar ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <h3 style={{ 
            color: 'var(--neon-cyan)', 
            marginBottom: '2rem', 
            textAlign: 'center',
            fontSize: '1.5rem',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 900
          }}>
            Dashboard Menu
          </h3>
          <nav className="sidebar-nav">
            <Link to="/dashboard" className="sidebar-link active">
              <span>📊</span> Overview
            </Link>
            <Link to="/dashboard/policies" className="sidebar-link">
              <span>📋</span> Policies
            </Link>
            <Link to="/dashboard/clients" className="sidebar-link">
              <span>👥</span> Clients
            </Link>
            <Link to="/dashboard/claims" className="sidebar-link">
              <span>✅</span> Claims
            </Link>
            <Link to="/dashboard/reports" className="sidebar-link">
              <span>📈</span> Reports
            </Link>
            <Link to="/dashboard/settings" className="sidebar-link">
              <span>⚙️</span> Settings
            </Link>
            <Link to="/" className="sidebar-link sidebar-logout">
              <span>🚪</span> Logout
            </Link>
          </nav>
        </div>
      </div>

      {/* Sidebar Backdrop */}
      {sidebarOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-content">
          <h1 style={{ 
            marginBottom: '2rem',
            textAlign: 'left',
            fontSize: '2.5rem',
            color: 'var(--neon-cyan)'
          }}>
            Dashboard Overview
          </h1>

          {/* Overview Cards */}
          <div className="dashboard-cards-grid">
            {overviewCards.map((card, index) => (
              <div key={index} className="dashboard-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <p style={{ 
                      color: 'var(--text-secondary)', 
                      fontSize: '0.9rem', 
                      marginBottom: '0.5rem',
                      textAlign: 'left'
                    }}>
                      {card.title}
                    </p>
                    <h2 style={{ 
                      fontSize: '2rem', 
                      fontWeight: 900,
                      color: card.color,
                      textAlign: 'left',
                      margin: 0
                    }}>
                      {card.value}
                    </h2>
                  </div>
                  <div style={{ fontSize: '2.5rem' }}>{card.icon}</div>
                </div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  color: '#00FF88',
                  fontSize: '0.85rem',
                  textAlign: 'left'
                }}>
                  <span>↑</span>
                  <span>{card.change}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Policies */}
          <div className="dashboard-section">
            <h2 style={{ 
              textAlign: 'left', 
              marginBottom: '1.5rem',
              color: 'var(--neon-cyan)',
              fontSize: '1.8rem'
            }}>
              Recent Policies
            </h2>
            <div className="dashboard-table-container">
              <table className="dashboard-table">
                <thead>
                  <tr>
                    <th>Policy ID</th>
                    <th>Client</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPolicies.map((policy) => (
                    <tr key={policy.id}>
                      <td>{policy.id}</td>
                      <td>{policy.client}</td>
                      <td>{policy.type}</td>
                      <td>
                        <span className={`status-badge status-${policy.status.toLowerCase()}`}>
                          {policy.status}
                        </span>
                      </td>
                      <td>{policy.date}</td>
                      <td>
                        <button className="dashboard-action-btn">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Claims Status & Notifications Row */}
          <div className="dashboard-row">
            {/* Claims Status */}
            <div className="dashboard-section-half">
              <h2 style={{ 
                textAlign: 'left', 
                marginBottom: '1.5rem',
                color: 'var(--neon-cyan)',
                fontSize: '1.8rem'
              }}>
                Claims Status
              </h2>
              <div className="claims-list">
                {claims.map((claim) => (
                  <div key={claim.id} className="claim-item">
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        color: 'var(--text-primary)', 
                        marginBottom: '0.5rem',
                        textAlign: 'left',
                        fontSize: '1rem'
                      }}>
                        {claim.id}
                      </h4>
                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.85rem',
                        textAlign: 'left',
                        margin: 0
                      }}>
                        {claim.client} • {claim.policy}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ 
                        color: 'var(--yellow-orange)', 
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        fontSize: '1.1rem'
                      }}>
                        {claim.amount}
                      </p>
                      <span className={`status-badge status-${claim.status.toLowerCase().replace(' ', '-')}`}>
                        {claim.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="dashboard-section-half">
              <h2 style={{ 
                textAlign: 'left', 
                marginBottom: '1.5rem',
                color: 'var(--neon-cyan)',
                fontSize: '1.8rem'
              }}>
                Notifications
              </h2>
              <div className="notifications-list">
                {notifications.map((notif) => (
                  <div key={notif.id} className={`notification-item notification-${notif.type}`}>
                    <div style={{ flex: 1 }}>
                      <p style={{ 
                        color: 'var(--text-primary)', 
                        marginBottom: '0.3rem',
                        textAlign: 'left',
                        fontSize: '0.95rem'
                      }}>
                        {notif.message}
                      </p>
                      <p style={{ 
                        color: 'var(--text-secondary)', 
                        fontSize: '0.8rem',
                        textAlign: 'left',
                        margin: 0
                      }}>
                        {notif.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="dashboard-section">
            <h2 style={{ 
              textAlign: 'left', 
              marginBottom: '1.5rem',
              color: 'var(--neon-cyan)',
              fontSize: '1.8rem'
            }}>
              Quick Actions
            </h2>
            <div className="quick-actions-grid">
              <button className="quick-action-btn">
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>➕</span>
                <span>Add Policy</span>
              </button>
              <button className="quick-action-btn">
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</span>
                <span>View Clients</span>
              </button>
              <button className="quick-action-btn">
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</span>
                <span>Manage Claims</span>
              </button>
              <button className="quick-action-btn">
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</span>
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-container {
          min-height: 100vh;
          background: var(--bg-primary);
          display: flex;
          flex-direction: column;
        }

        .dashboard-topbar {
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px var(--shadow-color);
        }

        .sidebar-toggle-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--neon-cyan);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem 0.8rem;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        .dashboard-logo {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 1.5rem;
          color: var(--neon-cyan);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 3px;
          transition: all 0.3s ease;
        }

        .dashboard-logo:hover {
          text-shadow: 0 0 12px rgba(0, 240, 255, 0.6);
        }

        .dashboard-sidebar {
          position: fixed;
          left: 0;
          top: 70px;
          width: 250px;
          height: calc(100vh - 70px);
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border-right: 1px solid var(--border-color);
          padding: 2rem 0;
          overflow-y: auto;
          transition: transform 0.3s ease;
          z-index: 99;
        }

        .sidebar-content {
          padding: 0 1.5rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          color: var(--text-primary);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s ease;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.95rem;
        }

        .sidebar-link:hover {
          background: rgba(0, 240, 255, 0.1);
          color: var(--neon-cyan);
        }

        .sidebar-link.active {
          background: rgba(0, 240, 255, 0.15);
          color: var(--neon-cyan);
          border-left: 3px solid var(--neon-cyan);
        }

        .sidebar-logout {
          margin-top: auto;
          border-top: 1px solid var(--border-color);
          padding-top: 1rem;
          margin-top: 1rem;
          color: var(--yellow-orange) !important;
        }

        .sidebar-logout:hover {
          background: rgba(255, 179, 71, 0.15) !important;
          color: var(--yellow-orange) !important;
          border-left: 3px solid var(--yellow-orange) !important;
        }

        .sidebar-backdrop {
          display: none;
        }

        .dashboard-main {
          margin-left: 250px;
          padding: 2rem;
          min-height: calc(100vh - 70px);
          transition: margin-left 0.3s ease;
        }

        .dashboard-content {
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .dashboard-card {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .dashboard-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
          border-color: var(--neon-cyan);
        }

        .dashboard-section {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .dashboard-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .dashboard-section-half {
          background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 2rem;
        }

        .dashboard-table-container {
          overflow-x: auto;
        }

        .dashboard-table {
          width: 100%;
          border-collapse: collapse;
        }

        .dashboard-table th {
          background: var(--bg-primary);
          color: var(--neon-cyan);
          padding: 1rem;
          text-align: left;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 2px solid var(--border-color);
        }

        .dashboard-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
        }

        .dashboard-table tr:hover {
          background: rgba(0, 240, 255, 0.05);
        }

        .status-badge {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Orbitron', sans-serif;
        }

        .status-active {
          background: rgba(0, 255, 136, 0.2);
          color: #00FF88;
          border: 1px solid #00FF88;
        }

        .status-pending {
          background: rgba(255, 179, 71, 0.2);
          color: var(--yellow-orange);
          border: 1px solid var(--yellow-orange);
        }

        .status-approved {
          background: rgba(0, 255, 136, 0.2);
          color: #00FF88;
          border: 1px solid #00FF88;
        }

        .status-under-review {
          background: rgba(0, 240, 255, 0.2);
          color: var(--neon-cyan);
          border: 1px solid var(--neon-cyan);
        }

        .dashboard-action-btn {
          padding: 0.4rem 1rem;
          background: transparent;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          border-radius: 20px;
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          transition: all 0.3s ease;
        }

        .dashboard-action-btn:hover {
          background: rgba(0, 240, 255, 0.15);
        }

        .claims-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .claim-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .claim-item:hover {
          border-color: var(--neon-cyan);
          background: rgba(0, 240, 255, 0.05);
        }

        .notifications-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .notification-item {
          padding: 1rem;
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          border-left: 4px solid var(--neon-cyan);
          transition: all 0.3s ease;
        }

        .notification-info {
          border-left-color: var(--neon-cyan);
        }

        .notification-warning {
          border-left-color: var(--yellow-orange);
        }

        .notification-success {
          border-left-color: #00FF88;
        }

        .quick-actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }

        .quick-action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.95rem;
        }

        .quick-action-btn:hover {
          transform: translateY(-5px);
          border-color: var(--neon-cyan);
          box-shadow: 0 4px 15px rgba(0, 240, 255, 0.3);
          color: var(--neon-cyan);
        }

        /* Mobile Responsive */
        @media screen and (max-width: 1024px) {
          .sidebar-toggle-btn {
            display: block;
          }

          .dashboard-sidebar {
            transform: translateX(-100%);
          }

          .dashboard-sidebar.sidebar-open {
            transform: translateX(0);
          }

          .sidebar-backdrop {
            display: block;
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 98;
          }

          .dashboard-main {
            margin-left: 0;
            padding: 1.5rem;
          }

          .dashboard-row {
            grid-template-columns: 1fr;
          }

          .dashboard-cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }

        @media screen and (max-width: 768px) {
          .dashboard-topbar {
            padding: 1rem;
          }

          .dashboard-logo {
            font-size: 1.2rem;
          }

          .dashboard-cards-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-table-container {
            overflow-x: scroll;
          }

          .dashboard-table {
            min-width: 600px;
          }

          .quick-actions-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media screen and (max-width: 425px) {
          .quick-actions-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-section,
          .dashboard-section-half {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

