import React, { useEffect } from "react";
import tgglogo from "../assets/tgglogo.svg";
import bglogo from "../assets/bglogo.png";
import Countdown from "./ui-components/Countdown";
import { FiArrowRight } from "react-icons/fi";
import gglogotemp from "../assets/gglogotemp.png";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Link } from "react-router-dom";

const COLORS_TOP = ["#8B0000", "#FF9933", "#FFD700", "#B22222"];
const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const scrollToEvents = () => {
    const eventsSection = document.getElementById("events");
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 pb-20 overflow-hidden bg-transparent">
      {/* Sacred Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sacred-glow opacity-60 z-0" />
      <div className="ambient-light z-0" />

      {/* Background Soft Glows (Legacy) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-brand-primary)] opacity-10 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--color-brand-secondary)] opacity-10 blur-[100px] rounded-full z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-8 max-w-5xl flex flex-col items-center"
      >
        <img
          src={gglogotemp}
          alt="Background Logo"
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto max-w-[750px] object-contain opacity-20 pointer-events-none -z-10"
        />

        {/* Blended Title Branding */}
        <div className="space-y-2">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--color-brand-accent)]">
            PERI EDUCATION <br/>PRESENTS
          </p>
          <h1
            className="text-7xl sm:text-8xl md:text-9xl font-black hero-text-gradient leading-tight"
            style={{ fontFamily: 'var(--font-accent)' }}
          >
            Paayumoli '26
          </h1>
        </div>

        {/* Date Section */}
        <div className="text-xl sm:text-2xl font-black text-gray-900 tracking-wide">
          March 12th & 13th, 2026
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center gap-6 pt-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255, 92, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToEvents}
            className="px-10 py-4 rounded-full text-white font-bold text-lg tracking-wide shadow-xl transition-all
                       bg-gradient-to-r from-[#FF5C00] to-[#D90000] hover:brightness-110"
          >
            Register Now
          </motion.button>

          <div className="w-full max-w-2xl mx-auto pt-8">
            <Countdown />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
