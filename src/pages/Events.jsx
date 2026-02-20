import React from "react";
import Navbar from "../components/Navbar";
import Intraclgevents from "../components/Intraclgevents";
// import Fireworks from "../components/ui/fireworks";
import Background from "../components/Background";
import Eventdetailscard from "../components/Eventdetailcards";
import Footer from "../components/Footer";

const Events = () => {
  return (
    <div className="w-screen h-auto bg-[var(--color-brand-bg)] bg-cover relative">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      {/* <Fireworks /> */}
      <Navbar />
      <Intraclgevents />
      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </div>
  );
};

export default Events;
