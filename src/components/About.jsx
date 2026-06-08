import React from 'react';

function About() {
  return (
    <section className="about-canvas" id="about">
      <div className="section-header">
        <span className="section-title-label">01 . About Me</span>
        <span className="section-node-tag">AUTONOMOUS PROFILE NODE</span>
      </div>

      <div className="about-grid-workspace">
        <div className="about-identity-column">
          <h2>
            Bridging high-level systems architecture with embedded mission hardware engineering.
          </h2>
        </div>

        <div className="about-biography-column">
          <p>
            I am a hands-on developer specialized in crafting reliable digital solutions,
            ranging from native mobile ecosystems to embedded IoT telemetry microcontrollers. 
            My focus lies in building systems that maintain performance and integrity under stress.
          </p>
          <p>
            With deep roots across full-stack design environments, Linux systems optimization, and hardware system 
            integrations, I approach software construction with clean documentation and low latency as core benchmarks.
          </p>
        </div>
      </div>

      <div className="about-footer-metrics">
        <div className="metric-block">
          <span className="metric-num">08</span>
          <div className="metric-details-wrapper">
            <span className="metric-label">SYS / DEPL</span>
            <span className="metric-subtext">Functional engineered solutions active in your database.</span>
          </div>
        </div>

        <div className="metric-block">
          <span className="metric-num">03</span>
          <div className="metric-details-wrapper">
            <span className="metric-label">ENV / ARCH</span>
            <span className="metric-subtext">Distinct core categories across mobile, systems, and web tracks.</span>
          </div>
        </div>

        <div className="metric-block">
          <span className="metric-num">12</span>
          <div className="metric-details-wrapper">
            <span className="metric-label">TECH / TAGS</span>
            <span className="metric-subtext">Languages and frameworks utilized throughout project lifecycles.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;