import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Target,
  AlertCircle,
  Zap,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";
import "./MotorsArchiveCaseStudy.css";

const MotorsArchiveCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [activePhase, setActivePhase] = useState(1);
  const images = ["motorsArchiveResults1.png", "motorsArchiveResults2.jpeg"];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const phases = [
    { id: 1, title: "Goals", icon: <Target size={18} /> },
    { id: 2, title: "Challenge", icon: <AlertCircle size={18} /> },
    { id: 3, title: "Strategy", icon: <Zap size={18} /> },
    { id: 4, title: "Results", icon: <TrendingUp size={18} /> },
    { id: 5, title: "Creatives", icon: <ImageIcon size={18} /> },
  ];

  return (
    <div className="container">
      <div className="bento-grid">
        {/* Header Cell */}
        <div className="grid-cell col-span-12 case-study-header-cell">
          <div className="case-study-header-layout">
            <div className="case-study-header-text">
              <div className="title-with-logo">
                <img
                  src="Motors Archive.jpg"
                  alt="Motors Archive Logo"
                  className="case-study-logo"
                />
                <h1 className="case-study-title">Motors Archive</h1>
              </div>

              <div className="brand-meta interactive-meta">
                <div className="meta-item">
                  <span className="meta-label">Brand:</span> Motors Archive
                </div>
                <div className="meta-item">
                  <span className="meta-label">Niche:</span> E-commerce
                  (Automotive Lifestyle & Gear)
                </div>
                <div className="meta-item">
                  <span className="meta-label">Platform:</span> Meta Ads
                  (Facebook & Instagram)
                </div>
                <div className="meta-item">
                  <span className="meta-label">Tech Stack:</span> Meta Ads
                  Manager, Salla, CAPI, GTM
                </div>
              </div>

              <p
                className="phase-description"
                style={{ fontSize: "1.05rem", lineHeight: "1.7" }}
              >
                <strong>Motors Archive</strong> is a Saudi-based boutique D2C
                brand specializing in premium automotive and motorsport framed
                artwork. Capitalizing on the explosive growth of car culture and
                Formula 1 in the Middle East, they offer highly curated pieces
                designed to be the "perfect gift" for enthusiasts.
                <br />
                <br />
                However, when we took on the project, we were starting with a
                completely blank slate. Despite having a strong localized
                product offering on the Salla platform, the brand was launching
                from zero—meaning there was no pixel data, no validated customer
                avatars, and no historical account data to feed the Meta
                algorithms for their regional expansion.
              </p>
            </div>
            <Link to="/" className="back-link interactive-back">
              <ArrowLeft size={16} /> Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Interactive Phase Navigation */}
        <div className="grid-cell col-span-12 phase-nav-cell">
          <div className="phase-tabs">
            {phases.map((phase) => (
              <button
                key={phase.id}
                className={`phase-tab ${activePhase === phase.id ? "active" : ""}`}
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.icon}
                <span>
                  Phase {phase.id}: {phase.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Cell based on Active Phase */}
        <div className="grid-cell col-span-12 phase-content-cell">
          {/* Phase 1 Content */}
          {activePhase === 1 && (
            <div className="phase-content fade-in">
              <div className="phase-header">
                <span className="phase-badge">Phase 1</span>
                <h2>Goals</h2>
              </div>
              <div className="phase-body">
                <p className="phase-description">
                  To ensure a successful and profitable market entry, the core
                  objectives for the launch phase were defined as follows:
                </p>
              </div>
              <div className="vertical-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Revenue Scaling</h3>
                    <p>
                      Drive immediate sales momentum by launching highly
                      targeted acquisition campaigns. The primary objective for
                      month one was to rapidly secure the first 100 customer
                      acquisitions while simultaneously gathering critical pixel
                      data to feed the Meta algorithm for future scaling.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Sustainable Profitability
                    </h3>
                    <p>
                      Establish a highly efficient full-funnel advertising
                      strategy that could maintain a consistent Return on Ad
                      Spend (ROAS) even as ad budgets were scaled.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Robust Technical Foundation
                    </h3>
                    <p>
                      Execute the complete technical setup of the tracking
                      ecosystem prior to launching any campaigns. This included
                      integrating the Meta Pixel and Conversions API (CAPI)
                      directly on the Salla platform to bypass modern browser
                      tracking limitations and guarantee accurate data
                      attribution.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">4</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Creative Validation & CAC Reduction
                    </h3>
                    <p>
                      Build a creative engine from scratch by collaborating with
                      UGC creators to test various marketing angles, define our
                      target customer avatars, and develop high-converting hooks
                      that would systematically lower the Customer Acquisition
                      Cost (CPA).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase 2 Content */}
          {activePhase === 2 && (
            <div className="phase-content fade-in">
              <div className="phase-header">
                <span className="phase-badge">Phase 2</span>
                <h2>The Challenge</h2>
              </div>
              <div className="phase-body">
                <p className="phase-description">
                  Motors Archive was launching as a brand-new e-commerce store
                  with zero account history, no pixel data, and zero organic
                  sales momentum. Launching a brand from scratch in a
                  competitive e-commerce landscape presented three critical
                  hurdles:
                </p>
              </div>
              <div className="vertical-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Zero Data & Attribution Loss
                    </h3>
                    <p>
                      Due to modern browser privacy restrictions and iOS
                      tracking updates, relying solely on standard browser pixel
                      tracking would result in heavy data loss and inefficient
                      optimization on the Salla platform.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Cold Audiences & Unvalidated Creatives
                    </h3>
                    <p>
                      Without existing customer avatars or proven creative
                      assets, the brand risked burning budget on broad,
                      unoptimized ad spend without understanding what hooks
                      actually resonated.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Profitable Scale Constraints
                    </h3>
                    <p>
                      The primary requirement was not just driving sales, but
                      achieving immediate profitability and maintaining a
                      minimum 2x ROAS while aggressively scaling monthly
                      revenue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase 3 Content */}
          {activePhase === 3 && (
            <div className="phase-content fade-in">
              <div className="phase-header">
                <span className="phase-badge">Phase 3</span>
                <h2>The Strategy</h2>
              </div>
              <div className="phase-body">
                <p className="phase-description">
                  To solve these challenges, a strategy was deployed across
                  three key pillars: technical tracking accuracy, structured
                  campaign architecture, and creative angle testing.
                </p>
              </div>
              <div className="vertical-timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Technical & Attribution</h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      Executed the complete technical setup of Meta Pixel and
                      Conversions API (CAPI) on Salla, alongside strict UTM
                      parameters to bypass limitations and guarantee precise
                      measurement.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Avatar Mapping & Psychology
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      Defined target customer avatars and mapped specific buyer
                      pain points to target underserved, high-intent audiences
                      and engineer high-converting marketing angles.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Scientific Creative Testing
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      Collaborated directly with UGC creators to produce
                      authentic video assets, systematically testing various
                      hooks to mathematically lower the Customer Acquisition
                      Cost (CAC).
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">4</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Full-Funnel Architecture</h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      Utilized ABO to isolate and validate new creatives,
                      migrating winners into CBO for algorithmic scaling while
                      systematically retargeting high-intent drop-offs.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">5</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Media Planning & Profitability
                    </h3>
                    <p style={{ fontSize: "0.875rem" }}>
                      Forecasted expected metrics based on initial data to guide
                      budget allocation, managing scale aggressively while
                      ensuring campaigns maintained a consistent 3.5x ROAS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Phase 4 Content */}
          {activePhase === 4 && (
            <div className="phase-content fade-in">
              <div className="phase-header">
                <span className="phase-badge">Phase 4</span>
                <h2>The Results</h2>
              </div>
              <div className="phase-body">
                <p className="phase-description">
                  Through systematic creative testing, disciplined budget
                  allocation, and precise technical tracking, the campaign
                  achieved rapid, profitable scale from day one:
                </p>
              </div>
              <div
                className="vertical-timeline"
                style={{ marginBottom: "var(--space-xl)" }}
              >
                <div className="timeline-item">
                  <div className="timeline-marker">1</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Scaled Revenue Generation
                    </h3>
                    <p>
                      After testing during the first month, I've Generated about
                      95k SAR in total purchase conversion value from 242
                      purchases, operating on a highly efficient ad spend of
                      around 14k SAR.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">2</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">
                      Exceptional Profitability
                    </h3>
                    <p>
                      Maintained an outstanding average 7.2x Return on Ad Spend
                      (ROAS) across all Meta paid acquisition campaigns.
                    </p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker">3</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Cost Efficiency</h3>
                    <p>
                      Achieved an average Customer Acquisition Cost (CAC) of 55
                      SAR, while driving strong middle-of-funnel intent with 629
                      adds to cart.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Carousel */}
              <div className="carousel-container interactive-carousel">
                <button
                  className="carousel-button prev"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
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
                        className={`carousel-dot ${index === currentImage ? "active" : ""}`}
                        onClick={() => setCurrentImage(index)}
                      />
                    ))}
                  </div>
                </div>
                <button
                  className="carousel-button next"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          )}

          {/* Phase 5 Content */}
          {activePhase === 5 && (
            <div className="phase-content fade-in">
              <div className="phase-header">
                <span className="phase-badge">Phase 5</span>
                <h2>Creatives</h2>
              </div>
              <div className="phase-body">
                <p className="phase-description">
                  A selection of top-performing video hooks and image creatives
                  developed for the campaign.
                </p>
              </div>

              <div className="creatives-grid">
                <div className="creative-item video-creative">
                  <video
                    src="motorsArchiveCreative1.mp4"
                    controls
                    muted
                    loop
                    playsInline
                    className="creative-media"
                  />
                </div>
                <div className="creative-item video-creative">
                  <video
                    src="motorsArchiveCreative2.mp4"
                    controls
                    muted
                    loop
                    playsInline
                    className="creative-media"
                  />
                </div>
                <div className="creative-item">
                  <img
                    src="motorsArchiveCreative3.jpg"
                    alt="Creative 3"
                    className="creative-media"
                  />
                </div>
                <div className="creative-item">
                  <img
                    src="motorsArchiveCreative4.jpg"
                    alt="Creative 4"
                    className="creative-media"
                  />
                </div>
                <div className="creative-item">
                  <img
                    src="motorsArchiveCreative5.jpg"
                    alt="Creative 5"
                    className="creative-media"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MotorsArchiveCaseStudy;
