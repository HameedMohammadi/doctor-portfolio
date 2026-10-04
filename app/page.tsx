"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
];

const researchAreas = [
  {
    number: "01",
    title: "Cancer Control",
    text: "Cancer prevention, early detection, diagnosis, treatment, palliative care, and health-system strengthening.",
  },
  {
    number: "02",
    title: "Public Health Research",
    text: "Population-based research and surveillance generating evidence for public health decision-making.",
  },
  {
    number: "03",
    title: "Health Policy",
    text: "Strategic planning, policy development, implementation, monitoring, and evaluation across health systems.",
  },
  {
    number: "04",
    title: "Global Health",
    text: "Research and program development at the intersection of health systems, equity, policy, and international collaboration.",
  },
];

const highlights = [
  {
    number: "10,000+",
    label: "Cancer cases",
    detail: "recorded through Afghanistan's first population-based cancer registry",
  },
  {
    number: "100+",
    label: "Training programs",
    detail: "in cancer prevention, detection, treatment, palliative care and cancer registry",
  },
  {
    number: "2000+",
    label: "Health professionals",
    detail: "reached through national cancer-related training programs",
  },
];

const experience = [
  {
    year: "2024 — Present",
    role: "Department Associate",
    place: "Harvard T.H. Chan School of Public Health · Boston, USA",
    text: "Conducting research on cancer prevention and control, analyzing data and generating evidence to inform healthcare and public health policy.",
  },
  {
    year: "2022 — 2024",
    role: "Postdoctoral Research Fellow",
    place: "Harvard T.H. Chan School of Public Health · Boston, USA",
    text: "Coordinated cancer research projects, analyzed data, developed publications and presented findings through seminars and conferences.",
  },
  {
    year: "2021",
    role: "Senior Expert, National Cancer Strategy Development",
    place: "GIZ · Kabul, Afghanistan",
    text: "Led the national cancer-control capacity assessment and coordinated stakeholders in the development of Afghanistan's national cancer strategy.",
  },
  {
    year: "2021",
    role: "Consultant, National NCDs Strategy Development",
    place: "World Health Organization · Kabul, Afghanistan",
    text: "Led development of the National Strategic Plan for Prevention and Control of Non-Communicable Diseases and Injuries, including operational, budgetary and monitoring components.",
  },
  {
    year: "2016 — 2021",
    role: "National Cancer Control Program",
    place: "Ministry of Public Health · Afghanistan",
    text: "Established and led the National Cancer Control Program, developed national partnerships and strengthened cancer prevention and control capacity.",
  },
  {
    year: "2014 — 2016",
    role: "National Health Promotion Consultant",
    place: "EPOS (GOPA) / European Commission · Kabul, Afghanistan",
    text: "Designed and implemented health-promotion initiatives, developed policies and strengthened partnerships for chronic disease prevention.",
  },
];

const publications = [
  {
    year: '2026',
    title:
      'The descriptive epidemiology of gastric cancer in Afghanistan: a population-based cancer registry, 2018–2020',
    journal: 'Gastric Cancer · 29(3), 550–560',
    doi: '10.1007/s10120-026-01734-x',
    doiUrl: 'https://doi.org/10.1007/s10120-026-01734-x',
  },
  {
    year: '2026',
    title:
      'Cancer care in Afghanistan: A comprehensive analysis of opportunities and challenges in a low-income and conflict-affected country',
    journal: 'International Journal of Cancer',
    doi: '10.1002/ijc.70431',
    doiUrl: 'https://doi.org/10.1002/ijc.70431',
  },
  {
    year: '2025',
    title:
      'Cancer Incidence in Kabul, Afghanistan: The First Report From the Population-Based Cancer Registry',
    journal: 'Cancer Medicine · 14(8), e70844',
    doi: '10.1002/cam4.70844',
    doiUrl: 'https://doi.org/10.1002/cam4.70844',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/40249646/',
  },
  {
    year: '2025',
    title: 'Cancer care in SAARC countries',
    journal: 'The Lancet Oncology · 26(3), e125',
    doi: '10.1016/S1470-2045(25)00067-1',
    doiUrl: 'https://doi.org/10.1016/S1470-2045(25)00067-1',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/40049201/',
  },
  {
    year: '2023',
    title:
      'Banning women from public spaces in Afghanistan: the health and economic consequences of the new regulation',
    journal: 'Medicine, Conflict and Survival',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/37291699/',
  },
  {
    year: '2023',
    title:
      'Estimating the Cancer Treatment Cost for 5 Common Types of Cancer with Separating Out-of-Pocket and Governmental Costs in Afghanistan, 2020',
    journal: 'Asian Pacific Journal of Cancer Prevention · 24(4), 1103–1104',
    pubmedUrl: 'https://pubmed.ncbi.nlm.nih.gov/37116128/',
  },
];

const education = [
  {
    year: "2011 — 2013",
    degree: "Master of Public Health",
    institution: "University of Missouri · Columbia, USA",
  },
  {
    year: "1998 — 2006",
    degree: "Doctor of Medicine",
    institution: "Kandahar University Faculty of Medicine · Afghanistan",
  },
];

const teaching = [
  "Cancer Registry · Kabul Cancer Registry",
  "Research Methodology · Afghanistan National Public Health Institute",
  "Cancer Prevention and Control · National Cancer Control Program",
  "Cancer Prevention and Control · Kateb and Cheragh Universities",
  "Fulbright Student Mentorship · Afghanistan Fulbright Association",
];

const awards = [
  "Fulbright — U.S. Department of State",
  "Achievement Award — National Assembly of Afghanistan",
  "Achievement Award — Senate of Afghanistan",
  "Gama Eta Chapter — Delta Omega Honorary Society of Public Health",
  "Achievement Award — Afghanistan's Doctors and Healthcare Workers Association",
  "University of Missouri Public Health Program — 10 Year Anniversary Alumni Award",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    setActiveSection(id);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    section.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
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
            aria-label="Go to homepage"
          >
            <span className="brand-initials">MA</span>
            <span className="brand-divider" />
            <span className="brand-text">
              <strong>MAIHAN ABDULLAH</strong>
              <small>MD · MPH</small>
            </span>
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
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                className={activeSection === item.id ? "active" : ""}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              className="nav-contact"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <p className="hero-kicker">
            PUBLIC HEALTH · RESEARCH · CANCER CONTROL
          </p>

          <h1>
            Maihan
            <span>Abdullah</span>
          </h1>

          <div className="hero-rule" />

          <p className="hero-title">
            Public Health Researcher
            <span>·</span>
            Cancer Control & Health Policy
          </p>

          <p className="hero-description">
            MD, MPH and public health researcher working at the intersection
            of cancer prevention, health systems, policy, and evidence-based
            public health.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="button button-dark"
              onClick={() => scrollToSection("research")}
            >
              Explore Research
              <span>↗</span>
            </button>

            <button
              type="button"
              className="button button-outline"
              onClick={() => scrollToSection("publications")}
            >
              Publications
            </button>
          </div>
        </div>

        <div className="hero-side">
          <div className="academic-mark">
            <span>MD</span>
            <span>MPH</span>
          </div>

          <div className="hero-photo">
            <div className="photo-placeholder">
              <span>MA</span>
              <small>PORTRAIT</small>
            </div>
          </div>

          <div className="hero-caption">
            <span>01</span>
            <p>
              Researching health systems
              <br />
              and cancer control
            </p>
          </div>
        </div>

        <div className="hero-bottom">
          <span>HARVARD T.H. CHAN SCHOOL OF PUBLIC HEALTH</span>
          <span>SCROLL ↓</span>
        </div>
      </section>

      {/* PROFILE */}
      <section id="profile" className="profile-section section">
        <div className="section-label">
          <span>01</span>
          PROFILE
        </div>

        <div className="profile-grid">
          <div className="profile-heading">
            <p className="eyebrow">Research with purpose</p>

            <h2>
              Evidence for
              <em>better health.</em>
            </h2>
          </div>

          <div className="profile-copy">
            <p className="intro-copy">
              Dr. Maihan Abdullah is a public health researcher and physician
              whose work focuses on cancer prevention and control, health
              systems, policy development, and population health.
            </p>

            <p>
              His career spans academic research, national health strategy,
              cancer-control program leadership, international public health,
              and capacity building. He currently serves as a Department
              Associate at Harvard T.H. Chan School of Public Health.
            </p>

            <p>
              His research aims to generate practical evidence that can
              strengthen cancer prevention, screening, diagnosis, treatment,
              patient navigation, and health policy—particularly in
              low-resource and conflict-affected settings.
            </p>

            <div className="profile-actions">
  <button
    type="button"
    className="text-link"
    onClick={() => scrollToSection("experience")}
  >
    View professional journey
    <span>↗</span>
  </button>

  <a
    href="/Maihan-Abdullah-CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-link"
  >
    View CV
    <span>↗</span>
  </a>
</div>
          </div>
        </div>

        <div className="impact-grid">
          {highlights.map((item) => (
            <article className="impact-card" key={item.label}>
              <strong>{item.number}</strong>
              <span>{item.label}</span>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="research-focus-section section">
        <div className="section-label">
          <span>02</span>
          RESEARCH
        </div>

        <div className="research-intro">
          <div>
            <p className="eyebrow">Areas of work</p>
            <h2>
              Research at the
              <br />
              <em>system level.</em>
            </h2>
          </div>

          <p>
            Combining clinical training with public health research and
            program leadership to address complex health challenges through
            evidence, strategy, and collaboration.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((item) => (
            <article className="research-card" key={item.number}>
              <span className="research-number">{item.number}</span>
              <div className="research-card-line" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="research-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="experience-section section">
        <div className="section-label">
          <span>03</span>
          EXPERIENCE
        </div>

        <div className="experience-header">
          <p className="eyebrow">Academic & professional journey</p>
          <h2>
            From national
            <em>health systems</em>
            to global research.
          </h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.year}-${item.role}`}>
              <div className="timeline-date">{item.year}</div>

              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-body">
                <p className="timeline-place">{item.place}</p>
                <h3>{item.role}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS */}
      {/* PUBLICATIONS */}
<section id="publications" className="publications-section section">
  <div className="section-label">
    <span>04</span>
    PUBLICATIONS
  </div>

  <div className="publications-header">
    <p className="eyebrow">Selected scholarly work</p>

    <h2>
      Research in
      <br />
      <em>practice.</em>
    </h2>
  </div>

  <div className="publication-list">
    {publications.map((item, index) => (
      <article className="publication reveal" key={item.title}>
        <div className="publication-index">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="publication-main">
          <span className="publication-year">{item.year}</span>

          <h3>{item.title}</h3>

          <p>{item.journal}</p>

          <div className="publication-links">
            {item.doiUrl && (
              <a
                href={item.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                DOI ↗
              </a>
            )}

            {item.pubmedUrl && (
              <a
                href={item.pubmedUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                PubMed ↗
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

      {/* EDUCATION + TEACHING */}
      <section className="academic-section section">
        <div className="section-label">
          <span>05</span>
          ACADEMIC
        </div>

        <div className="academic-grid">
          <div className="academic-column">
            <p className="eyebrow">Education</p>
            <h2>
              Academic
              <em>foundation.</em>
            </h2>

            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <span>{item.year}</span>
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="academic-column">
            <p className="eyebrow">Teaching & mentorship</p>
            <h2>
              Sharing
              <em>knowledge.</em>
            </h2>

            <div className="teaching-list">
              {teaching.map((item, index) => (
                <div className="teaching-item" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="awards-section section">
        <div className="section-label">
          <span>06</span>
          RECOGNITION
        </div>

        <div className="awards-layout">
          <div>
            <p className="eyebrow">Awards & honors</p>
            <h2>
              Recognition for
              <em>impact.</em>
            </h2>
          </div>

          <div className="awards-list">
            {awards.map((award, index) => (
              <div className="award-item" key={award}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-grid-bg" />

        <div className="contact-inner">
          <p className="eyebrow">Academic & professional inquiries</p>

          <h2>
            Let's advance
            <br />
            <em>health together.</em>
          </h2>

          <p className="contact-description">
            For research collaborations, academic inquiries, public health
            initiatives, speaking engagements, or professional opportunities.
          </p>

          <a
            className="contact-button"
            href="mailto:maihanabdullah22@gmail.com"
          >
            Get in touch
            <span>↗</span>
          </a>

          <div className="contact-details">
            <div>
              <span>EMAIL</span>
              <strong>maihanabdullah22@gmail.com</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>United States</strong>
            </div>

            <div>
              <span>PROFILE</span>
              <strong>MD · MPH · Public Health Research</strong>
            </div>
          </div>
        </div>

        <footer className="site-footer">
          <span>© 2026 Maihan Abdullah</span>
          <span>Academic Portfolio</span>
        </footer>
      </section>
    </main>
  );
}