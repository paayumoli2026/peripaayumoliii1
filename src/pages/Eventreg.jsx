import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Eventdetail from "../components/ui-components/Eventdetail";
import Background from "../components/Background";
import Footer from "../components/Footer";

const Eventreg = () => {
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
      <Background />
      <StarsBackground />
      <ShootingStars />
      <Navbar />
      <Eventdetail />
      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </div>
  );
};

export default Eventreg;
