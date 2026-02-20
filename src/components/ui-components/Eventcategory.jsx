import React from "react";
import { Link } from "react-router-dom";

const ClgEventscard = ({ imageUrl, eventName }) => {
  return (
    <Link
      to={`/${eventName.toLowerCase().replace(/\s+/g, "")}`}
      className="block group"
    >
      <div className="relative w-64 sm:w-80 md:w-96 h-96 sm:h-[450px] md:h-[500px] overflow-hidden rounded-[32px] bg-gray-200 transition-all duration-500 group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]">
        {/* Image with Brand-aligned Filter */}
        <img
          src={imageUrl}
          alt={eventName}
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-110 sepia-[.3] hue-rotate-[-30deg] saturate-[1.2] brightness-[0.8]"
          loading="lazy"
        />

        {/* Heritage Mural Overlay */}
        <div className="absolute inset-0 z-5 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z' fill='%23FFB800' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px'
          }}
        />

        {/* Dynamic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[var(--color-brand-secondary)]/20 to-transparent z-10 opacity-80 transition-opacity group-hover:opacity-95" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
          <div className="space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight uppercase shadow-sm">
              {eventName}
            </h3>
            <div className="flex items-center gap-2 text-[var(--color-brand-primary)] font-bold uppercase tracking-[0.2em] text-xs">
              <span className="w-8 h-[2px] bg-[var(--color-brand-primary)]" />
              Learn More
            </div>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute -inset-2 bg-gradient-to-br from-[var(--color-brand-primary)] to-[var(--color-brand-accent)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default ClgEventscard;
