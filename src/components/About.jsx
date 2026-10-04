import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  Infinity,
  Paintbrush,
  Lightbulb,
} from "lucide-react";

import balaAnime from "../assets/images/bala-anime.png";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);
  const balaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------------
         MAIN INTRO TIMELINE
      ----------------------------------------- */

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });

      /* Top metadata */
      tl.from(".about-top-meta", {
        opacity: 0,
        y: -15,
        duration: 0.6,
        ease: "power3.out",
      });

      /* Heading */
      tl.from(
        ".about-heading-line",
        {
          opacity: 0,
          y: 50,
          stagger: 0.12,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.25"
      );

      /* Giant ABOUT */
      tl.from(
        ".about-background-word",
        {
          opacity: 0,
          scale: 1.08,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.65"
      );

      /* HUD / targeting circles */
      tl.from(
        ".about-target-ring",
        {
          opacity: 0,
          scale: 0.5,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.75"
      );

      /* Bala */
      tl.from(
        balaRef.current,
        {
          opacity: 0,
          y: 45,
          scale: 0.92,
          filter: "blur(10px)",
          duration: 1.15,
          ease: "power4.out",
        },
        "-=0.7"
      );

      /* SVG connector paths */
      const paths = gsap.utils.toArray(".about-svg-path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          stagger: 0.1,
          duration: 0.85,
          ease: "power2.inOut",
        },
        "-=0.55"
      );

      /* Connector dots */
      tl.from(
        ".about-connection-dot",
        {
          opacity: 0,
          scale: 0,
          stagger: 0.06,
          duration: 0.35,
          ease: "back.out(2)",
        },
        "-=0.4"
      );

      tl.from(".about-service", { opacity: 0, y: 18, stagger: 0.1, duration: 0.65, ease: "power3.out" }, "-=0.3");
      tl.from(".about-quote", { opacity: 0, y: 25, duration: 0.7, ease: "power3.out" }, "-=0.2");
      tl.from(".about-approach", { opacity: 0, x: -20, duration: 0.6, ease: "power3.out" }, "-=0.45");

      /* -----------------------------------------
         VERY SUBTLE HUD ROTATION
         Bala himself DOES NOT float.
      ----------------------------------------- */

      gsap.to(".target-ring-one", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".target-ring-two", {
        rotate: -360,
        duration: 55,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="about-cinematic"
      id="about"
      ref={sectionRef}
    >
      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="about-background-word" aria-hidden="true">
        ABOUT
      </div>

      <div className="about-orange-ambient" />
      <div className="about-section-grain" />

      {/* ========================================
          TOP META
      ======================================== */}

      <div className="about-top-meta">
        <div className="about-meta-left">
          <span className="about-meta-number">02</span>
          <span>/</span>
          <span>ABOUT</span>
        </div>

        <div className="about-meta-rule" />

        <span className="about-meta-year">
          PORTFOLIO / 2026
        </span>
      </div>

      {/* ========================================
          HEADING
      ======================================== */}

      <div className="about-main-heading">
        <div className="about-heading-line about-heading-dark">
          BEHIND THE
        </div>

        <div className="about-heading-line about-heading-white">
          ATTENTION<span>.</span>
        </div>
      </div>

      {/* ========================================
          MAIN STAGE
      ======================================== */}

      <div className="about-main-stage">

        {/* ======================================
            TARGET / HUD BEHIND BALA
        ====================================== */}

        <div className="about-target">
          <div className="about-target-ring target-ring-one">
            <span className="ring-mark ring-mark-top" />
            <span className="ring-mark ring-mark-right" />
            <span className="ring-mark ring-mark-bottom" />
            <span className="ring-mark ring-mark-left" />
          </div>

          <div className="about-target-ring target-ring-two" />

          <div className="about-target-ring target-ring-three" />

          <div className="about-target-cross target-cross-one">
            +
          </div>

          <div className="about-target-cross target-cross-two">
            +
          </div>
        </div>

        {/* ======================================
            SVG TECHNICAL CONNECTOR LINES
        ====================================== */}

        <svg
          className="about-connectors-svg"
          viewBox="0 0 1600 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Digital Marketing */}
          <path
            className="about-svg-path"
            d="M 360 245 L 470 245 L 555 330 L 655 330"
          />

          {/* Meta Ads */}
          <path
            className="about-svg-path"
            d="M 1240 245 L 1130 245 L 1045 330 L 945 330"
          />

          {/* Graphic Design */}
          <path
            className="about-svg-path"
            d="M 360 545 L 470 545 L 555 465 L 655 465"
          />

          {/* Creative Strategy */}
          <path
            className="about-svg-path"
            d="M 1240 545 L 1130 545 L 1045 465 L 945 465"
          />
        </svg>

        {/* glowing points */}

        <span className="about-connection-dot dot-digital-start" />
        <span className="about-connection-dot dot-digital-end" />

        <span className="about-connection-dot dot-meta-start" />
        <span className="about-connection-dot dot-meta-end" />

        <span className="about-connection-dot dot-design-start" />
        <span className="about-connection-dot dot-design-end" />

        <span className="about-connection-dot dot-strategy-start" />
        <span className="about-connection-dot dot-strategy-end" />

        {/* ======================================
            DIGITAL MARKETING
        ====================================== */}

        <div className="about-service service-digital">
          <div className="service-icon">
            <BarChart3 size={30} strokeWidth={1.8} />
          </div>

          <div className="service-copy">
            <div className="service-number">01</div>

            <h3>DIGITAL MARKETING</h3>

            <span className="service-small-line" />

            <p>
              Building digital experiences
              <br />
              designed to attract the right
              <br />
              audience.
            </p>
          </div>
        </div>

        {/* ======================================
            META ADS
        ====================================== */}

        <div className="about-service service-meta">
          <div className="service-icon">
            <Infinity size={34} strokeWidth={1.8} />
          </div>

          <div className="service-copy">
            <div className="service-number">02</div>

            <h3>META ADS</h3>

            <span className="service-small-line" />

            <p>
              Performance campaigns
              <br />
              focused on reach, engagement
              <br />
              and conversion.
            </p>
          </div>
        </div>

        {/* ======================================
            GRAPHIC DESIGN
        ====================================== */}

        <div className="about-service service-design">
          <div className="service-icon">
            <Paintbrush size={28} strokeWidth={1.8} />
          </div>

          <div className="service-copy">
            <div className="service-number">03</div>

            <h3>GRAPHIC DESIGN</h3>

            <span className="service-small-line" />

            <p>
              Visual communication created
              <br />
              to stop the scroll and stay
              <br />
              remembered.
            </p>
          </div>
        </div>

        {/* ======================================
            CREATIVE STRATEGY
        ====================================== */}

        <div className="about-service service-strategy">
          <div className="service-icon">
            <Lightbulb size={29} strokeWidth={1.8} />
          </div>

          <div className="service-copy">
            <div className="service-number">04</div>

            <h3>CREATIVE STRATEGY</h3>

            <span className="service-small-line" />

            <p>
              Connecting ideas, visuals and
              <br />
              performance into meaningful
              <br />
              campaigns.
            </p>
          </div>
        </div>

        {/* ======================================
            BALA
        ====================================== */}

        <div className="about-bala-wrapper">
          <div className="about-bala-backlight" />

          <img
            ref={balaRef}
            src={balaAnime}
            alt="Bala Baskar R"
            className="about-bala-image"
          />

          <div className="about-bala-name">
            BALA BASKAR R
          </div>
        </div>
      </div>

      {/* ========================================
          BOTTOM LEFT
      ======================================== */}

      <div className="about-approach">
        <span>MY APPROACH</span>

        <div className="approach-rule">
          <span />
        </div>
      </div>

      {/* ========================================
          BOTTOM RIGHT QUOTE
      ======================================== */}

      <div className="about-quote">
        <p>I DON'T JUST CREATE ADS.</p>

        <p>
          I CREATE REASONS TO{" "}
          <strong>STOP</strong>
        </p>

        <p className="quote-orange">
          SCROLLING.
        </p>
      </div>
    </section>
  );
}

export default About;