
"use client";

import { useEffect, useState } from "react";

const expertise = [
  {
    number: "01",
    title: "Primary Care",
    text: "Comprehensive medical evaluation, diagnosis, treatment, and long-term health management.",
  },
  {
    number: "02",
    title: "Specialist Care",
    text: "Focused clinical care built around evidence, precision, and each patient's individual needs.",
  },
  {
    number: "03",
    title: "Preventive Medicine",
    text: "Proactive screening and personalized strategies designed to protect long-term health.",
  },
];

const experience = [
  {
    year: "2021 — Present",
    role: "Consultant Physician",
    place: "Private Medical Practice",
    text: "Providing comprehensive consultations, diagnosis, treatment planning, and ongoing patient care.",
  },
  {
    year: "2018 — 2021",
    role: "Senior Resident",
    place: "University Hospital",
    text: "Managed complex cases while collaborating with multidisciplinary clinical teams.",
  },
  {
    year: "2015 — 2018",
    role: "Medical Residency",
    place: "Teaching Hospital",
    text: "Completed advanced clinical training across multiple medical departments.",
  },
];

const publications = [
  {
    type: "Research",
    year: "2024",
    title: "Advances in Preventive and Personalized Medicine",
  },
  {
    type: "Publication",
    year: "2023",
    title: "Contemporary Approaches to Patient-Centered Care",
  },
  {
    type: "Conference",
    year: "2022",
    title: "Modern Clinical Practice and Healthcare Innovation",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const mostVisible = visibleSections[0];

        if (mostVisible?.target.id) {
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      section.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <button
            type="button"
            className="brand"
            onClick={() => scrollToSection("home")}
            aria-label="Go to home"
          >
            <span className="brand-mark">DR.</span>
            <span className="brand-name">PORTFOLIO</span>
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span />
            <span />
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
          >
            {["home", "about", "expertise", "experience", "research"].map(
              (item) => (
                <button
                  type="button"
                  key={item}
                  className={activeSection === item ? "active" : ""}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </button>
              )
            )}

            <button
              type="button"
              className="nav-appointment"
              onClick={() => scrollToSection("contact")}
            >
              Appointment
            </button>
          </nav>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />

        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />

        <div className="hero-content">
          <div className="availability">
            <span className="availability-dot" />
            Accepting new patients
          </div>

          <p className="eyebrow">Medical Portfolio · 2026</p>

          <h1>
            Dr. Maihan
            <span>Abdullah</span>
          </h1>

          <p className="hero-role">
            Specialist Physician
            <span>·</span>
            Medical Consultant
          </p>

          <p className="hero-description">
            Evidence-based medicine with a human approach. Dedicated to
            providing thoughtful, precise, and personalized healthcare.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-primary"
              onClick={() => scrollToSection("contact")}
            >
              Book an Appointment
              <span>↗</span>
            </button>

            <button
              type="button"
              className="button button-secondary"
              onClick={() => scrollToSection("about")}
            >
              Explore Profile
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-placeholder">
              <span>DOCTOR</span>
              <small>PHOTO</small>
            </div>

            <div className="portrait-label">
              <span>01</span>
              <span>PHYSICIAN</span>
            </div>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="floating-card card-top">
            <span className="card-icon">+</span>
            <div>
              <small>Approach</small>
              <strong>Patient First</strong>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="card-number">10+</span>
            <div>
              <small>Years</small>
              <strong>Experience</strong>
            </div>
          </div>

          <div className="medical-cross cross-one">+</div>
          <div className="medical-cross cross-two">+</div>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </section>

      <section id="about" className="about-section section">
        <div className="section-number">01 / ABOUT</div>

        <div className="about-grid">
          <div className="about-heading">
            <p className="eyebrow">A different approach</p>

            <h2>
              Medicine with
              <em>precision.</em>
            </h2>
          </div>

          <div className="about-copy">
            <p className="large-copy">
              Every patient deserves more than a diagnosis. They deserve to
              feel heard, understood, and confident in their care.
            </p>

            <p>
              With a commitment to evidence-based medicine and individualized
              treatment, my practice focuses on combining clinical expertise
              with genuine human connection.
            </p>

            <div className="stats">
              <div>
                <strong>10+</strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong>2K+</strong>
                <span>Patients Served</span>
              </div>

              <div>
                <strong>15+</strong>
                <span>Publications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="expertise-section section">
        <div className="section-number">02 / EXPERTISE</div>

        <div className="section-heading">
          <p className="eyebrow">Clinical expertise</p>
          <h2>
            Areas of <em>practice.</em>
          </h2>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <span className="card-index">{item.number}</span>

              <div className="expertise-icon">+</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section section">
        <div className="section-number">03 / EXPERIENCE</div>

        <div className="experience-layout">
          <div className="section-heading">
            <p className="eyebrow">Professional journey</p>
            <h2>
              Experience that
              <em>matters.</em>
            </h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.year}>
                <div className="timeline-year">{item.year}</div>

                <div className="timeline-marker">
                  <span />
                </div>

                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="research-section section">
        <div className="section-number">04 / RESEARCH</div>

        <div className="section-heading research-heading">
          <p className="eyebrow">Knowledge & contribution</p>
          <h2>
            Research & <em>publications.</em>
          </h2>
        </div>

        <div className="publication-list">
          {publications.map((item, index) => (
            <article className="publication" key={item.title}>
              <span className="publication-number">0{index + 1}</span>

              <div className="publication-type">{item.type}</div>

              <h3>{item.title}</h3>

              <span className="publication-year">{item.year}</span>

              <span className="publication-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-background" />

        <div className="contact-content">
          <p className="eyebrow">Let's talk</p>

          <h2>
            Your health.
            <br />
            <em>My priority.</em>
          </h2>

          <p className="contact-description">
            Whether you are looking for a consultation, a second opinion, or
            ongoing medical care, get in touch to discuss how I can help.
          </p>

          <button
            type="button"
            className="contact-button"
            onClick={() => scrollToSection("contact")}
          >
            Schedule an Appointment
            <span>↗</span>
          </button>

          <div className="contact-details">
            <div>
              <span>PHONE</span>
              <strong>+00 000 000 000</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>doctor@example.com</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>Medical Center · City</strong>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <span>© 2026 Dr. Maihan Abdullah</span>
          <span>Medical Portfolio</span>
        </footer>
      </section>
    </main>
  );
}

