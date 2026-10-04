import { useEffect, useRef } from "react";
import gsap from "gsap";

const CinematicLoader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const nameRef = useRef(null);
  const lineRef = useRef(null);
  const subRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      tl.fromTo(
        nameRef.current,
        {
          opacity: 0,
          y: 35,
          letterSpacing: "0.35em",
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "0.12em",
          duration: 1.1,
          ease: "power4.out",
        }
      )

        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.4"
        )

        .fromTo(
          subRef.current,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.25"
        )

        .to(
          glowRef.current,
          {
            opacity: 1,
            scale: 1.5,
            duration: 1.3,
            ease: "power2.inOut",
          },
          "-=0.5"
        )

        .to(
          [nameRef.current, lineRef.current, subRef.current],
          {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power3.in",
          },
          "+=0.45"
        )

        .to(
          loaderRef.current,
          {
            yPercent: -100,
            duration: 1.15,
            ease: "power4.inOut",
          },
          "-=0.05"
        );
    }, loaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div className="cinematic-loader" ref={loaderRef}>
      <div className="loader-glow" ref={glowRef}></div>

      <div className="loader-content">
        <p className="loader-small">PORTFOLIO / 2026</p>

        <h1 ref={nameRef}>
          BALA<span>.R</span>
        </h1>

        <div className="loader-line" ref={lineRef}></div>

        <p className="loader-sub" ref={subRef}>
          DIGITAL&nbsp;&nbsp;·&nbsp;&nbsp;CREATIVE&nbsp;&nbsp;·&nbsp;&nbsp;PERFORMANCE
        </p>
      </div>

      <p className="loader-bottom">BALA BASKAR R</p>
    </div>
  );
};

export default CinematicLoader;
