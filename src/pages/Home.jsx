import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Background from "../components/Background";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Sponsors from "../components/Sponsors";
import ChiefGuests from "../components/ChiefGuests";
import PreviousEvents from "../components/PreviousEvents";
import Judges from "../components/Judges";
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
        <StarsBackground
          className="opacity-80"
          starDensity={0.0003}
          minTwinkleOpacity={0.05}
          maxTwinkleOpacity={0.24}
          starColor="255, 234, 201"
        />
        <ShootingStars
          className="opacity-80"
          minDelay={700}
          maxDelay={1700}
          minSpeed={11}
          maxSpeed={24}
          starColor="#FFE8B9"
          trailColor="#FF6A00"
          starWidth={14}
          starHeight={1.2}
        />
      </div>
      {/* <Fireworks /> */}
      <Navbar />
      <section id="hero" className="relative z-10">
        <Hero />
      </section>
      <section id="about" className="relative z-10">
        <About />
      </section>
      <section id="chief-guests" className="relative z-10">
        <ChiefGuests />
      </section>
      <div className="relative z-10">
        <PreviousEvents />
      </div>
      <div className="relative z-10">
        <Judges />
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
