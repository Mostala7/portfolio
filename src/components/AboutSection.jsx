import React from 'react';
import { MessageCircle, Camera, Code, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
      <div>
        <h2 className="h2-title" style={{ marginBottom: '1.5rem' }}>About me</h2>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          Growth-oriented Digital Marketer with a Computer Science background and 1.5 years of experience driving ROI in the e-commerce sector. Expert in bridging the gap between technical tracking (GTM, GA4, CAPI) and creative campaign strategy.
        </p>
        <p className="text-muted" style={{ marginBottom: '2rem' }}>
          Proven ability to manage multi-platform paid ads (Meta, TikTok, Google) while maintaining a high standard for visual storytelling and brand consistency. Passionate about scaling both B2B software solutions and B2C consumer brands through data-driven experimentation.
        </p>
        
        {/* Signature Image */}
        <div style={{ marginBottom: '3rem' }}>
          <img src="/mostafa%20elesawy.png" alt="Mostafa Signature" style={{ height: '60px', objectFit: 'contain', opacity: 0.9 }} />
        </div>
      </div>

      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: '600', letterSpacing: '0.05em', color: 'var(--text-secondary)', textAlign: 'right', marginBottom: '1rem' }}>
          FIND ME AT
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
          <a href="#" style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--grid-line-color)', color: 'var(--text-light)' 
          }}>
            <MessageCircle size={18} />
          </a>
          <a href="#" style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--grid-line-color)', color: 'var(--text-light)' 
          }}>
            <Camera size={18} />
          </a>
          <a href="#" style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--grid-line-color)', color: 'var(--text-light)' 
          }}>
            <Code size={18} />
          </a>
          <a href="#" style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '40px', height: '40px', borderRadius: '50%', border: '1px solid var(--grid-line-color)', color: 'var(--text-light)' 
          }}>
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
