import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

const PortraitSection = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ 
        flex: 1, 
        borderRadius: 'var(--radius-lg)', 
        overflow: 'hidden', 
        position: 'relative',
        backgroundColor: '#1a1a1a',
        minHeight: '400px'
      }}>
        <img 
          src="/portrait.png" 
          alt="Portrait" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            display: 'block'
          }} 
        />
      </div>
    </div>
  );
};

export default PortraitSection;
