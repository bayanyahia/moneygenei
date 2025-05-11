import React from 'react';
import TipsList from '../components/TipsList';
import backgroundVideo from '../assets/background.mp4';

export default function Tips() {
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
          zIndex: -1,
          filter: 'brightness(0.6)'
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '60px 20px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '40px',
          borderRadius: '16px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 6px 16px rgba(0,0,0,0.5)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#e3bd67',
            marginBottom: '30px',
            fontSize: '2rem'
          }}>
            💡 Money Saving Tips
          </h2>
          <TipsList />
        </div>
      </div>
    </div>
  );
}
