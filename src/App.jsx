import { useState } from "react";
import CinematicLoader from "./components/CinematicLoader";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Education from "./components/Education";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <CinematicLoader onComplete={() => setLoading(false)} />
      )}

      <main className="portfolio">
        <Hero />
        <About />
        <Expertise />
        <Education />
        <Work />
         <Contact />
      </main>
    </>
  );
}

export default App;
