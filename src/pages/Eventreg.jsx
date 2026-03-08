import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Eventdetail from "../components/ui-components/Eventdetail";
import Background from "../components/Background";

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
      <StarsBackground
        className="opacity-80"
        starDensity={0.00026}
        minTwinkleOpacity={0.05}
        maxTwinkleOpacity={0.22}
        starColor="255, 234, 201"
      />
      <ShootingStars
        className="opacity-75"
        minDelay={850}
        maxDelay={1900}
        minSpeed={10}
        maxSpeed={22}
        starColor="#FFE8B9"
        trailColor="#FF6A00"
        starWidth={13}
        starHeight={1.2}
      />
      <Navbar />
      <Eventdetail />
    </div>
  );
};

export default Eventreg;
