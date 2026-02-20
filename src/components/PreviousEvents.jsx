import React from "react";
import PreviousEventscards from "./ui-components/PreviousEventscards";

const PreviousEvents = () => {
    return (
        <section id="previous-events" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
                        Previous Events
                    </h2>
                    <p className="text-gray-800 max-w-2xl mx-auto font-bold">
                        Relive the energy and memories from our past celebrations.
                    </p>
                </div>

                <div className="overflow-hidden">
                    <PreviousEventscards />
                </div>
            </div>
        </section>
    );
};

export default PreviousEvents;
