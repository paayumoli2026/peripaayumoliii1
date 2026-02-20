import React from "react";
import { motion } from "framer-motion";
import { FiMusic, FiMic, FiCode, FiAward } from "react-icons/fi";

const features = [
    {
        title: "Musical Gala",
        description: "Experience the soul of Tamil heritage through heart-pounding rhythms and divine melodies.",
        icon: <FiMusic className="text-3xl" />,
        color: "from-[#FFB800] to-[#FF5C00]"
    },
    {
        title: "Vocal Showdown",
        description: "Witness incredible talent as vocalists compete for the grand title in an epic stage performance.",
        icon: <FiMic className="text-3xl" />,
        color: "from-[#FF5C00] to-[#D90000]"
    },
    {
        title: "Tech Innovation",
        description: "Where tradition meets future. Explore cutting-edge tech events and digital art displays.",
        icon: <FiCode className="text-3xl" />,
        color: "from-[#D90000] to-[#8B0000]"
    },
    {
        title: "Grand Rewards",
        description: "Unparalleled recognition and prestigious awards for the most outstanding festival performers.",
        icon: <FiAward className="text-3xl" />,
        color: "from-[#8B0000] to-[#FFB800]"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 px-6 bg-transparent relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black text-blend uppercase tracking-tight">
                        Festival Highlights
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Dive into the most anticipated moments of Paayumoli, where every performance tells a story of passion and culture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 group relative overflow-hidden"
                        >
                            {/* Background Accent */}
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${feature.color} opacity-80`} />

                            <div className="space-y-6 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg shadow-orange-500/20`}>
                                    {feature.icon}
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
