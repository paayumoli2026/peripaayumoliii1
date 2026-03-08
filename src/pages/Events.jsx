import React from "react";
import Navbar from "../components/Navbar";
import Intraclgevents from "../components/Intraclgevents";
// import Fireworks from "../components/ui/fireworks";
import Background from "../components/Background";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

const Events = () => {
  return (
    <div className="w-screen h-auto bg-[var(--color-brand-bg)] bg-cover relative">
      <div className="absolute inset-0 z-0">
        <Background />
        <StarsBackground
          className="opacity-80"
          starDensity={0.00028}
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
      </div>
      {/* <Fireworks /> */}
      <Navbar />
      <Intraclgevents />
    </div>
  );
};

export default Events;
