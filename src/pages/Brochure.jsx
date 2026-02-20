import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

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
      </div>

      <Navbar />

      {/* PAGE CONTENT */}
      <div className="relative z-10 pt-36 pb-24 px-6 flex flex-col items-center">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
          BROCHURES
        </h1>

        {/* SPONSOR CARD */}
        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-12 mb-16 text-center border border-white/40">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600">
            Sponsors Brochure
          </h2>

          <p className="text-gray-700 text-lg mb-8">
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
        <div className="w-full max-w-4xl bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-12 text-center border border-white/40">

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600">
            Event Brochure
          </h2>

          <p className="text-gray-700 text-lg mb-8">
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

      {/* FOOTER */}
      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </div>
  );
};

export default Brochure;
