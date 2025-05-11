import React from 'react';

const tips = [
  "Save 10% of your income every month.",
  "Compare prices before making big purchases.",
  "Use apps to track your expenses.",
  "Avoid unnecessary debt – credit isn’t free money.",
  "Set financial goals – both short and long-term.",
  "Try a 'no-spend day' once a week."
];

export default function TipsList() {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>💡 Smart Money Tips</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tips.map((tip, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#fff8e1',
              margin: '10px 0',
              padding: '12px',
              borderRadius: '10px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
            }}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
