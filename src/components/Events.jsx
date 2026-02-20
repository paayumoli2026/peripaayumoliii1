import React from "react";
import { motion } from "framer-motion";
import Eventcategory from "../components/ui-components/Eventcategory";
import intracollege from "../assets/intracollege.png";
import intercollege from "../assets/intercollege.png";
import { BackgroundGradient } from "./ui/background-gradient";

const Events = () => {
  return (
    <section id="events" className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
            Explore Events
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-bold">
            Choose your arena and showcase your talent. From internal college battles to massive inter-college showdowns.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 justify-center pt-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-md shadow-2xl rounded-3xl overflow-hidden"
          >
            <Eventcategory imageUrl={intracollege} eventName="Intra College" />
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="w-full max-w-md shadow-2xl rounded-3xl overflow-hidden"
          >
            <Eventcategory imageUrl={intercollege} eventName="Inter College" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Events;
