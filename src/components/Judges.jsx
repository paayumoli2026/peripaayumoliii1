import React from "react";
import JudgesCards from "./ui-components/JudgesCards";

const Judges = () => {
  return (
    <section id="judges" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
            Judges
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#D90000]" />
          <p className="text-orange-100/90 max-w-2xl mx-auto font-bold">
            Meet the panel guiding each event with expertise and insight.
          </p>
        </div>

        <div className="overflow-hidden">
          <JudgesCards />
        </div>
      </div>
    </section>
  );
};

export default Judges;
