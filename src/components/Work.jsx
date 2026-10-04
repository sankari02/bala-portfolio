import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  MonitorPlay,
  Target,
  Palette,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Work() {
  const sectionRef = useRef(null);

  const projects = [
    {
      number: "01",
      type: "PROJECT",
      title: "TV CHANNEL\nPROMOTION",
      description:
        "Promotional creatives and digital marketing assets developed for media campaigns.",
      icon: MonitorPlay,
      stat: "MEDIA / PROMOTION",
      tags: ["Creative", "Promotion", "Digital"],
      className: "work-project-one",
    },
    {
      number: "02",
      type: "PAID CAMPAIGNS",
      title: "META + GOOGLE\nADS",
      description:
        "Experience managing Meta and Google Ads campaigns with a focus on planning and optimization.",
      icon: Target,
      stat: "PAID MEDIA",
      tags: ["Meta Ads", "Google Ads", "Optimization"],
      className: "work-project-two",
    },
    {
      number: "03",
      type: "VISUAL BRANDING",
      title: "BRAND\nCREATIVES",
      description:
        "Social media creatives, posters, banners and branding materials designed for digital presence.",
      icon: Palette,
      stat: "DESIGN / SOCIAL",
      tags: ["Branding", "Design", "Social"],
      className: "work-project-three",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      timeline
        .from(".work-meta", {
          opacity: 0,
          y: -15,
          duration: 0.6,
          ease: "power3.out",
        })

        .from(
          ".work-heading-line",
          {
            opacity: 0,
            y: 70,
            stagger: 0.12,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25"
        )

        .from(
          ".work-header-copy",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        );

      timeline.from(".work-card", { opacity: 0, y: 80, stagger: 0.15, duration: 0.9, ease: "power4.out" }, "-=0.35")
        .from(".work-experience", { opacity: 0, y: 35, duration: 0.8, ease: "power3.out" }, "-=0.25");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="work-section"
      id="work"
      ref={sectionRef}
    >
      {/* BACKGROUND */}

      <div
        className="work-background-word"
        aria-hidden="true"
      >
        WORK
      </div>

      <div className="work-ambient" />
      <div className="work-grid-background" />

      {/* TOP META */}

      <div className="work-meta">
        <div className="work-meta-left">
          <span>04</span>
          <small>/</small>
          <small>SELECTED WORK</small>
        </div>

        <div className="work-meta-line" />

        <small>PORTFOLIO / 2026</small>
      </div>

      {/* HEADER */}

      <div className="work-header">
        <div className="work-heading">
          <div className="work-heading-mask">
            <span className="work-heading-line work-heading-muted">
              WORK WITH
            </span>
          </div>

          <div className="work-heading-mask">
            <span className="work-heading-line">
              <strong>PURPOSE.</strong>
            </span>
          </div>
        </div>

        <div className="work-header-copy">
          <span className="work-copy-dot" />

          <p>
            CAMPAIGNS, CREATIVES AND DIGITAL
            <br />
            WORK BUILT FOR REAL BRAND NEEDS.
          </p>
        </div>
      </div>

      {/* WORK CARDS */}

      <div className="work-project-grid">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <article
              className={`work-card ${project.className}`}
              key={project.number}
            >
              {/* VISUAL */}

              <div className="work-card-visual">
                <div className="work-card-grid" />

                <div className="work-card-orbit orbit-large" />
                <div className="work-card-orbit orbit-small" />

                <div className="work-card-center-icon">
                  <Icon size={42} strokeWidth={1.25} />
                </div>

                <span className="work-visual-index">
                  {project.number}
                </span>

                <span className="work-visual-label">
                  {project.stat}
                </span>

                <div className="work-scan-line" />
              </div>

              {/* INFORMATION */}

              <div className="work-card-information">
                <div className="work-card-meta">
                  <span>{project.number}</span>
                  <p>{project.type}</p>
                </div>

                <div className="work-card-title">
                  {project.title
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>{line}</span>
                    ))}
                </div>

                <p className="work-card-description">
                  {project.description}
                </p>

                <div className="work-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button
                  type="button"
                  className="work-view-button"
                >
                  <span>VIEW PROJECT</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                  />
                </button>
              </div>

              <div className="work-card-corner corner-top" />
              <div className="work-card-corner corner-bottom" />
            </article>
          );
        })}
      </div>

      {/* EXPERIENCE */}

      <div className="work-experience">
        <div className="work-experience-year">
          <span className="experience-dot" />

          <div>
            <small>EXPERIENCE</small>
            <strong>2023 — PRESENT</strong>
          </div>
        </div>

        <div className="work-experience-content">
          <span>FREELANCE</span>

          <h3>
            DIGITAL MARKETING
            <br />
            <strong>&amp; GRAPHIC DESIGNER</strong>
          </h3>

          <p>
            Managed Meta &amp; Google Ads campaigns, designed
            promotional assets, improved online presence through
            content and paid campaigns, and delivered creative
            projects for a TV channel.
          </p>
        </div>

        <div className="work-experience-index">
          <span>EXP</span>
          <strong>01</strong>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="work-bottom">
        <div className="work-bottom-left">
          <span>SELECTED WORK</span>

          <div>
            <i />
          </div>
        </div>

        <p>
          DIGITAL
          <span> × </span>
          CREATIVE
          <span> × </span>
          PERFORMANCE
        </p>
      </div>
    </section>
  );
}

export default Work;