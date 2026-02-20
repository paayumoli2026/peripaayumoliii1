import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assets/tgglogo1.png";
import gglogotemp from "../assets/gglogotemp.png";
import bglogo from "../assets/bglogo.png";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >

            {/* Ambient Lighting Glows */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[var(--color-brand-primary)] opacity-10 blur-[80px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[var(--color-brand-secondary)] opacity-10 blur-[80px] rounded-full" />

            {/* Background Logo */}
            <img
              src={gglogotemp}
              alt="Background Logo"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-auto max-w-[1000px] object-contain opacity-30 pointer-events-none -z-10"
            />

            <div className="relative glass-card p-4 overflow-hidden border-2 border-white/50">
              <img
                src={aboutimg}
                alt="About Paayumoli"
                className="w-full h-auto rounded-[16px] transform hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--color-brand-secondary)] inline-block">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1]">
                A Symphony of <br />
                <span className="text-blend">Tamil Excellence</span>
              </h2>
            </div>

            <div className="space-y-6 text-black font-black leading-relaxed">
              <p className="text-lg">
                Feel the beat and step into the spotlight as PERI’s grand  cultural fest returns, louder and more vibrant than ever. Bigger stages, fiercer battles, and unstoppable talent come together to create an atmosphere charged with energy. From culture and creativity to electrifying performances and technical showdowns, this is where students express, compete, and leave their mark. Every moment echoes with passion, ambition, and the spirit of celebration.
              </p>
              <p>
                "Paayumoli" is more than just a fest—it is an immersive experience that brings together art, innovation, and unforgettable memories. A stage where voices rise, talents shine, and history is made with every performance.
              </p>
            </div>

            <div className="pt-6 flex items-center gap-6">
              <div className="h-[3px] w-16 bg-gradient-to-r from-[#FF5C00] to-[#D90000] rounded-full" />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Established</span>
                <span className="text-lg font-bold text-gray-800">Peri Paayumoli '26</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
