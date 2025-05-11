import React, { useState } from 'react';
import backgroundVideo from '../assets/background.mp4';

export default function BudgetWithAITips() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [aiTips, setAiTips] = useState([]);

  const totalExpenses = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);
  const savings = income - totalExpenses;

  const addExpense = (e) => {
    e.preventDefault();
    if (category && amount) {
      setExpenses([...expenses, { category, amount }]);
      setCategory('');
      setAmount('');
    }
  };

  const addGoal = (e) => {
    e.preventDefault();
    if (goalName && goalAmount) {
      setGoals([...goals, { name: goalName, amount: parseFloat(goalAmount) }]);
      setGoalName('');
      setGoalAmount('');
    }
  };

  const getTips = () => {
    const tips = [];

    if (savings > 0) {
      tips.push(`You’re saving ₪${savings.toFixed(2)} this month. Great job!`);
    } else if (savings === 0) {
      tips.push("You're breaking even. Try to reduce a category to save something.");
    } else {
      tips.push("You're overspending. Consider reviewing non-essential expenses.");
    }

    goals.forEach((goal) => {
      const monthsNeeded = goal.amount / (savings > 0 ? savings : 1);
      tips.push(`To reach "${goal.name}", save ₪${goal.amount.toFixed(0)} — you'll need ~${Math.ceil(monthsNeeded)} months.`);
    });

    const foodExpenses = expenses.filter(e =>
      e.category.toLowerCase().includes('food') || e.category.toLowerCase().includes('restaurant')
    );
    const foodTotal = foodExpenses.reduce((sum, e) => sum + Number(e.amount), 0);
    if (foodTotal > income * 0.2) {
      tips.push("You're spending more than 20% of your income on food — consider reducing takeout.");
    }

    setAiTips(tips);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
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

      <div style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '60px 20px',
        color: 'white'
      }}>
        <div style={{
          backgroundColor: 'rgba(0,0,0,0.85)',
          padding: '40px',
          borderRadius: '16px',
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0 6px 16px rgba(0,0,0,0.6)'
        }}>
          <h1 style={{ color: '#e3bd67', marginBottom: '30px', textAlign: 'center' }}>💸 Budget & Smart AI Tips</h1>

          {/* Income Input */}
          <div style={{ marginBottom: '30px' }}>
            <label>Monthly Income:</label><br />
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              placeholder="Enter income"
              style={inputStyle}
            />
          </div>

          {/* Expense Input */}
          <form onSubmit={addExpense} style={{ marginBottom: '30px' }}>
            <label>Add Expense:</label><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>➕ Add</button>
            </div>
          </form>

          {/* Goals Input */}
          <form onSubmit={addGoal} style={{ marginBottom: '30px' }}>
            <label>Set Saving Goal:</label><br />
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Goal name"
                value={goalName}
                onChange={(e) => setGoalName(e.target.value)}
                required
                style={inputStyle}
              />
              <input
                type="number"
                placeholder="₪ amount"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                required
                style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>🎯 Add Goal</button>
            </div>
          </form>

          {/* AI Tips Button */}
          <button onClick={getTips} style={{ ...buttonStyle, width: '100%', marginBottom: '20px' }}>
            🤖 Get AI Tips
          </button>

          {/* AI Tips Output */}
          {aiTips.length > 0 && (
            <div style={{ backgroundColor: '#1c1c1c', padding: '20px', borderRadius: '12px' }}>
              <h3 style={{ color: '#e3bd67' }}>💡 Smart Tips</h3>
              <ul>
                {aiTips.map((tip, index) => (
                  <li key={index} style={{ marginBottom: '10px' }}>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #555',
  backgroundColor: '#222',
  color: 'white',
  minWidth: '150px',
  flex: 1
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#e3bd67',
  color: '#000',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: '0.3s ease'
};
