import React from "react";
import { MonitorPlay, ArrowUpRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import "./WorkSection.css";

const WorkCard = ({ title, desc, watermark, linkTo, underDevelopment }) => (
  <div className="work-card">
    <h3 className="work-card-title">{title}</h3>
    <p className="work-card-desc">{desc}</p>
    <div className="work-card-button-wrapper">
      {underDevelopment ? (
        <button
          className="work-card-button"
          disabled
          style={{
            opacity: 0.5,
            cursor: "not-allowed",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Under Development <Lock size={14} style={{ marginLeft: "6px" }} />
        </button>
      ) : linkTo ? (
        <Link
          to={linkTo}
          className="work-card-button"
          style={{
            display: "inline-flex",
            textDecoration: "none",
            alignItems: "center",
          }}
        >
          View more{" "}
          <ArrowUpRight
            size={18}
            className="arrow-icon"
            style={{ marginLeft: "4px" }}
          />
        </Link>
      ) : (
        <button
          className="work-card-button"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          View more{" "}
          <ArrowUpRight
            size={18}
            className="arrow-icon"
            style={{ marginLeft: "4px" }}
          />
        </button>
      )}
    </div>

    {/* Watermark */}
    <div className="work-card-watermark">{watermark}</div>
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
          title="Motors Archive"
          desc="Launching & Scaling Motors Archive from 0 to 90,000 SAR/Month with Meta Ads."
          watermark="M"
          linkTo="/case-study/motors-archive"
        />
        <WorkCard
          title="Medical Lab"
          title="Alfa Labs"
          desc="Scaling lead generation and patient acquisition for a premium medical laboratory."
          watermark="L"
          watermark="A"
          underDevelopment={true}
        />
        <WorkCard
          title="Cuba Jeans"
          desc="Driving full-funnel e-commerce growth and optimizing ROAS for a leading denim brand."
          desc="Generating high-quality B2B leads to connect a major denim factory with retail clothing stores and local fashion brands."
          watermark="C"
          underDevelopment={true}
        />
      </div>
    </div>
  );
};

export default WorkSection;
