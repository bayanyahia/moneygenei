import React, { useState } from 'react';

export default function GoalForm() {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [goals, setGoals] = useState([]);

  const handleAddGoal = () => {
    if (goalName && goalAmount) {
      const newGoal = {
        name: goalName,
        amount: parseFloat(goalAmount)
      };
      setGoals([...goals, newGoal]);
      setGoalName('');
      setGoalAmount('');
    }
  };

  return (
    <div style={{
      padding: '30px',
      borderRadius: '16px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
      color: 'white',
      textAlign: 'left'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#e3bd67'
      }}>
        Set a Saving Goal
      </h2>

      <label>Goal Name:</label>
      <input
        type="text"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        placeholder="e.g. Trip to Paris"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '15px',
          borderRadius: '8px',
          border: '1px solid #555',
          backgroundColor: '#222',
          color: 'white'
        }}
      />

      <label>Target Amount (₪):</label>
      <input
        type="number"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        placeholder="₪"
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          borderRadius: '8px',
          border: '1px solid #555',
          backgroundColor: '#222',
          color: 'white'
        }}
      />

      <button
        onClick={handleAddGoal}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#e3bd67',
          color: '#000',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: '0.3s'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#c9a74f';
          e.target.style.color = 'white';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#e3bd67';
          e.target.style.color = '#000';
        }}
      >
        ➕ Add Goal
      </button>

      {goals.length > 0 && (
        <ul style={{ marginTop: '25px', color: '#eee', listStyleType: 'none', paddingLeft: 0 }}>
          {goals.map((goal, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              🎯 <strong>{goal.name}</strong> – <span style={{ color: '#e3bd67' }}>₪{goal.amount.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
