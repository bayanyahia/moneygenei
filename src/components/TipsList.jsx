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
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tips.map((tip, index) => (
          <li
            key={index}
            style={{
              backgroundColor: '#1e1e1e',
              margin: '10px 0',
              padding: '14px 18px',
              borderRadius: '10px',
              borderLeft: '4px solid #e3bd67',
              color: '#f0f0f0',
              boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
              fontSize: '1rem',
              textAlign: 'left'
            }}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
