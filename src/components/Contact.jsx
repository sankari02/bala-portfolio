import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Phone,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);

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
        .from(".contact-meta", {
          opacity: 0,
          y: -15,
          duration: 0.6,
          ease: "power3.out",
        })

        .from(
          ".contact-title-line",
          {
            opacity: 0,
            y: 80,
            stagger: 0.12,
            duration: 0.95,
            ease: "power4.out",
          },
          "-=0.25"
        )

        .from(
          ".contact-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        );

      timeline.from(".contact-action", { opacity: 0, scale: 0.85, duration: 0.8, ease: "back.out(1.5)" }, "-=0.4")
        .from(".contact-detail-card", { opacity: 0, y: 30, stagger: 0.12, duration: 0.7, ease: "power3.out" }, "-=0.45")
        .from(".contact-footer", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      {/* BACKGROUND */}

      <div
        className="contact-background-word"
        aria-hidden="true"
      >
        CONTACT
      </div>

      <div className="contact-ambient" />
      <div className="contact-grid" />

      {/* TOP META */}

      <div className="contact-meta">
        <div className="contact-meta-left">
          <span>05</span>
          <small>/</small>
          <small>CONTACT</small>
        </div>

        <div className="contact-meta-line" />

        <small>PORTFOLIO / 2026</small>
      </div>

      {/* MAIN CONTENT */}

      <div className="contact-main">
        <div className="contact-copy">
          <div className="contact-title">
            <div className="contact-title-mask">
              <span className="contact-title-line contact-muted">
                LET'S CREATE
              </span>
            </div>

            <div className="contact-title-mask">
              <span className="contact-title-line">
                SOMETHING
              </span>
            </div>

            <div className="contact-title-mask">
              <span className="contact-title-line">
                THAT GETS
              </span>
            </div>

            <div className="contact-title-mask">
              <span className="contact-title-line contact-orange">
                NOTICED.
              </span>
            </div>
          </div>

          <div className="contact-description">
            <span className="contact-description-dot" />

            <p>
              HAVE A PROJECT, CAMPAIGN OR CREATIVE
              <br />
              IDEA IN MIND? LET'S TALK.
            </p>
          </div>
        </div>

        {/* BIG CTA */}

       <a
  href="https://wa.me/918838075247"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-action"
  aria-label="Chat with Bala on WhatsApp"
>
         <span className="contact-action-small">
  START A CONVERSATION
</span>

          <strong>LET'S</strong>
          <strong>TALK</strong>

          <div className="contact-action-arrow">
            <ArrowUpRight
              size={28}
              strokeWidth={1.5}
            />
          </div>

          <span className="contact-action-ring ring-one" />
          <span className="contact-action-ring ring-two" />
        </a>
      </div>

      {/* CONTACT DETAILS */}

      <div className="contact-details">
        <a
  href="tel:+918838075247"
  className="contact-detail-card"
>
  <div className="contact-detail-number">
    01
  </div>

  <div className="contact-detail-icon">
    <Phone size={21} strokeWidth={1.5} />
  </div>

  <div className="contact-detail-content">
    <span>CALL</span>

    <strong>
      +91 88380 75247
    </strong>
  </div>

  <ArrowUpRight
    className="contact-detail-arrow"
    size={17}
    strokeWidth={1.5}
  />
</a>

        <div className="contact-detail-card">
          <div className="contact-detail-number">
            02
          </div>

          <div className="contact-detail-icon">
            <MapPin size={21} strokeWidth={1.5} />
          </div>

          <div className="contact-detail-content">
            <span>BASED IN</span>

            <strong>
              PUDUCHERRY, INDIA
            </strong>
          </div>
        </div>

        <div className="contact-detail-card contact-availability">
          <div className="contact-detail-number">
            03
          </div>

          <div className="availability-indicator">
            <span />
          </div>

          <div className="contact-detail-content">
            <span>WORK</span>

            <strong>
              DIGITAL · CREATIVE · PERFORMANCE
            </strong>
          </div>
        </div>
      </div>

      {/* FOOTER */}

      <footer className="contact-footer">
        <div className="contact-footer-top">
          <a href="#home" className="contact-footer-logo">
            BALA<span>.</span>
          </a>

          <div className="contact-footer-nav">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#expertise">EXPERTISE</a>
            <a href="#work">WORK</a>
          </div>

          <a
            href="#home"
            className="contact-back-top"
          >
            BACK TO TOP
            <span>↑</span>
          </a>
        </div>

        <div className="contact-footer-line">
          <span />
        </div>

        <div className="contact-footer-bottom">
          <p>
            BALA BASKAR R
          </p>

          <p>
            DIGITAL MARKETING · META ADS · GRAPHIC DESIGN
          </p>

          <p>
            PORTFOLIO / 2026
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;