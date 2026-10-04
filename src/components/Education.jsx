import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-reveal", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        opacity: 0, y: 45, duration: 0.9, stagger: 0.12, ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="education-section"
      id="education"
      ref={sectionRef}
    >
      <div className="education-grid-bg" />

      <div className="education-container">

        <div className="education-label education-reveal">
          <span>EDUCATION</span>
          <div />
          <small>ACADEMIC JOURNEY</small>
        </div>

        <div className="education-card education-reveal">

          <div className="education-year">
            <span>2020</span>

            <div className="education-year-line">
              <i />
            </div>

            <span>2023</span>
          </div>

          <div className="education-icon">
            <GraduationCap
              size={34}
              strokeWidth={1.3}
            />
          </div>

          <div className="education-information">

            <span className="education-type">
              BACHELOR'S DEGREE
            </span>

            <h2>
              SRI MANAKULA VINAYAGAR
              <br />
              <strong>ENGINEERING COLLEGE.</strong>
            </h2>

            <div className="education-location">
              <MapPin
                size={13}
                strokeWidth={1.5}
              />

              <span>PUDUCHERRY</span>
            </div>

          </div>

          <div className="education-index">
            <small>EDU</small>
            <strong>01</strong>
          </div>

          <div className="education-corner education-corner-one" />
          <div className="education-corner education-corner-two" />

        </div>
      </div>
    </section>
  );
}

export default Education;