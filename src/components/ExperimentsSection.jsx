import React from "react";
import { TrendingUp } from "lucide-react";
import CountUpModule from "react-countup";
import "./ExperimentsSection.css";
const CountUp = CountUpModule.default || CountUpModule;

const StatCard = ({
  endNum,
  textValue,
  prefix = "",
  suffix = "",
  title,
  desc,
  minWidth = "120px",
}) => (
  <div className="stat-card-container">
    <div className="stat-card-text-group">
      <h3 className="stat-card-title">{title}</h3>
      <p className="stat-card-desc">{desc}</p>
    </div>
    <div className="stat-card-value-container" style={{ minWidth: minWidth }}>
      {textValue ? (
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {textValue}
        </span>
      ) : (
        <>
          {prefix && <span className="stat-card-prefix">{prefix}</span>}
          <CountUp end={endNum} duration={3.5} separator="," />
          {suffix && <span className="stat-card-suffix">{suffix}</span>}
        </>
      )}
    </div>
  </div>
);

const ExperimentsSection = () => {
  return (
    <div className="experiments-container">
      <div className="experiments-header">
        <TrendingUp size={16} color="var(--badge-green)" />
        HIGH-LEVEL STATS
      </div>

      <div className="experiments-content">
        <StatCard
          endNum={450000}
          suffix=" SAR"
          title="Total Ad Spend"
          desc="Managed on Meta, Snapchat, Google Ads, and Tiktok"
          minWidth="160px"
        />
        <StatCard
          endNum={12}
          prefix="x"
          title="Peak ROAS"
          desc="Through rigorous creative testing"
        />
        <StatCard
          textValue="Team Lead"
          title="Career Milestone"
          desc="Promoted to be a team lead"
        />
        <StatCard
          endNum={10}
          prefix="+"
          title="Key Verticals"
          desc="SaaS, E-commerce, Real Estate, Healthcare, Cosmetics, and B2B"
        />
      </div>
    </div>
  );
};

export default ExperimentsSection;
