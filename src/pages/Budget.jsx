import React, { useState } from 'react';
import backgroundVideo from '../assets/background.mp4'; // video background

export default function Budget() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const totalExpenses = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount), 0);
  const savings = income ? income - totalExpenses : 0;

  const addExpense = (e) => {
    e.preventDefault();
    if (!category || !amount) return;
    setExpenses([...expenses, { category, amount }]);
    setCategory('');
    setAmount('');
  };

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

      {/* Foreground content */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        padding: '60px 20px'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.4)',
          maxWidth: '800px',
          width: '100%',
          fontFamily: 'sans-serif',
          color: 'white'
        }}>
          <h1 style={{ color: '#e3bd67', marginBottom: '30px' }}>💸 Personal Budget Builder</h1>

          {/* Monthly Income */}
          <div style={{ marginBottom: '30px' }}>
            <label style={{ fontWeight: 'bold' }}>Monthly Income:</label><br />
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              placeholder="Enter income..."
              style={{
                padding: '10px',
                marginTop: '10px',
                width: '100%',
                maxWidth: '300px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                backgroundColor: '#222',
                color: 'white'
              }}
            />
          </div>

          {/* Add Expense */}
          <form onSubmit={addExpense} style={{ marginBottom: '30px' }}>
            <label style={{ fontWeight: 'bold' }}>Add Expense:</label><br />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Category (e.g. Rent)"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                style={{
                  padding: '10px',
                  flex: '1',
                  minWidth: '180px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  backgroundColor: '#222',
                  color: 'white'
                }}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                style={{
                  padding: '10px',
                  flex: '1',
                  minWidth: '120px',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  backgroundColor: '#222',
                  color: 'white'
                }}
              />
              <button type="submit" style={{
                padding: '10px 20px',
                backgroundColor: '#e3bd67',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                transition: '0.3s'
              }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#c9a74f';
                  e.target.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#e3bd67';
                  e.target.style.color = '#000';
                }}
              >
                Add
              </button>
            </div>
          </form>

          {/* Expense List */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '10px', color: '#e3bd67' }}>🧾 Expense List</h3>
            {expenses.length === 0 ? (
              <p style={{ color: '#ccc' }}>No expenses added yet.</p>
            ) : (
              <ul style={{ paddingLeft: '20px', color: '#eee' }}>
                {expenses.map((exp, index) => (
                  <li key={index}>
                    {exp.category}: ${parseFloat(exp.amount).toFixed(2)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Summary */}
          <div style={{
            backgroundColor: '#1c1c1c',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '400px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ color: '#e3bd67' }}>📊 Summary</h3>
            <p><strong>Total Income:</strong> ${income || 0}</p>
            <p><strong>Total Expenses:</strong> ${totalExpenses.toFixed(2)}</p>
            <p><strong>Savings:</strong> ${savings.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
