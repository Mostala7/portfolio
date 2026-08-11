import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
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
        <div>
          <div className="about-section-find-me">
            FIND ME AT
          </div>
          <div className="about-section-social-links">
            <a href="https://www.instagram.com/_mostala7/" target="_blank" rel="noopener noreferrer" className="about-section-social-link instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/mostafa-elesawy/" target="_blank" rel="noopener noreferrer" className="about-section-social-link linkedin">
              <FaLinkedin size={18} />
            </a>
            <a href="https://x.com/_mostala7_" target="_blank" rel="noopener noreferrer" className="about-section-social-link twitter">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
        
        <a href="https://wa.me/201223246720" target="_blank" rel="noopener noreferrer" className="about-section-cta">
          <FaWhatsapp size={18} style={{ marginRight: '0.5rem' }} /> Let's Chat
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
