import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">
        Articles coming soon.
      </h2>
      
      <div className="newsletter-input-group">
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="newsletter-input"
        />
        <button className="newsletter-button">
          Stay up to date
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
