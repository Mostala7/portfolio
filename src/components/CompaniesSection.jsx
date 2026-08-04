import React from 'react';

const CompaniesSection = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '2rem', maxWidth: '200px' }}>
        Companies I've worked with
      </h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', opacity: 0.5, alignItems: 'center' }}>
        <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>Synack</div>
        <div style={{ fontWeight: '700', fontSize: '1.5rem', letterSpacing: '-0.05em' }}>P</div>
        <div style={{ fontWeight: '600', fontSize: '1.25rem' }}>Prisma</div>
        <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>checkr</div>
        <div style={{ fontWeight: '700', fontSize: '1.25rem' }}>bonusly</div>
        <div style={{ fontWeight: '900', fontSize: '1.5rem' }}>F</div>
      </div>
    </div>
  );
};

export default CompaniesSection;
