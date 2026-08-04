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
        <div className="grid-cell col-span-12 header-cell">
          <HeaderSection />
        </div>

        {/* Row 2 */}
        <div className="grid-cell col-span-8 about-portrait-cell" style={{ display: 'flex', gap: '3rem', flexDirection: 'row' }}>
          <div style={{ flex: 1 }}>
            <AboutSection />
          </div>
          <div style={{ flex: 1 }}>
            <PortraitSection />
          </div>
        </div>
        <div className="grid-cell col-span-4 experiments-cell">
          <ExperimentsSection />
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
