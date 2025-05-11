import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Goals from './pages/Goals';
import Tips from './pages/Tips';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === "/" || location.pathname === "/Login";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
