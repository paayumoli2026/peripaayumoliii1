import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Background from "../components/Background";
import Sponsors from "../components/Sponsors";
import PreviousEvents from "../components/PreviousEvents";
import Events from "../components/Events";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);
  return (
    <div className="w-screen h-auto bg-[var(--color-brand-bg)] bg-cover relative">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      {/* <Fireworks /> */}
      <Navbar />
      <section id="hero" className="relative z-10">
        <Hero />
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <div className="relative z-10">
        <PreviousEvents />
      </div>
      <div className="relative z-10">
        <Sponsors />
      </div>
      <section id="events" className="relative z-10">
        <Events />
      </section>
      <div className="w-full relative z-20">
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
