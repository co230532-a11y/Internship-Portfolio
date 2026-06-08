import React from "react";
// Import your avatar directly from the assets folder setup

function Footer() {
  // Navigation mapping array to completely replace the vanilla IIFE script block
  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <footer className="system-footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* BRAND COLUMN */}
          <div className="footer-brand">
            <div className="brand-header">
              <img
                src="/me.png"
                alt="Khan Ong Fernandez"
                className="brand-avatar"
              />
              <span className="brand-name">Khan Ong Fernandez</span>
            </div>
            <p className="brand-description">
              Computer Science · Airman PAF · Systems Developer
            </p>
          </div>

          {/* DYNAMIC NAVIGATION LINKS COLUMN */}
          <div className="footer-link-group">
            <p className="footer-title">Navigation</p>
            <div className="footer-links" id="footer-links">
              {navigationLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT & CHANNELS COLUMN */}
          <div className="footer-contact-col">
            <p className="footer-title">Contact</p>

            <a
              id="email-cta"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=co230532@adzu.edu.ph&su=Inquiry%20from%20Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="email-cta-btn"
            >
              <i className="fa-regular fa-envelope"></i>
              <span>co230532@adzu.edu.ph</span>
            </a>

            <a>0994-900-7934</a>
            <br />

            <div className="contact-text">
              <i className="fa-solid fa-location-dot"></i>
              <span>Zamboanga City - Del Sur, PH</span>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/co230532-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile Link"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.facebook.com/khn.fernandez"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook Profile Link"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* BOTTOM ATTRIBUTION TRACK */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Khan Ong Fernandez. All rights reserved.
          </p>
          <p className="footer-tagline">Built with precision.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
