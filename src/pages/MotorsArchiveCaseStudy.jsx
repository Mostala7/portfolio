import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import './MotorsArchiveCaseStudy.css';

const MotorsArchiveCaseStudy = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="container">
      <div className="bento-grid">

        {/* Header Cell */}
        <div className="grid-cell col-span-12 case-study-header-cell">
          <div className="case-study-header-layout">
            <div className="case-study-header-text">
              <h1 className="case-study-title">Motors Archive</h1>

              <div className="brand-meta">
                <div className="meta-item">
                  <span className="meta-label">Brand:</span> Motors Archive
                </div>
                <div className="meta-item">
                  <span className="meta-label">Niche:</span> E-commerce (Automotive Lifestyle & Gear)
                </div>
                <div className="meta-item">
                  <span className="meta-label">Platform:</span> Meta Ads (Facebook & Instagram)
                </div>
                <div className="meta-item">
                  <span className="meta-label">Tech Stack:</span> Meta Ads Manager, Salla, CAPI, GTM
                </div>
              </div>

              <p className="phase-description">
                When taking on the Motors Archive project, we were starting with a completely blank slate. The brand was launching from zero, meaning there was no pixel data, no established customer avatars, and no historical account data to feed the algorithms.
              </p>
            </div>
            <Link to="/" className="back-link">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Phase 1 Cell */}
        <div className="grid-cell col-span-12 phase-cell">
          <div className="phase-header">
            <span className="phase-badge">Phase 1</span>
            <h2>Goals</h2>
          </div>

          <div className="phase-body">

            <p className="phase-description">
              To ensure a successful and profitable market entry, the core objectives for the launch phase were defined as follows:
            </p>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <h3 className="objective-title">Revenue Scaling</h3>
              <p>Drive immediate sales momentum by launching highly targeted acquisition campaigns. The primary objective for month one was to rapidly secure the first 100 customer acquisitions while simultaneously gathering critical pixel data to feed the Meta algorithm for future scaling.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Sustainable Profitability</h3>
              <p>Establish a highly efficient full-funnel advertising strategy that could maintain a consistent Return on Ad Spend (ROAS) even as ad budgets were scaled.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Robust Technical Foundation</h3>
              <p>Execute the complete technical setup of the tracking ecosystem prior to launching any campaigns. This included integrating the Meta Pixel and Conversions API (CAPI) directly on the Salla platform to bypass modern browser tracking limitations and guarantee accurate data attribution.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Creative Validation & CAC Reduction</h3>
              <p>Build a creative engine from scratch by collaborating with UGC creators to test various marketing angles, define our target customer avatars, and develop high-converting hooks that would systematically lower the Customer Acquisition Cost (CPA).</p>
            </div>
          </div>
        </div>

        {/* Phase 2 Cell */}
        <div className="grid-cell col-span-12 phase-cell">
          <div className="phase-header">
            <span className="phase-badge">Phase 2</span>
            <h2>The Challenge</h2>
          </div>

          <div className="phase-body">
            <p className="phase-description">
              Motors Archive was launching as a brand-new e-commerce store with zero account history, no pixel data, and zero organic sales momentum. Launching a brand from scratch in a competitive e-commerce landscape presented three critical hurdles:
            </p>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <h3 className="objective-title">Zero Data & Attribution Loss</h3>
              <p>Due to modern browser privacy restrictions and iOS tracking updates, relying solely on standard browser pixel tracking would result in heavy data loss and inefficient optimization on the Salla platform.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Cold Audiences & Unvalidated Creatives</h3>
              <p>Without existing customer avatars or proven creative assets, the brand risked burning budget on broad, unoptimized ad spend without understanding what hooks actually resonated.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Profitable Scale Constraints</h3>
              <p>The primary requirement was not just driving sales, but achieving immediate profitability and maintaining a minimum 2x ROAS while aggressively scaling monthly revenue.</p>
            </div>
          </div>
        </div>

        {/* Phase 3 Cell */}
        <div className="grid-cell col-span-12 phase-cell">
          <div className="phase-header">
            <span className="phase-badge">Phase 3</span>
            <h2>The Strategy</h2>
          </div>

          <div className="phase-body">
            <p className="phase-description">
              To solve these challenges, a strategy was deployed across three key pillars: technical tracking accuracy, structured campaign architecture, and creative angle testing.
            </p>
          </div>

          <div className="objectives-grid">
            <div className="objective-card">
              <h3 className="objective-title">Step 1: Technical & Attribution</h3>
              <p><strong>Bulletproof Tracking:</strong> Executed the complete technical setup of the Meta Pixel and Conversions API (CAPI) on the Salla platform to bypass tracking limitations and ensure accurate attribution.</p>
              <div style={{ height: '12px' }}></div>
              <p><strong>Data Integrity:</strong> Implemented strict UTM parameters to cross-reference Meta's reported data with GA4 for precise measurement.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Step 2: Avatar Mapping & Psychology</h3>
              <p><strong>Audience Profiling:</strong> Defined target customer avatars and mapped specific buyer pain points to engineer high-converting marketing angles.</p>
              <div style={{ height: '12px' }}></div>
              <p><strong>Strategic Positioning:</strong> Targeted underserved, high-intent audiences to capture early market share.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Step 3: Scientific Creative Testing</h3>
              <p><strong>UGC Engine:</strong> Collaborated directly with UGC creators to produce authentic, native-looking video assets.</p>
              <div style={{ height: '12px' }}></div>
              <p><strong>Rigorous A/B Testing:</strong> Systematically tested various hooks and creative angles to mathematically lower the Customer Acquisition Cost (CAC).</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Step 4: Full-Funnel Architecture</h3>
              <p><strong>Testing vs. Scaling:</strong> Utilized Ad Set Budget Optimization (ABO) to isolate and validate new creative variables, migrating winners into Campaign Budget Optimization (CBO) and Advantage+ Shopping campaigns for algorithmic scaling.</p>
              <div style={{ height: '12px' }}></div>
              <p><strong>Full-Funnel Strategy:</strong> Engineered campaigns to move cold traffic efficiently through the funnel while systematically retargeting high-intent drop-offs.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Step 5: Media Planning & Profitability</h3>
              <p><strong>Disciplined Scaling:</strong> Forecasted expected spend, reach, and revenue based on initial testing data to guide budget allocation.</p>
              <div style={{ height: '12px' }}></div>
              <p><strong>ROAS Guardrails:</strong> Managed budgets aggressively while protecting bottom-line profitability, ensuring the campaigns maintained a consistent 3.5x ROAS target.</p>
            </div>
          </div>
        </div>

        {/* Phase 4 Cell */}
        <div className="grid-cell col-span-12 phase-cell">
          <div className="phase-header">
            <span className="phase-badge">Phase 4</span>
            <h2>The Results</h2>
          </div>

          <div className="phase-body">
            <p className="phase-description">
              Through systematic creative testing, disciplined budget allocation, and precise technical tracking, the campaign achieved rapid, profitable scale from day one:
            </p>
          </div>

          <div className="objectives-grid" style={{ marginBottom: 'var(--space-xl)' }}>
            <div className="objective-card">
              <h3 className="objective-title">Scaled Monthly Revenue</h3>
              <p>Grew store revenue from 0 SAR to an average of 90,000 SAR per month within the first 6 months.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Consistent Profitability</h3>
              <p>Maintained an average 3.5x ROAS across all Meta paid acquisition campaigns throughout the scaling phase.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Cost Efficiency</h3>
              <p>Significantly reduced Customer Acquisition Cost (CAC) by identifying top-performing video hooks early in the testing loop.</p>
            </div>
            <div className="objective-card">
              <h3 className="objective-title">Data Reliability</h3>
              <p>Maintained high Meta Event Match Quality scores via CAPI, providing clear data visibility for confident budget scaling.</p>
            </div>
          </div>

          {/* Results Carousel */}
          <div className="carousel-container">
            <button className="carousel-button prev" onClick={prevImage} aria-label="Previous image">
              <ChevronLeft size={24} />
            </button>
            <div className="carousel-image-wrapper">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img 
                    key={index} 
                    src={src} 
                    alt={`Result Slide ${index + 1}`} 
                    className="carousel-image" 
                  />
                ))}
              </div>
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <span 
                    key={index} 
                    className={`carousel-dot ${index === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(index)}
                  />
                ))}
              </div>
            </div>
            <button className="carousel-button next" onClick={nextImage} aria-label="Next image">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MotorsArchiveCaseStudy;
