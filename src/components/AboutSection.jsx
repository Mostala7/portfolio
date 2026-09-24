import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section-container">
      <div>
        <h2 className="h2-title about-section-title">About me</h2>
        <p className="text-muted about-section-text-2">
          I am a Performance Marketer with a Computer Science background,
          bridging the gap between technical ad execution and overarching
          business growth. With two years of experience and over 450,000 SAR in
          managed ad spend, I have successfully scaled B2C e-commerce brands and
          architected B2B pipelines from scratch. I believe modern media buying
          goes far beyond the ads dashboard. While highly proficient in
          technical parts , my focus is always on holistic business
          health—solving core challenges, maximizing Customer LTV, and driving
          retention. I am now looking to bring my business-first mindset and
          technical expertise to a B2B-focused team.
        </p>
      </div>

      <div className="about-section-footer">
        <div>
          <div className="about-section-find-me">FIND ME AT</div>
          <div className="about-section-social-links">
            <a
              href="https://www.instagram.com/_mostala7/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-section-social-link instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mostafa-elesawy/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-section-social-link linkedin"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/_mostala7_"
              target="_blank"
              rel="noopener noreferrer"
              className="about-section-social-link twitter"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        <a
          href="https://wa.me/201223246720"
          target="_blank"
          rel="noopener noreferrer"
          className="about-section-cta"
        >
          <FaWhatsapp size={18} style={{ marginRight: "0.5rem" }} /> Let's Chat
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
