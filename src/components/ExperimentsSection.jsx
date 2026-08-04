import React from 'react';
import { TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

const StatCard = ({ endNum, prefix = "", suffix = "", title, desc }) => (
  <div style={{ 
    padding: '1.25rem', 
    border: '1px solid var(--grid-line-color)', 
    borderRadius: 'var(--radius-md)',
    marginBottom: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.02)'
  }}>
    <div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.25rem', color: 'var(--text-light)' }}>{title}</h3>
      <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: '500' }}>{desc}</p>
    </div>
    <div style={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem 1rem', 
      backgroundColor: '#f9fafb', 
      borderRadius: '8px', 
      border: '1px solid #f3f4f6',
      fontSize: '1.5rem',
      fontWeight: '700',
      color: 'var(--text-primary)'
    }}>
      <span style={{ color: 'var(--badge-green)', marginRight: '2px' }}>{prefix}</span>
      <CountUp end={endNum} duration={3.5} separator="," />
      <span style={{ color: 'var(--badge-green)', marginLeft: '2px' }}>{suffix}</span>
    </div>
  </div>
);

const ExperimentsSection = () => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
        <TrendingUp size={16} color="var(--badge-green)" />
        HIGH-LEVEL STATS
      </div>

      <div style={{ flex: 1 }}>
        <StatCard 
          endNum={600} 
          suffix="K+ SAR" 
          title="Total Ad Spend" 
          desc="Managed on Meta & Snapchat" 
        />
        <StatCard 
          endNum={7} 
          suffix="x ROAS" 
          title="Peak Return on Ad Spend" 
          desc="Through rigorous creative testing" 
        />
        <StatCard 
          endNum={100} 
          suffix="+" 
          title="High-Quality B2B Leads" 
          desc="Acquired within first 30 days" 
        />
        <StatCard 
          endNum={4} 
          title="E-commerce Verticals" 
          desc="Coffee, Fashion, Tech & B2B" 
        />
      </div>
    </div>
  );
};

export default ExperimentsSection;
