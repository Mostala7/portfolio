import React from 'react';
import './BentoGrid.css';
import HeaderSection from './HeaderSection';
import AboutSection from './AboutSection';
import PortraitSection from './PortraitSection';
import ExperimentsSection from './ExperimentsSection';
import CompaniesSection from './CompaniesSection';
import NewsletterSection from './NewsletterSection';
import WorkSection from './WorkSection';
import Footer from './Footer';

const BentoGrid = () => {
  return (
    <div className="container">
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="grid-cell col-span-8 header-cell">
          <HeaderSection />
        </div>
        
        {/* Stats on the right spanning two rows */}
        <div className="grid-cell col-span-4 row-span-2 experiments-cell">
          <ExperimentsSection />
        </div>

        {/* Row 2 */}
        <div className="grid-cell col-span-8 about-portrait-cell">
          <div className="about-portrait-child">
            <AboutSection />
          </div>
          <div className="about-portrait-child">
            <PortraitSection />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid-cell col-span-4 companies-cell">
          <CompaniesSection />
        </div>
        <div className="grid-cell col-span-8 newsletter-cell">
          <NewsletterSection />
        </div>

        {/* Row 4 */}
        <div className="grid-cell col-span-12 work-cell">
          <WorkSection />
        </div>
        
        {/* Row 5 */}
        <div className="grid-cell col-span-12 footer-cell">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
