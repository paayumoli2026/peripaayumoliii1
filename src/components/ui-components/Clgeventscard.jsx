import React from "react";
import { Link, useLocation } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName, url }) => {
  const location = useLocation();
  const basePath = location.pathname.split("/")[1] || "";

  return (
    <Link
      to={`/${basePath}/${url.toLowerCase().replace(/\s+/g, "")}`}
      onClick={() => window.scrollTo(0, 0)}
      className="block group w-full h-full"
    >
      <div className="relative w-full h-80 sm:h-64 md:h-80 overflow-hidden rounded-[24px] bg-gray-100 transition-all duration-500 group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)]">
        {/* Image */}
        <img
          src={imageUrl}
          alt={eventName}
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-70 transition-opacity group-hover:opacity-90" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <div className="space-y-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight">
              {eventName}
            </h3>
            <div className="flex items-center gap-2 text-[var(--color-brand-primary)] font-bold uppercase tracking-[0.2em] text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="w-6 h-[1.5px] bg-[var(--color-brand-primary)]" />
              View Event
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -inset-1 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default ClgEventscard;
