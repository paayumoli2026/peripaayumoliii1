import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";

const Brochure = () => {
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
    <div className="w-screen min-h-screen bg-[var(--color-brand-bg)] relative">

      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Background />
        <StarsBackground
          className="opacity-75"
          starDensity={0.00022}
          minTwinkleOpacity={0.04}
          maxTwinkleOpacity={0.18}
          starColor="255, 234, 201"
        />
        <ShootingStars
          className="opacity-60"
          minDelay={1000}
          maxDelay={2300}
          minSpeed={9}
          maxSpeed={20}
          starColor="#FFE8B9"
          trailColor="#FF6A00"
          starWidth={12}
          starHeight={1.1}
        />
      </div>

      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10 pt-36 pb-24 px-6 flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          BROCHURES
        </h1>

        {/* SPONSOR CARD */}
        <div className="w-full max-w-4xl bg-black/50 backdrop-blur-md rounded-3xl shadow-[0_16px_42px_-14px_rgba(255,94,0,0.5)] p-12 mb-16 text-center border border-orange-200/30">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-300">
            Sponsors Brochure
          </h2>

          <p className="text-orange-100/85 text-lg mb-8">
            Download the sponsorship brochure to explore partnership
            opportunities, branding benefits, and event visibility details.
          </p>

          <a
            href="/brochures/brochure.pdf"
            download
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Download Sponsors Brochure
          </a>
        </div>

        {/* EVENT CARD */}
        <div className="w-full max-w-4xl bg-black/50 backdrop-blur-md rounded-3xl shadow-[0_16px_42px_-14px_rgba(255,94,0,0.5)] p-12 text-center border border-orange-200/30">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-300">
            Event Brochure
          </h2>

          <p className="text-orange-100/85 text-lg mb-8">
            Get complete event information including schedule, rules,
            categories, and participation details.
          </p>

          <a
            href="/brochures/events.png"
            download
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-md hover:scale-105 transition"
          >
            Download Event Brochure
          </a>
        </div>

      </div>
    </div>
  );
};

export default Brochure;
