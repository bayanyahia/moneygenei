import React from 'react';
import './App.css';
import BudgetForm from './components/BudgetForm';
import GoalForm from './components/GoalForm';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>ברוכים הבאים ל-MoneyGenei</h1>
      <BudgetForm />
      <GoalForm />
    </div>
  );
}

export default App;
