import React from 'react';
import { MonitorPlay, ArrowUpRight } from 'lucide-react';

const WorkCard = ({ title, desc, watermark }) => (
  <div style={{ 
    backgroundColor: '#fff', 
    border: '1px solid var(--grid-line-color)', 
    borderRadius: 'var(--radius-lg)', 
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
    height: '100%',
    minHeight: '280px'
  }}>
    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem', letterSpacing: '-0.02em', position: 'relative', zIndex: 1 }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', flex: 1, position: 'relative', zIndex: 1, maxWidth: '80%' }}>
      {desc}
    </p>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        padding: '0.5rem 1rem', 
        border: '1px solid var(--grid-line-color)', 
        borderRadius: '20px', 
        fontSize: '0.8rem', 
        fontWeight: '600',
        backgroundColor: '#fff'
      }}>
        View more <ArrowUpRight size={14} color="var(--text-light)" />
      </button>
    </div>
    
    {/* Watermark */}
    <div style={{ 
      position: 'absolute', 
      bottom: '-2rem', 
      right: '-1rem', 
      fontSize: '12rem', 
      fontWeight: '900', 
      color: '#f9fafb', 
      lineHeight: 1,
      zIndex: 0,
      userSelect: 'none'
    }}>
      {watermark}
    </div>
  </div>
);

const WorkSection = () => {
  return (
    <div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        fontSize: '0.75rem', 
        fontWeight: '600', 
        letterSpacing: '0.05em', 
        color: 'var(--text-primary)', 
        marginBottom: '2rem' 
      }}>
        <MonitorPlay size={16} color="var(--badge-green)" />
        WORK
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
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
