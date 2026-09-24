import React from 'react';
import './CompaniesSection.css';

const companies = [
  { name: 'Fadaa Agency', src: 'Fadaa.jpeg' },
  { name: 'Motors Archive', src: 'Motors Archive.jpg' },
  { name: 'Hook Agency', src: 'Hook Agency.jpg' },
];

const CompaniesSection = () => {
  return (
    <div className="companies-container">
      <h3 className="companies-title">
        Companies I've worked with
      </h3>
      
      <div className="companies-scroll-area">
        <div className="companies-scroll-track">
          {/* First Set */}
          <div className="companies-scroll-set">
            {companies.map((company, index) => (
              <div key={`set1-${index}`} className="company-item">
                <img 
                  src={company.src} 
                  alt={company.name} 
                  className="company-logo-img" 
                />
                <span className="company-name">{company.name}</span>
              </div>
            ))}
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="companies-scroll-set">
            {companies.map((company, index) => (
              <div key={`set2-${index}`} className="company-item">
                <img 
                  src={company.src} 
                  alt={company.name} 
                  className="company-logo-img" 
                />
                <span className="company-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSection;
