import { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
      anchorPlacement: "top-bottom"
    });
  }, []);

  const particles = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        size: 2 + Math.random() * 3
      })),
    []
  );

  return (
    <>
      <div className="global-particles">
        {particles.map((particle, i) => (
          <span
            key={i}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;