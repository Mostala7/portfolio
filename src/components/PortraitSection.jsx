import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import './PortraitSection.css';

const PortraitSection = () => {
  return (
    <div className="portrait-container">
      <div className="portrait-image-wrapper">
        <img 
          src="portrait.png" 
          alt="Portrait" 
          className="portrait-image" 
        />
      </div>
    </div>
  );
};

export default PortraitSection;
