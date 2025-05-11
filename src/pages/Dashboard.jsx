import React from 'react';
import { Link } from 'react-router-dom';
import dashboardVideo from '../assets/background.mp4'; // ← Background video

export default function Dashboard() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={dashboardVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '1000px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
          color: 'white'
        }}>
          <h1 style={{ color: '#e3bd67', marginBottom: '20px' }}>👋 Welcome back, Bayan!</h1>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <Card title="💰 Total Income" value="$3,500" bg="#1b5e20" />
            <Card title="💸 Total Expenses" value="$1,900" bg="#b71c1c" />
            <Card title="💼 Savings" value="$1,600" bg="#0d47a1" />
          </div>

          <h2 style={{ marginBottom: '10px', color: '#e3bd67' }}>Quick Access</h2>
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            <QuickLink to="/budget" label="Manage Budget" />
            <QuickLink to="/goals" label="Set Goals" />
            <QuickLink to="/tips" label="Financial Tips" />
          </div>

          <div style={{
            backgroundColor: '#2c2c2c',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
            maxWidth: '600px'
          }}>
            <h3 style={{ marginBottom: '10px', color: '#ff9800' }}>💡 Tip of the Day</h3>
            <p style={{ fontSize: '1.1rem', color: '#ccc' }}>
              "Budgeting isn’t about limiting yourself — it’s about making the things that excite you possible."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, bg }) {
  return (
    <div style={{
      backgroundColor: bg,
      padding: '20px',
      borderRadius: '12px',
      flex: '1 1 200px',
      minWidth: '200px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
      color: 'white'
    }}>
      <h3 style={{ marginBottom: '10px' }}>{title}</h3>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{value}</p>
    </div>
  );
}

function QuickLink({ to, label }) {
  return (
    <Link to={to} style={{
      backgroundColor: 'transparent',
      border: '2px solid white',
      color: 'white',
      textDecoration: 'none',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: 'bold',
      transition: '0.3s',
      boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
    }}>
      {label}
    </Link>
  );
}
