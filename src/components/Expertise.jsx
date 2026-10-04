import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Megaphone,
  Target,
  Palette,
  ArrowUpRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Expertise() {
  const sectionRef = useRef(null);

  const expertise = [
    {
      number: "01",
      title: "DIGITAL",
      accent: "MARKETING",
      icon: Megaphone,
      description:
        "Building digital strategies that connect brands with the right audience and turn attention into measurable growth.",
      skills: [
        "Social Media Strategy",
        "Campaign Planning",
        "Content Strategy",
        "Lead Generation",
      ],
    },
    {
      number: "02",
      title: "META",
      accent: "ADS",
      icon: Target,
      description:
        "Performance-focused advertising built around targeting, testing, optimization and meaningful conversions.",
      skills: [
        "Campaign Setup",
        "Audience Targeting",
        "Retargeting",
        "Performance Optimization",
      ],
    },
    {
      number: "03",
      title: "GRAPHIC",
      accent: "DESIGN",
      icon: Palette,
      description:
        "Creating visual communication that captures attention, strengthens brand identity and stays remembered.",
      skills: [
        "Social Media Creatives",
        "Ad Creatives",
        "Brand Visuals",
        "Posters & Content",
      ],
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
        .from(".expertise-meta", {
          opacity: 0,
          y: -15,
          duration: 0.6,
          ease: "power3.out",
        })

        .from(
          ".expertise-heading-line",
          {
            opacity: 0,
            y: 65,
            stagger: 0.12,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25"
        )

        .from(
          ".expertise-intro",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        );

      timeline.from(".expertise-card", { opacity: 0, y: 80, stagger: 0.15, duration: 0.95, ease: "power4.out" }, "-=0.35")
        .from(".expertise-bottom", { opacity: 0, y: 20, duration: 0.65, ease: "power3.out" }, "-=0.35");
      const cards = gsap.utils.toArray(".expertise-card");
      cards.forEach((card) => {
        const moveCard = (event) => {
          if (window.innerWidth <= 900) return;
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          gsap.to(card, { rotateY: x * 3, rotateX: y * -3, duration: 0.6, ease: "power3.out" });
        };
        const resetCard = () => {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });
        };
        card.addEventListener("mousemove", moveCard);
        card.addEventListener("mouseleave", resetCard);
        card._moveCard = moveCard;
        card._resetCard = resetCard;
      });
      return () => {
        cards.forEach((card) => {
          card.removeEventListener("mousemove", card._moveCard);
          card.removeEventListener("mouseleave", card._resetCard);
        });
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="expertise-section"
      id="expertise"
      ref={sectionRef}
    >
      {/* BACKGROUND */}

      <div
        className="expertise-background-word"
        aria-hidden="true"
      >
        EXPERTISE
      </div>

      <div className="expertise-glow" />
      <div className="expertise-grid" />

      {/* TOP */}

      <div className="expertise-meta">
        <div className="expertise-meta-left">
          <span>03</span>
          <small>/</small>
          <small>EXPERTISE</small>
        </div>

        <div className="expertise-meta-line" />

        <small>PORTFOLIO / 2026</small>
      </div>

      {/* INTRO */}

      <div className="expertise-header">
        <div className="expertise-heading">
          <div className="expertise-heading-mask">
            <span className="expertise-heading-line muted">
              WHAT I
            </span>
          </div>

          <div className="expertise-heading-mask">
            <span className="expertise-heading-line">
              DO <strong>BEST.</strong>
            </span>
          </div>
        </div>

        <div className="expertise-intro">
          <span className="expertise-intro-dot" />

          <p>
            STRATEGY, PERFORMANCE AND VISUAL
            <br />
            COMMUNICATION — BUILT TO WORK TOGETHER.
          </p>
        </div>
      </div>

      {/* CARDS */}

      <div className="expertise-cards">
        {expertise.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className="expertise-card"
              key={item.number}
            >
              <div className="expertise-card-glow" />

              <div className="expertise-card-top">
                <span className="expertise-number">
                  {item.number}
                </span>

                <div className="expertise-icon">
                  <Icon size={25} strokeWidth={1.6} />
                </div>
              </div>

              <div className="expertise-card-title">
                <span>{item.title}</span>

                <strong>{item.accent}</strong>
              </div>

              <div className="expertise-orange-line" />

              <p className="expertise-description">
                {item.description}
              </p>

              <div className="expertise-skills">
                {item.skills.map((skill, index) => (
                  <div
                    className="expertise-skill"
                    key={skill}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{skill}</p>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>

              <div className="expertise-corner expertise-corner-one" />
              <div className="expertise-corner expertise-corner-two" />
            </article>
          );
        })}
      </div>
      {/* SKILLS */}

<div className="expertise-skills-panel">
  <div className="expertise-skills-heading">
    <div>
      <span>SKILLS / TOOLS</span>
      <h3>CAPABILITIES<span>.</span></h3>
    </div>

    <p>
      MARKETING · DESIGN · DATA
    </p>
  </div>

  <div className="expertise-skills-list">
    {[
      "Meta Ads",
      "Google Ads",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Branding",
      "Graphic Design",
      "Campaign Management",
      "Microsoft Excel",
      "SQL",
      "Database Management",
    ].map((skill, index) => (
      <div
        className="expertise-skill-chip"
        key={skill}
      >
        <span>
          {String(index + 1).padStart(2, "0")}
        </span>

        <strong>{skill}</strong>

        <i />
      </div>
    ))}
  </div>
</div>

      {/* BOTTOM */}

      <div className="expertise-bottom">
        <div className="expertise-bottom-left">
          <span>CORE DISCIPLINES</span>

          <div>
            <i />
          </div>
        </div>

        <div className="expertise-bottom-right">
          <span>STRATEGY</span>
          <i />
          <span>CREATIVE</span>
          <i />
          <span>PERFORMANCE</span>
        </div>
      </div>
    </section>
  );
}

export default Expertise;