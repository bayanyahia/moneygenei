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
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#e3f2fd', borderRadius: '12px' }}>
      <h2 style={{ textAlign: 'center' }}>הגדרת מטרת חיסכון</h2>

      <label>שם המטרה:</label>
      <input
        type="text"
        value={goalName}
        onChange={(e) => setGoalName(e.target.value)}
        placeholder="למשל: טיול לפריז"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <label>סכום יעד (₪):</label>
      <input
        type="number"
        value={goalAmount}
        onChange={(e) => setGoalAmount(e.target.value)}
        placeholder="₪"
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <button onClick={handleAddGoal} style={{ padding: '10px 20px', backgroundColor: '#1976d2', color: '#fff', border: 'none', borderRadius: '8px' }}>
        הוסף מטרה
      </button>

      <ul style={{ marginTop: '20px' }}>
        {goals.map((goal, index) => (
          <li key={index}>
            🎯 {goal.name} – ₪{goal.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
