import React from 'react';

function Gemini() {
  return (
    <section className="agent-canvas" id="agent-infrastructure">
      <div className="agent-container">
        
        {/* AGENT MODULE HEADER AREA */}
        <div className="agent-header">
          <div className="header-badge">
            <span className="pulse-beacon"></span>
            SYSTEM CO-PILOT CONFIGURATION
          </div>
          <h2>Core Engine: Gemini Agent</h2>
          <div className="pipeline-tag">ENV // GLOBAL INTEGRATION</div>
        </div>

        {/* INTERACTIVE COMPONENT GRID LAYOUT */}
        <div className="agent-grid">
          
          {/* VISUAL & TERMINAL CONSOLE PANEL */}
          <div className="agent-visual-panel">
            <div className="gemini-branding-matrix">
              <svg className="gemini-vector" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C12 6.62742 6.62742 12 0 12C6.62742 12 12 17.3726 12 24C12 17.3726 17.3726 12 24 12C17.3726 12 12 6.62742 12 0Z" fill="url(#geminiAccentGrad)" />
                <defs>
                  {/* Updated custom layout linear gradient colors to match your reference markup */}
                  <linearGradient id="geminiAccentGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="60%" stopColor="#ff5a1f" />
                    <stop offset="100%" stopColor="#a3320b" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="glow-layer"></div>
            </div>

            {/* INTEGRATED DESKTOP CONSOLE EMULATOR */}
            <div className="embedded-terminal">
              <div className="term-bar">
                <span className="t-dot"></span>
                <span className="t-dot"></span>
                <span className="t-dot"></span>
                <span className="term-label">gemini_runtime.sh</span>
              </div>
              <div className="term-body">
                <p><span className="p-sign">khan@infrastructure:~#</span> target --scope --all-projects</p>
                <p className="p-out">// HOOKING CO-PILOT INTELLIGENCE TO LOCAL REPOSITORIES...</p>
                <p className="p-out">[SUCCESS] Pipeline verified across hardware, simulation, & web layers.</p>
                <p><span className="p-sign">khan@infrastructure:~#</span> active-agent --status</p>
                <p className="p-out" style={{ color: "#ff5a1f" }}>SYSTEM STABLE // CONTEXT WINDOW SECURE</p>
                <p><span className="p-sign">khan@infrastructure:~#</span> <span className="term-cursor">▒</span></p>
              </div>
            </div>
          </div>

          {/* ORCHESTRATION CONTENT PANEL */}
          <div className="agent-content-panel">
            <h3>Workspace Orchestration</h3>
            <p>
              I use <strong>Gemini Agent</strong> for building my projects across every repository I maintain. Rather than treating artificial intelligence as a simple boilerplate generator or a text lookup assistant, it acts as an active infrastructure extension throughout my entire software development lifecycles.
            </p>
            
            <p>
              By pairing structural logic designs with the agent's long-context reasoning capabilities, my deployment workflow keeps a highly disciplined approach to optimization, system scaling, and documentation standards.
            </p>

            <div className="integration-breakdown">
              
              <div className="breakdown-row">
                <div className="row-meta">
                  <span className="row-num">01</span>
                  <h4>Algorithmic Optimization</h4>
                </div>
                <p>Auditing runtime complexities, data structure pointer safety, and balancing state tracking arrays inside simulation environments.</p>
              </div>

              <div className="breakdown-row">
                <div className="row-meta">
                  <span className="row-num">02</span>
                  <h4>Hardware Logic Calibration</h4>
                </div>
                <p>Refining analog sensor tracking filters, timing debounces, and operational relay triggers inside low-level microcontroller layers.</p>
              </div>

              <div className="breakdown-row">
                <div className="row-meta">
                  <span className="row-num">03</span>
                  <h4>Asynchronous Pipelines</h4>
                </div>
                <p>Structuring clean JSON data structures, localized fetch protocols, and reliable asynchronous state patterns inside web platforms.</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Gemini;