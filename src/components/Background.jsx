import React from "react";
import { motion } from "framer-motion";

const emberParticles = [
  { left: "4%", size: 4, duration: 7.6, delay: 0.4, drift: 18 },
  { left: "9%", size: 3, duration: 8.2, delay: 1.1, drift: -12 },
  { left: "15%", size: 5, duration: 6.9, delay: 0.8, drift: 26 },
  { left: "22%", size: 3, duration: 7.7, delay: 1.9, drift: -14 },
  { left: "29%", size: 4, duration: 6.5, delay: 0.6, drift: 20 },
  { left: "36%", size: 5, duration: 7.4, delay: 1.3, drift: -16 },
  { left: "43%", size: 3, duration: 8.1, delay: 0.2, drift: 14 },
  { left: "50%", size: 4, duration: 6.8, delay: 1.6, drift: -20 },
  { left: "57%", size: 3, duration: 7.9, delay: 0.5, drift: 12 },
  { left: "64%", size: 5, duration: 6.6, delay: 1.4, drift: -24 },
  { left: "71%", size: 4, duration: 7.2, delay: 0.9, drift: 18 },
  { left: "78%", size: 3, duration: 8.4, delay: 2.1, drift: -10 },
  { left: "85%", size: 5, duration: 7.0, delay: 0.7, drift: 16 },
  { left: "92%", size: 3, duration: 8.0, delay: 1.8, drift: -18 },
  { left: "97%", size: 4, duration: 6.7, delay: 0.3, drift: 10 },
];

const sparkStreaks = [
  { left: "6%", width: 20, delay: 0.2, duration: 4.4, tilt: -36, drift: 46 },
  { left: "12%", width: 14, delay: 1.5, duration: 5.1, tilt: -28, drift: 30 },
  { left: "19%", width: 17, delay: 0.9, duration: 4.8, tilt: -44, drift: 52 },
  { left: "27%", width: 12, delay: 2.2, duration: 5.3, tilt: -31, drift: 28 },
  { left: "34%", width: 18, delay: 0.3, duration: 4.6, tilt: -39, drift: 44 },
  { left: "41%", width: 15, delay: 1.7, duration: 5.0, tilt: -26, drift: 32 },
  { left: "48%", width: 21, delay: 0.6, duration: 4.3, tilt: -41, drift: 50 },
  { left: "56%", width: 13, delay: 1.9, duration: 5.4, tilt: -34, drift: 26 },
  { left: "63%", width: 19, delay: 0.7, duration: 4.7, tilt: -38, drift: 48 },
  { left: "71%", width: 14, delay: 2.0, duration: 5.2, tilt: -29, drift: 30 },
  { left: "79%", width: 16, delay: 1.1, duration: 4.5, tilt: -43, drift: 42 },
  { left: "87%", width: 20, delay: 0.4, duration: 4.2, tilt: -37, drift: 54 },
  { left: "94%", width: 12, delay: 2.4, duration: 5.6, tilt: -32, drift: 24 },
];

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#020202] select-none pointer-events-none">
      {/* Dark fire base */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_100%_100%,_rgba(255,116,0,0.36)_0%,_rgba(127,17,2,0.28)_30%,_rgba(11,3,2,0.92)_62%,_#020202_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_0%_100%,_rgba(199,33,5,0.3)_0%,_transparent_58%),radial-gradient(55%_50%_at_78%_72%,_rgba(255,88,0,0.2)_0%,_transparent_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(255,82,0,0.18)_0%,_rgba(12,4,3,0.72)_34%,_rgba(2,2,2,0.96)_62%,_#000_100%)]" />

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.2, 0.34, 0.24],
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "linear-gradient(118deg, rgba(255, 103, 0, 0.08) 0%, rgba(255, 56, 0, 0.28) 48%, rgba(255, 161, 46, 0.1) 100%)",
          backgroundSize: "220% 220%",
        }}
      />

      {/* Glow zones similar to reference */}
      <motion.div
        className="absolute -bottom-32 right-[-8%] h-[62%] w-[56%] rounded-full blur-3xl"
        animate={{ opacity: [0.42, 0.66, 0.48], scale: [0.96, 1.04, 0.98] }}
        transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at center, rgba(255,124,0,0.74) 0%, rgba(255,63,0,0.4) 38%, rgba(130,15,3,0.12) 70%, transparent 84%)",
        }}
      />
      <motion.div
        className="absolute -top-10 left-[-6%] h-[42%] w-[38%] blur-3xl"
        animate={{ opacity: [0.16, 0.28, 0.2], x: [0, 24, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,60,16,0.42) 0%, rgba(180,24,4,0.22) 36%, transparent 72%)",
        }}
      />

      {/* Smoke/grain */}
      <motion.div
        className="absolute inset-0 mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255, 97, 0, 0.06) 0%, transparent 22%), radial-gradient(circle at 80% 24%, rgba(255, 129, 39, 0.05) 0%, transparent 18%), radial-gradient(circle at 65% 68%, rgba(255, 55, 0, 0.08) 0%, transparent 24%)",
        }}
        animate={{ opacity: [0.16, 0.28, 0.18] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Spark streaks */}
      {sparkStreaks.map((spark, index) => (
        <motion.span
          key={`spark-${index}`}
          className="absolute -bottom-10 rounded-full"
          style={{
            left: spark.left,
            width: `${spark.width}px`,
            height: "2px",
            transform: `rotate(${spark.tilt}deg)`,
            background:
              "linear-gradient(90deg, rgba(255,210,126,0) 0%, rgba(255,206,120,0.95) 45%, rgba(255,95,0,1) 100%)",
            boxShadow: "0 0 12px rgba(255, 109, 21, 0.8)",
          }}
          animate={{
            y: [0, -460],
            x: [0, spark.drift],
            opacity: [0, 0.98, 0],
            scaleX: [0.84, 1.2, 0.72],
          }}
          transition={{
            duration: spark.duration,
            delay: spark.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Rising embers */}
      {emberParticles.map((ember, index) => (
        <motion.span
          key={index}
          className="absolute -bottom-6 rounded-full blur-[1px]"
          style={{
            left: ember.left,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            background:
              "radial-gradient(circle, rgba(255,244,190,0.95) 0%, rgba(255,132,33,0.7) 48%, rgba(255,80,0,0.1) 100%)",
            boxShadow: "0 0 10px rgba(255, 110, 0, 0.8)",
          }}
          animate={{
            y: [0, -420],
            x: [0, ember.drift, 0],
            opacity: [0, 0.96, 0],
            scale: [0.6, 1, 0.3],
          }}
          transition={{
            duration: ember.duration,
            delay: ember.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(0,0,0,0.24)_0%,_rgba(0,0,0,0.08)_35%,_rgba(0,0,0,0.34)_100%)]" />
    </div>
  );
};

export default Background;
