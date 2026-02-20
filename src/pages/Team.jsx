import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Background from "../components/Background";
// import Fireworks from "../components/ui/fireworks";
import Footer from "../components/Footer";
import Teammember from "../components/Teammember";

const Team = () => {
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
      <div className="absolute inset-0 z-0 text-gray-500">
        <Background />
      </div>
      {/* <Fireworks /> */}
      <ShootingStars />
      <StarsBackground />
      <Navbar />

      <div className="relative z-10">
        <Teammember />
      </div>

      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </div>
  );
};

export default Team;
