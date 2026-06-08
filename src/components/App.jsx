import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import About from "./About";
import Gemini from "./Gemini";
import Projects from "./Projects";
import Footer from "./Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleGetInTouch = (e) => {
    e.preventDefault();
    const targetNode =
      document.querySelector(".system-footer") ||
      document.getElementById("footer");
    if (targetNode) {
      targetNode.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const sections = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("projects"),
      document.getElementById("footer"),
    ].filter(Boolean);

    // 1. Entrance Intersection Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-revealed");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" },
    );

    sections.forEach((target) => revealObserver.observe(target));

    // 2. Active Anchor Link Observer
    const trackerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetId = entry.target.getAttribute("id");
            if (targetId) setActiveSection(targetId);
          }
        });
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((target) => trackerObserver.observe(target));

    // 3. Continuous Parallax Metric Tracker
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          if (maxScroll > 0) {
            const progress = window.scrollY / maxScroll;
            document.documentElement.style.setProperty(
              "--scroll-reveal-progress",
              progress,
            );
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      trackerObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="unified-container" id="app-viewport">
      {/* FIXED NAVIGATION FRAME */}
      <div className="nav-fixed-frame">
        <div className="logo">KHAN</div>

        <nav className="capsule-dock">
          <a
            href="#home"
            className={`dynamic-anchor ${activeSection === "home" ? "active-node" : ""}`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`dynamic-anchor ${activeSection === "about" ? "active-node" : ""}`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`dynamic-anchor ${activeSection === "projects" ? "active-node" : ""}`}
          >
            Projects
          </a>
          <a
            href="#footer"
            className={`dynamic-anchor ${activeSection === "footer" ? "active-node" : ""}`}
          >
            Contact
          </a>
        </nav>

        <a className="cta-btn" href="#footer" onClick={handleGetInTouch}>
          Get in touch
        </a>
      </div>

      {/* PORTFOLIO SECTIONS */}
      <Hero />
      <About />
      <Gemini />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
