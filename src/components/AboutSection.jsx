import React from 'react';
import { MessageCircle, Camera, Code, Mail } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div>
        <h2 className="h2-title about-section-title">About me</h2>
        <p className="text-muted about-section-text-1">
          Growth-oriented Digital Marketer with a Computer Science background and 1.5 years of experience driving ROI in the e-commerce sector. Expert in bridging the gap between technical tracking (GTM, GA4, CAPI) and creative campaign strategy.
        </p>
        <p className="text-muted about-section-text-2">
          Proven ability to manage multi-platform paid ads (Meta, TikTok, Google) while maintaining a high standard for visual storytelling and brand consistency. Passionate about scaling both B2B software solutions and B2C consumer brands through data-driven experimentation.
        </p>
      </div>

      <div className="about-section-footer">
        <div className="about-section-find-me">
          FIND ME AT
        </div>
        <div className="about-section-social-links">
          <a href="#" className="about-section-social-link">
            <MessageCircle size={18} />
          </a>
          <a href="#" className="about-section-social-link">
            <Camera size={18} />
          </a>
          <a href="#" className="about-section-social-link">
            <Code size={18} />
          </a>
          <a href="#" className="about-section-social-link">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
