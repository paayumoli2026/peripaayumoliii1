import React from "react";
import Sponsorscards from "./ui-components/Sponsorscards";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
            Our Partners
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto font-bold">
            Supported by industry leaders who believe in the power of culture and innovation.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-12">
          <Sponsorscards />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
