import React from "react";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { viewEventDetails } from "../../constants/vieweventdetails";

const Eventdetail = () => {
  const { eventName } = useParams();
  const location = useLocation();
  const event = viewEventDetails[eventName];

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-800 text-lg font-bold">
        Event not found!
      </div>
    );
  }

  // ✅ Detect from URL instead of data
  const isInterCollege = location.pathname.includes("intercollege");

  const eventDate = isInterCollege
    ? event.eventDetails.date2
    : event.eventDetails.date1;

  const registerLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSdOJJqRb6-FZPTLYo9rKrTK5kTviiey_57NOgfgmVY4McBlig/viewform";

  return (
    <div className="flex w-full min-h-screen flex-col items-center bg-[var(--color-brand-bg)] pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl w-full space-y-16"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-blend uppercase tracking-tight">
            {event.title}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF5C00] to-[#D90000] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="space-y-10">
            <div className="glass-card p-4 relative group overflow-hidden border-2 border-white/50">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-auto rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            <div className="space-y-6">
              <p className="text-xl font-bold text-gray-800 leading-relaxed italic">
                {event.description}
              </p>
              <p className="text-gray-900 font-bold leading-relaxed">
                {event.brief}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            {/* Rules */}
            <div className="glass-card p-8 space-y-6 border-l-4 border-l-[var(--color-brand-secondary)]">
              <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
                Rules & Regulations
              </h3>
              <ul className="space-y-4">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex gap-4 text-gray-800 font-bold leading-relaxed">
                    <span className="text-[var(--color-brand-secondary)] font-black text-lg">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Date</span>
                <p className="text-lg font-bold text-gray-800">{eventDate}</p>
              </div>

              <div className="glass-card p-6 text-center space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Time</span>
                <p className="text-lg font-bold text-gray-800">{event.eventDetails.time}</p>
              </div>

              <div className="glass-card p-6 text-center space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fees</span>
                <p className="text-lg font-bold text-gray-800">{event.eventDetails.fees}</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 text-center">
              {isInterCollege ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-5 rounded-2xl bg-gradient-to-r from-[#FF5C00] to-[#D90000] text-white font-black text-xl uppercase tracking-widest shadow-xl shadow-orange-500/20"
                >
                  Register as Participant
                </motion.a>
              ) : (
                <h2 className="text-2xl font-black text-[var(--color-brand-secondary)] uppercase tracking-wide">
                  Reach Following Event Coordinator
                </h2>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Eventdetail;
