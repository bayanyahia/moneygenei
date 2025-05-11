import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '../assets/Login_icon.png';
import BackgroundVideo from '../assets/background.mp4'; // ← וידאו רקע במקום תמונה

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '12345678') {
      navigate('/Dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <form onSubmit={handleLogin} style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '40px',
          borderRadius: '12px',
          boxShadow: '0 0 12px rgba(0,0,0,0.2)',
          width: '320px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={LoginIcon} alt="Login Icon" style={{ width: '80px', marginBottom: '15px' }} />
          </div>


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '6px',
              border: '1px solid #ccc'
            }}
          />

          {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}

          <button type="submit" style={{
  width: '100%',
  padding: '10px',
  backgroundColor: '#e3bd67',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease'
}}
  onMouseOver={(e) => e.target.style.backgroundColor = '#c9a74f'}
  onMouseOut={(e) => e.target.style.backgroundColor = '#e3bd67'}
>
  Login
</button>

        </form>
      </div>
    </div>
  );
}
