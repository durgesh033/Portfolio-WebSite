import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About"


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 150,
      easing: "ease-out-cubic",
      anchorPlacement: "top-bottom"
    });

    setTimeout(() => {
      AOS.refreshHard();
    }, 500);

  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />


    </>
  );
}

export default App;