import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../assets/background.mp4'; // Your video path

export default function Home() {
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
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        padding: '60px 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          padding: '40px',
          borderRadius: '20px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)',
          maxWidth: '800px',
          width: '100%'
        }}>
          <h1 style={{ fontSize: '3.2rem', color: '#e3bd67', marginBottom: '10px', fontWeight: '800' }}>
            Welcome to MoneyGenei
          </h1>
          <h2 style={{ fontSize: '1.6rem', color: '#333', marginBottom: '30px', fontWeight: '600' }}>
            AI-powered smart saving app
          </h2>

          <ul style={{
            fontSize: '1.2rem',
            color: '#222',
            listStyle: 'none',
            padding: 0,
            marginBottom: '40px',
            lineHeight: '2',
            fontWeight: '500'
          }}>
            <li>💡 Instant tips for daily saving</li>
            <li>📊 Analyze your spending and get smart recommendations in real time</li>
            <li>📅 Custom plan for your goals — enter your income and target to get a long-term saving plan</li>
            <li>📈 Track top investment opportunities — hourly updates on stocks, crypto, and more</li>
          </ul>

          <Link to="/Login">
            <button style={{
              padding: '16px 36px',
              backgroundColor: '#e3bd67',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: '0.3s ease',
            }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#c9a74f'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#e3bd67'}
            >
              Start Saving Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
