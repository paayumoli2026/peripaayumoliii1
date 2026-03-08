import React from "react";
import { motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { viewEventDetails } from "../../constants/vieweventdetails";

const Eventdetail = () => {
  const { eventName } = useParams();
  const location = useLocation();
  const event = viewEventDetails[eventName];

  const INTER_COLLEGE_REGISTER_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSdOJJqRb6-FZPTLYo9rKrTK5kTviiey_57NOgfgmVY4McBlig/viewform";
  const INTRA_COLLEGE_REGISTER_LINK = "https://forms.gle/MfdJbpXJNDfBovgi7";

  if (!event) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-bold text-orange-100">
        Event not found!
      </div>
    );
  }

  // Detect from URL instead of event data.
  const isInterCollege = location.pathname.includes("intercollege");

  const eventDate = isInterCollege
    ? event.eventDetails.date2
    : event.eventDetails.date1;

  const registerLink = isInterCollege
    ? INTER_COLLEGE_REGISTER_LINK
    : INTRA_COLLEGE_REGISTER_LINK;

  return (
    <div className="flex w-full min-h-screen flex-col items-center bg-[var(--color-brand-bg)] px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl space-y-16"
      >
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-blend uppercase tracking-tight">
            {event.title}
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#FF5C00] to-[#D90000]" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="glass-card group relative overflow-hidden border-2 border-orange-200/35 p-4">
              <img
                src={event.poster}
                alt={event.title}
                className="h-auto w-full rounded-2xl shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="text-xl font-bold italic leading-relaxed text-[#f0d1ad]">
                {event.description}
              </p>
              <p className="font-bold leading-relaxed text-[#f6e2c7]">
                {event.brief}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="glass-card space-y-6 border-l-4 border-l-[var(--color-brand-secondary)] p-8">
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#f6e2c7]">
                Rules and Regulations
              </h3>
              <ul className="space-y-4">
                {event.rules.map((rule, index) => (
                  <li
                    key={index}
                    className="flex gap-4 font-bold leading-relaxed text-[#f0d1ad]"
                  >
                    <span className="text-lg font-black text-[var(--color-brand-secondary)]">
                      &bull;
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`grid grid-cols-1 gap-6 ${
                isInterCollege ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              <div className="glass-card space-y-2 p-6 text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-200/70">
                  Date
                </span>
                <p className="text-lg font-bold text-[#f0d1ad]">{eventDate}</p>
              </div>

              <div className="glass-card space-y-2 p-6 text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-200/70">
                  Time
                </span>
                <p className="text-lg font-bold text-[#f0d1ad]">
                  {event.eventDetails.time}
                </p>
              </div>

              {isInterCollege && (
                <div className="glass-card space-y-2 p-6 text-center">
                  <span className="text-[10px] font-black uppercase tracking-widest text-orange-200/70">
                    Fees
                  </span>
                  <p className="text-lg font-bold text-[#f0d1ad]">
                    {event.eventDetails.fees}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-6 text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-2xl bg-gradient-to-r from-[#FF5C00] to-[#D90000] py-5 text-center text-xl font-black uppercase tracking-widest text-white shadow-xl shadow-orange-500/20"
              >
                Register as Participant
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Eventdetail;
