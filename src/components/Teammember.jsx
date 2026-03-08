import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import memberDetails from "../constants/memberDetails";

const DEPARTMENTS = ["CSE", "AIDS"];

const AVATAR_GRADIENTS = [
  "from-amber-400 to-orange-600",
  "from-orange-500 to-red-700",
  "from-yellow-400 to-amber-600",
  "from-orange-400 to-red-600",
  "from-orange-300 to-orange-700",
  "from-red-500 to-orange-600",
];

const getInitials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const Teammember = () => {
  const [activeDept, setActiveDept] = useState("CSE");

  const filtered = memberDetails.filter((m) => m.department === activeDept);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 pt-32 space-y-16 overflow-hidden bg-transparent">
      <div className="text-center space-y-4 max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blend uppercase tracking-tight">
          Meet the Team
        </h2>
        <p className="text-[#f2d2b0] font-bold max-w-xl mx-auto">
          The minds behind Paayumoli - click a name to connect on LinkedIn.
        </p>
      </div>

      <div className="p-1.5 glass-nav inline-flex items-center gap-1 bg-black/35 backdrop-blur-md rounded-full border border-orange-200/30 shadow-xl">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept}
            onClick={() => setActiveDept(dept)}
            className={`px-10 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${
              activeDept === dept
                ? "bg-gradient-to-r from-[#FF5C00] to-[#D90000] text-white shadow-lg shadow-orange-500/20"
                : "text-orange-100 hover:bg-orange-400/15"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeDept}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45 }}
          className="w-full max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-2"
        >
          {filtered.map((member, idx) => (
            <motion.a
              key={member.id}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative flex flex-col items-center justify-center px-4 py-6 glass-card rounded-2xl text-orange-50 font-black text-sm sm:text-base uppercase tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-6px_rgba(255,92,0,0.25)] hover:border-[var(--color-brand-primary)]/40"
            >
              <div className="mb-3 relative">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-[3px] border-orange-200/45 shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div
                    className={`w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${
                      AVATAR_GRADIENTS[member.id % AVATAR_GRADIENTS.length]
                    } flex items-center justify-center border-[3px] border-orange-200/45 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="text-white text-lg sm:text-xl font-black drop-shadow-md">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              <span className="relative">
                {member.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5C00] to-[#D90000] group-hover:w-full transition-all duration-400 rounded-full" />
              </span>

              <svg
                className="absolute top-2 right-2 w-4 h-4 text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452H17.21v-5.568c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.665H9.985V9h3.102v1.561h.043c.432-.82 1.488-1.684 3.063-1.684 3.274 0 3.878 2.155 3.878 4.958v6.617zM5.337 7.433a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zm1.603 13.019H3.733V9h3.207v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Teammember;
