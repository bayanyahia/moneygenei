import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <header style={{
      backgroundColor: '#e3bd67',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo / Title */}
      <div style={{ color: '#2c3e50', fontSize: '20px', fontWeight: 'bold' }}>
        MoneyGenei
      </div>

      {/* Navigation Menu */}
      <nav style={{
        display: 'flex',
        gap: '30px',
        fontSize: '18px',
        alignItems: 'center'
      }}>
        <NavLink to="/dashboard" label="Dashboard" currentPath={location.pathname} />
        <NavLink to="/budget" label="Budget" currentPath={location.pathname} />
        <NavLink to="/goals" label="Goals" currentPath={location.pathname} />
        <NavLink to="/tips" label="Tips" currentPath={location.pathname} />

        <button
  onClick={handleLogout}
  style={{
    marginLeft: '20px',
    padding: '8px 16px',
    backgroundColor: '#fff',
    color: '#e3bd67',
    border: '1px solid #e3bd67',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.2s',
  }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = '#000';
    e.target.style.color = '#fff';
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = '#fff';
    e.target.style.color = '#e3bd67';
  }}
  onTouchStart={(e) => {
    e.target.style.backgroundColor = '#000';
    e.target.style.color = '#fff';
  }}
  onTouchEnd={(e) => {
    setTimeout(() => {
      e.target.style.backgroundColor = '#fff';
      e.target.style.color = '#e3bd67';
    }, 200);
  }}
>
  Logout
</button>

      </nav>
    </header>
  );
}

function NavLink({ to, label, currentPath }) {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      style={{
        color: isActive ? '#ffffff' : '#2c3e50',
        textDecoration: 'none',
        fontWeight: isActive ? 'bold' : 'normal',
        borderBottom: isActive ? '2px solid white' : 'none',
        paddingBottom: '4px',
        transition: 'color 0.2s'
      }}
    >
      {label}
    </Link>
  );
}
