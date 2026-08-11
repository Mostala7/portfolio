import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './MotorsArchiveCaseStudy.css';

const MotorsArchiveCaseStudy = () => {
  return (
    <div className="case-study-container">
      <div className="case-study-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <h1 className="case-study-title">Motors Archive</h1>
        <p className="case-study-subtitle">
          Launching & Scaling Motors Archive from 0 to 90,000 SAR/Month with Meta Ads
        </p>
      </div>

      <div className="case-study-content">
        <div className="case-study-section">
          <h2>Overview</h2>
          <p>
            Scaled monthly revenue from 0 to avg 90,000 SAR Per Month within the first six months of brand launch through aggressive performance marketing strategies.
          </p>
        </div>
        
        <div className="case-study-section">
          <h2>Strategy & Execution</h2>
          <ul>
            <li>Managed end-to-end Meta Ads campaigns (Facebook & Instagram), maintaining a consistent 3.5x ROAS (Return on Ad Spend) while optimizing for high-intent audiences.</li>
            <li>Engineered full-funnel advertising strategies, including A/B testing creative assets and refining audience targeting to reduce Customer Acquisition Cost (CAC).</li>
            <li>Executed the complete technical setup of the marketing ecosystem, including Meta Pixel and Conversions API (CAPI) integration on Salla to ensure accurate data attribution and bypass tracking limitations.</li>
            <li>Led the creative strategy by collaborating with UGC creators; developed high-converting hooks, defined target customer avatars, and tested various marketing angles to lower CPA.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MotorsArchiveCaseStudy;
