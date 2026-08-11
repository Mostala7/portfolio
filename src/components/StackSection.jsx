import React from 'react';
import { Layers } from 'lucide-react';
import './StackSection.css';

const tools = [
  "Meta Ads", "TikTok Ads", "Snapchat Ads", "Google Ads", 
  "Google Analytics 4", "Google Tag Manager", "Looker Studio", "Conversions API (CAPI)"
];

const StackSection = () => {
  return (
    <div className="stack-container">
      <div className="stack-header">
        <Layers size={16} color="var(--badge-green)" />
        PLATFORMS & TOOLS
      </div>
      
      <div className="stack-tags-container">
        {tools.map((tool, index) => (
          <span key={index} className="stack-tag">
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StackSection;
