import { useEffect, useRef } from "react";
import gsap from "gsap";
import balaProfile from "../assets/images/bala-profile.png";
import { MessageCircle, Download } from "lucide-react";
function Hero() {
  const heroRef = useRef(null);

  const portraitLayerRef = useRef(null);
  const portraitRef = useRef(null);

  const glowRef = useRef(null);
  const sunRef = useRef(null);

  const copyRef = useRef(null);
  const cursorLightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15, defaults: { ease: "power4.out" } });
      tl.from(".hero-nav", { y: -40, opacity: 0, duration: 0.9 })
        .from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.7 }, "-=.25")
        .from(".title-word", { yPercent: 120, opacity: 0, stagger: 0.13, duration: 1.1 }, "-=.35")
        .from(sunRef.current, { opacity: 0, scale: 0.72, duration: 1.8, ease: "expo.out" }, "-=1.15")
        .from(portraitRef.current, { opacity: 0, scale: 1.1, y: 90, duration: 1.7 }, "-=1.55")
        .from(".orbit", { opacity: 0, scale: 0.65, stagger: 0.12, duration: 1.3 }, "-=1.1")
        .from(".hero-bottom-content", { opacity: 0, y: 25, duration: 0.8 }, "-=.6")
        .from([".hero-location", ".movie-scroll"], { opacity: 0, duration: 0.8 }, "-=.6");
      gsap.to(".orbit-one", { rotation: 360, duration: 28, repeat: -1, ease: "none" });
      gsap.to(".orbit-two", { rotation: -360, duration: 38, repeat: -1, ease: "none" });
      gsap.to(".orbit-three", { rotation: 360, duration: 50, repeat: -1, ease: "none" });
      gsap.to(sunRef.current, { scale: 1.025, filter: "brightness(1.08)", duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.fromTo(".portrait-light-sweep", { xPercent: -180, opacity: 0 }, {
        xPercent: 220, opacity: 0.45, duration: 2.1, repeat: -1, repeatDelay: 4.5, ease: "power2.inOut",
      });
    }, heroRef);
    const handleMouseMove = (event) => {
      if (window.innerWidth < 900) return;
      const rect = heroRef.current.getBoundingClientRect();
      const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;
      const normalizedY = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(portraitLayerRef.current, { x: normalizedX * -16, y: normalizedY * -10, rotationY: normalizedX * 2.2, rotationX: normalizedY * -1.5, duration: 1.4, ease: "power3.out", overwrite: "auto" });
      gsap.to(glowRef.current, { x: normalizedX * -45, y: normalizedY * -30, duration: 1.8, ease: "power3.out", overwrite: "auto" });
      gsap.to(sunRef.current, { x: normalizedX * -25, y: normalizedY * -15, duration: 1.6, ease: "power3.out", overwrite: "auto" });
      gsap.to(copyRef.current, { x: normalizedX * 7, y: normalizedY * 4, duration: 1.7, ease: "power3.out", overwrite: "auto" });
      gsap.to(cursorLightRef.current, { x: event.clientX, y: event.clientY, opacity: 1, duration: 0.8, ease: "power3.out", overwrite: "auto" });
    };
    const handleMouseLeave = () => {
      gsap.to(portraitLayerRef.current, { x: 0, y: 0, rotationX: 0, rotationY: 0, duration: 1.4, ease: "power3.out" });
      gsap.to(copyRef.current, { x: 0, y: 0, duration: 1.4, ease: "power3.out" });
      gsap.to(cursorLightRef.current, { opacity: 0, duration: 0.5 });
    };
    const hero = heroRef.current;
    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section className="movie-hero" ref={heroRef} id="home">
      {/* atmospheric mouse light */}
      <div
        className="cursor-atmosphere"
        ref={cursorLightRef}
      />

      <div className="movie-grain" />
      <div className="movie-vignette" />

      <div
        className="movie-glow"
        ref={glowRef}
      />

      {/* =====================================
          NAVIGATION
      ====================================== */}

      <nav className="hero-nav">
        <a href="#home" className="hero-logo">
          BALA<span>.R</span>
        </a>

        <div className="hero-nav-links">
          <a href="#about">ABOUT</a>
          <a href="#expertise">EXPERTISE</a>
          <a href="#work">WORK</a>
          <a href="#contact">CONTACT</a>
        </div>
<a href="#contact" className="nav-contact">
  LET'S TALK ↗
</a>
      </nav>

      {/* =====================================
          GIANT BACKGROUND WORD
      ====================================== */}

      <div
        className="background-type"
        aria-hidden="true"
      >
        CREATIVE
      </div>

      {/* =====================================
          HEADLINE
      ====================================== */}

      <div
        className="movie-copy"
        ref={copyRef}
      >
        <div className="hero-eyebrow">
          <span />
          DIGITAL MARKETING · CREATIVE · PERFORMANCE
        </div>

        <div className="movie-title">
          <div className="title-mask">
            <span className="title-word">
              TURNING
            </span>
          </div>

          <div className="title-mask attention-line">
            <span className="title-word title-outline">
              ATTENTION
            </span>
          </div>

          <div className="title-mask title-final">
            <span className="title-word">
              INTO
            </span>

            <span className="title-word title-orange">
              ACTION.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================
          PORTRAIT / 3D DEPTH AREA
      ====================================== */}

      <div
        className="hero-person-depth"
        ref={portraitLayerRef}
      >
        {/* original orange sun */}
        <div
          className="movie-sun hero-depth-sun"
          ref={sunRef}
        />

        {/* orbital system */}

        <div className="portrait-orbits">
          <div className="orbit orbit-one">
            <span />
          </div>

          <div className="orbit orbit-two">
            <span />
          </div>

          <div className="orbit orbit-three">
            <span />
          </div>
        </div>

        {/* Bala */}

        <div className="hero-person">
          <div className="portrait-light-sweep" />

          <img
            src={balaProfile}
            ref={portraitRef}
            className="hero-person-image"
            alt="Bala Baskar R"
          />
        </div>
      </div>

      {/* =====================================
          BOTTOM
      ====================================== */}

      <div className="hero-bottom-content">
        <div className="hero-intro">
          <span className="intro-number">
            01
          </span>

          <p>
            Digital Marketing Executive, Meta Ads Specialist and
            Graphic Designer creating campaigns and visual experiences
            built to be noticed.
          </p>
        </div>

        <div className="hero-actions">
  <a href="#work" className="movie-button">
    <span>EXPLORE MY WORK</span>
    <strong>↘</strong>
  </a>

  <a
    href="/balaResume.pdf"
    download="Bala-Baskar-Resume.pdf"
    className="hero-resume-button"
  >
    <Download size={15} strokeWidth={1.6} />
    <span>DOWNLOAD RESUME</span>
  </a>

  <a
    href="https://wa.me/918838075247"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-whatsapp-button"
    aria-label="Chat with Bala on WhatsApp"
  >
    <MessageCircle size={19} strokeWidth={1.6} />
  </a>
</div>
      </div>

      <div className="hero-location">
        <span>BASED IN</span>
        PUDUCHERRY / INDIA
      </div>

      <div className="movie-scroll">
        <span>SCROLL</span>
        <div />
      </div>
    </section>
  );
}

export default Hero;
