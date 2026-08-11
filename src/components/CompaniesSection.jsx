import React from 'react';
import './CompaniesSection.css';

const CompaniesSection = () => {
  return (
    <div className="companies-container">
      <h3 className="companies-title">
        Companies I've worked with
      </h3>
      
      <div className="companies-grid">
        <div className="company-logo-1">Synack</div>
        <div className="company-logo-2">P</div>
        <div className="company-logo-3">Prisma</div>
        <div className="company-logo-4">checkr</div>
        <div className="company-logo-5">bonusly</div>
        <div className="company-logo-6">F</div>
      </div>
    </div>
  );
};

export default CompaniesSection;
