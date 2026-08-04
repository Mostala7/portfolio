import React from 'react';

const HeaderSection = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
      <h1 style={{ 
        fontSize: 'clamp(3rem, 8vw, 6rem)', 
        fontWeight: '800', 
        letterSpacing: '-0.05em', 
        lineHeight: 1 
      }}>
        Mostafa Elesawy.
      </h1>
      <span style={{
        backgroundColor: 'var(--badge-green)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '24px 24px 24px 0', /* Speech bubble shape */
        fontWeight: '600',
        fontSize: '0.875rem',
        marginTop: '0.5rem',
        whiteSpace: 'nowrap'
      }}>
        Good afternoon!
      </span>
    </div>
  );
};

export default HeaderSection;
