import React from 'react';
import './HeaderSection.css';

const HeaderSection = () => {
  return (
    <div className="header-container">
      <div className="header-text-group">
        <h1 className="header-title">
          Mostafa Elesawy.
        </h1>
        <h2 className="header-subtitle">
          Junior Digital Marketing Specialist
        </h2>
      </div>
      <span className="header-badge">
        Good afternoon!
      </span>
    </div>
  );
};

export default HeaderSection;
