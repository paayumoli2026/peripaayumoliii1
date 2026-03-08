import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";
import {
  technicalEvents as intraTechnical,
  onStageEvents as intraOnStage,
  offStageEvents as intraOffStage,
} from "../constants/intraEventDetails";
import {
  technicalEvents as interTechnical,
  onStageEvents as interOnStage,
  offStageEvents as interOffStage,
} from "../constants/interEventDetails";
import ClgEventscard from "./ui-components/Clgeventscard";

const Intraclgevents = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 pt-32 space-y-12 overflow-hidden bg-transparent">
      <CustomTabs />
    </div>
  );
};

const CustomTabs = () => {
  const { events } = useParams();
  const isIntracollege = events?.toLowerCase() === "intracollege";

  const [activeTab, setActiveTab] = useState("onstage");
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const tabs = [
    { id: "onstage", label: "On-Stage" },
    { id: "offstage", label: "Off-Stage" },
    { id: "technical", label: "Technical" },
  ];

  return (
    <div className="w-full flex flex-col items-center space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
          {isIntracollege ? "Intra College Events" : "Inter College Events"}
        </h2>
        <p className="text-[#f3d5b3] max-w-2xl mx-auto font-black italic">
          {isIntracollege
            ? "Special internal competitions for our institute's rising stars."
            : "Massive showdowns with participants from across the region."}
        </p>
      </div>

      {/* Search Input */}
      <div className="relative w-full max-w-[500px] group">
        <input
          type="text"
          placeholder={`Search ${activeTab.replace("stage", " stage")} events...`}
          value={search}
          onChange={handleSearchChange}
          className="w-full px-6 py-4 text-lg text-[#ffe3c5] glass-card border-2 border-transparent focus:border-[var(--color-brand-primary)]/50 outline-none transition-all duration-300 placeholder:text-[#c38960] font-black text-center"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)] group-focus-within:w-1/2 transition-all duration-500" />
      </div>

      {/* Modern Glass Tab Selector */}
      <div className="p-1.5 glass-nav inline-flex items-center gap-1 bg-black/35 backdrop-blur-md rounded-full border border-orange-200/30 shadow-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id
              ? "bg-gradient-to-r from-[#FF5C00] to-[#D90000] text-white shadow-lg shadow-orange-500/20"
              : "text-orange-100 hover:bg-orange-400/15"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Event Grid */}
      <div className="w-full max-w-7xl mx-auto">
        <EventList activeTab={activeTab} search={search} isIntracollege={isIntracollege} />
      </div>
    </div>
  );
};

const EventList = ({ activeTab, search, isIntracollege }) => {
  let eventData = [];

  if (isIntracollege) {
    if (activeTab === "technical") eventData = intraTechnical;
    else if (activeTab === "onstage") eventData = intraOnStage;
    else if (activeTab === "offstage") eventData = intraOffStage;
  } else {
    if (activeTab === "technical") eventData = interTechnical;
    else if (activeTab === "onstage") eventData = interOnStage;
    else if (activeTab === "offstage") eventData = interOffStage;
  }

  const filteredEvents = (eventData || []).filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      key={`${isIntracollege}-${activeTab}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
    >
      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <ClgEventscard
            key={event.title}
            imageUrl={event.image}
            eventName={event.title}
            url={event.url}
          />
        ))
      ) : (
        <div className="col-span-full py-20 text-center space-y-4">
          <p className="text-2xl font-black text-orange-100 italic">No events match your quest</p>
          <div className="h-1 w-12 bg-orange-300/60 mx-auto rounded-full" />
        </div>
      )}
    </motion.div>
  );
};

export default Intraclgevents;
