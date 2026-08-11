import React from 'react';
import { MonitorPlay, ArrowUpRight } from 'lucide-react';
import './WorkSection.css';

const WorkCard = ({ title, desc, watermark }) => (
  <div className="work-card">
    <h3 className="work-card-title">{title}</h3>
    <p className="work-card-desc">
      {desc}
    </p>
    <div className="work-card-button-wrapper">
      <button className="work-card-button">
        View more <ArrowUpRight size={14} color="var(--text-light)" />
      </button>
    </div>
    
    {/* Watermark */}
    <div className="work-card-watermark">
      {watermark}
    </div>
  </div>
);

const WorkSection = () => {
  return (
    <div>
      <div className="work-header">
        <MonitorPlay size={16} color="var(--badge-green)" />
        WORK
      </div>
      
      <div className="work-grid">
        <WorkCard 
          title="Awesome AI" 
          desc="Had a stupid itch to build a Hacker News for AI in the style of Windows 95. So I did." 
          watermark="A"
        />
        <WorkCard 
          title="A-Barber" 
          desc="Some branding, marketing design and web development for my dear sister-in-law." 
          watermark="A"
        />
        <WorkCard 
          title="Õunaturg" 
          desc="Designed, co-built and sold a marketplace for selling second-hand Apple products." 
          watermark="&"
        />
      </div>
    </div>
  );
};

export default WorkSection;
