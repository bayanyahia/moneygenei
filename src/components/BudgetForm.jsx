import React, { useState } from 'react';

export default function BudgetForm() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const remaining = income - expenses;

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center' }}>Monthly Budget Calculator</h2>

      <label>Monthly Income:</label>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        placeholder="₪"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <label>Total Expenses:</label>
      <input
        type="number"
        value={expenses}
        onChange={(e) => setExpenses(Number(e.target.value))}
        placeholder="₪"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <h3>Remaining Balance: ₪{remaining || 0}</h3>
    </div>
  );
}
