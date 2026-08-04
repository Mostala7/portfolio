import React from 'react';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-light)', fontSize: '0.875rem' }}>
      <p style={{ marginBottom: '0.5rem' }}>
        Have an interesting, stupid or crazy idea you'd like some help building? <a href="#" style={{ textDecoration: 'underline', color: 'var(--badge-green)' }}>Let's talk.</a>
      </p>
      <p>
        2023 © Kuldar Kalvik
      </p>
    </div>
  );
};

export default Footer;
