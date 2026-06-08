import React from "react";

function Hero() {
  return (
    <section className="hero-canvas" id="home">
      <div className="hero-image-container">
        {/* 2. Use the variable inside curly braces {} instead of a string path */}
        <img
          src="me.png"
          alt="Khan Ong Fernandez Portrait"
          className="blended-portrait"
        />
      </div>

      <main className="main-content">
        <div className="hero-left">
          <span className="greeting-text">I'm Khan Ong Fernandez</span>
          <h1 className="giant-title">Systems Developer</h1>
        </div>

        <div className="hero-right">
          <h2 className="side-heading">
            Building secure, mission-critical systems.
          </h2>
          <p className="side-paragraph">
            Focused on automating workflows, optimizing core software
            architectures, and learning to integrate modern pipelines in
            high-security environments.
          </p>
        </div>
      </main>

      <div className="hero-footer">
        <div className="footer-column">
          <span className="column-index">// CORE.01</span>
          <span className="column-title">
            State Machines & Search Optimization
          </span>
        </div>
        <div className="footer-column">
          <span className="column-index">// CORE.02</span>
          <span className="column-title">
            Data Transformation & CV Workflows
          </span>
        </div>
        <div className="footer-column">
          <span className="column-index">// CORE.03</span>
          <span className="column-title">Backend Systems</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
