import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-[#FFF9E6] overflow-hidden select-none pointer-events-none">
      {/* Layer 1: Fiery Base Gradient (Golden to Saffron) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFF2CC_0%,_#FFF9E6_50%,_#FFE599_100%)]" />

      {/* Layer 2: Mural Stone Texture (Subtle) */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      

      

      

    </div>
  );
};

export default Background;
