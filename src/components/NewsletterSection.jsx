import React from 'react';

const NewsletterSection = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem' }}>
        Articles coming soon.
      </h2>
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        border: '1px solid var(--grid-line-color)', 
        borderRadius: 'var(--radius-xl)', 
        padding: '0.25rem 0.25rem 0.25rem 1.5rem',
        width: '100%',
        maxWidth: '400px',
        backgroundColor: '#fff'
      }}>
        <input 
          type="email" 
          placeholder="your@email.com" 
          style={{ 
            flex: 1, 
            border: 'none', 
            outline: 'none', 
            fontSize: '0.9rem',
            color: 'var(--text-primary)'
          }} 
        />
        <button style={{ 
          padding: '0.75rem 1.5rem', 
          backgroundColor: '#f9fafb', 
          border: '1px solid #f3f4f6', 
          borderRadius: 'var(--radius-lg)', 
          fontWeight: '600',
          fontSize: '0.8rem',
          color: 'var(--text-primary)',
          cursor: 'pointer'
        }}>
          Stay up to date
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
