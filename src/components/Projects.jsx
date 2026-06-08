import React, { useState, useEffect } from "react";
// Import your structural project JSON datastore directly 
import initialProjectsData from "/projects_data.json";

function Projects() {
  const SCRIPT_DEPLOY_ID = "AKfycbzl6-Ho2OQBoo1-IkFMEEXV6w2dKlTGmq7rRdWJoJ9cCkr9A4smNH2QSMZ6ihyow1x9zA";
  
  // 1. Manage UI State via React Hooks
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);
  const [projectGalleries, setProjectGalleries] = useState({});

  // Categories definition mapping data keys
  const categories = [
    { label: "All Projects", filter: "all" },
    { label: "Mobile", filter: "mobile" },
    { label: "Simulators", filter: "systems" },
    { label: "IoT", filter: "iot" },
    { label: "AI/ML", filter: "ai-ml" },
    { label: "Web", filter: "web" },
  ];

  // 2. Lifecycle: Fetch asset image arrays from your Google Apps Script pipeline
  useEffect(() => {
    initialProjectsData.forEach((proj) => {
      if (!proj.drive_id) return;

      const url = `https://script.google.com/macros/s/${SCRIPT_DEPLOY_ID}/exec?folderId=${proj.drive_id}`;
      
      fetch(url)
        .then((res) => res.json())
        .then((ids) => {
          if (Array.isArray(ids) && ids.length > 0) {
            const verifiedIds = ids.filter((id) => typeof id === "string").map(id => id.trim());
            setProjectGalleries((prev) => ({ ...prev, [proj.drive_id]: verifiedIds }));
          }
        })
        .catch((err) => console.error(`Error streaming drive gallery for ${proj.project_name}:`, err));
    });
  }, []);

  // Keyboard accessibility handler for Esc key on open Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter projects matrix dynamically based on active categorization state
  const filteredProjects = initialProjectsData.filter(
    (proj) => activeFilter === "all" || proj.category === activeFilter
  );

  return (
    <section className="projects-canvas" id="projects">
      <div className="section-label-group">
        <span className="section-label-number">02 . PROJECTS</span>
      </div>

      <div className="section-header">
        <span className="section-subtitle">Featured Work</span>
        <h2 className="section-title">Projects & Systems</h2>
        <p className="section-description">
          A collection of mission-critical systems, full-stack applications, and IoT
          solutions built to solve real-world problems across mobile, web, and
          embedded platforms.
        </p>
      </div>

      {/* CORE ENGINEERING CAPABILITIES GRID */}
      <div className="skills-container">
        <div className="skills-section-heading">Core Engineering Capabilities</div>
        <div className="skills-grid">
          <div className="skills-card">
            <h4>Core Development</h4>
            <p>Systems-level & application programming</p>
            <div className="skills-pill-box">
              {["C / C++", "Java", "Python", "Android SDK", "Data Structures"].map((tech) => (
                <span key={tech} className="skills-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="skills-card">
            <h4>Frontend Tech</h4>
            <p>Responsive and clean web interfaces</p>
            <div className="skills-pill-box">
              {["HTML", "CSS", "JavaScript", "React"].map((tech) => (
                <span key={tech} className="skills-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="skills-card">
            <h4>Design Tools</h4>
            <p>Visual design and media production</p>
            <div className="skills-pill-box">
              <span className="skills-pill">Figma</span>
            </div>
          </div>

          <div className="skills-card">
            <h4>Tools & Systems</h4>
            <p>Dev tooling and embedded systems</p>
            <div className="skills-pill-box">
              {["Arduino IDE", "SQL", "Git", "REST APIs"].map((tech) => (
                <span key={tech} className="skills-pill">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BUTTONS DOCK */}
      <div className="filter-navigation-bar">
        {categories.map((cat) => (
          <button
            key={cat.filter}
            className={`filter-button ${activeFilter === cat.filter ? "active" : ""}`}
            onClick={() => setActiveFilter(cat.filter)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* DYNAMIC COMPILER TARGET ENVIRONMENT */}
      <div className="projects-grid" id="dynamic-projects-target">
        {filteredProjects.map((proj) => {
          const galleryIds = projectGalleries[proj.drive_id] || [];

          return (
            <div key={proj.project_id} className="project-card">
              <div>
                <div className="project-meta-row">
                  <span className="project-id">{proj.project_id}</span>
                  <span className="project-sub" style={{ textTransform: "uppercase", letterSpacing: "0.05em", color: "#6b6b6f" }}>
                    {proj.project_sub}
                  </span>
                </div>
                <h3 className="project-heading">{proj.project_name}</h3>
                <p className="project-body">
                  <strong>Overview:</strong> {proj.overview}
                  <br /><br />
                  <strong>Challenge:</strong> {proj.challenge}
                  <br /><br />
                  <strong>Solution:</strong> {proj.solution}
                </p>
              </div>

              <div>
                {/* Dynamic Google Drive Thumbnail Sheet Generation */}
                <div className="gallery-target-wrapper">
                  <section className="pinterest-gallery">
                    {galleryIds.length === 0 ? (
                      // Renders 4 loading skeletons while asynchronous payload settles
                      Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="gallery-item">
                          <div className="skeleton-element"></div>
                        </div>
                      ))
                    ) : (
                      galleryIds.map((id, idx) => {
                        const thumbUrl = `https://drive.google.com/thumbnail?id=${id}&sz=w400`;
                        return (
                          <button
                            key={id}
                            type="button"
                            className="gallery-item"
                            aria-label={`View visual node ${idx + 1}`}
                            onClick={() => setLightboxImage(thumbUrl)}
                          >
                            <img src={thumbUrl} alt="System operation trace" loading="lazy" />
                          </button>
                        );
                      })
                    )}
                  </section>
                </div>
                <br />
                <div className="tag-container">
                  {proj.tech_tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* NATIVE LIGHTBOX MODAL FRAMEWORK */}
      {lightboxImage && (
        <div
          className="projects-lightbox"
          style={{ display: "flex" }}
          role="dialog"
          aria-modal="true"
          aria-label="Visual evaluation view container"
          onClick={(e) => {
            // Close if background mask wrapper clicked directly
            if (e.target.classList.contains("projects-lightbox") || e.target.classList.contains("projects-lightbox-close")) {
              setLightboxImage(null);
            }
          }}
        >
          <span className="lightbox-close projects-lightbox-close">×</span>
          <img className="projects-lightbox-img" src={lightboxImage} alt="Enlarged system asset snapshot" />
        </div>
      )}
    </section>
  );
}

export default Projects;