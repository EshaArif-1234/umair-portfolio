import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Variants for background particle animation
  const particleVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.5, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as Easing,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <div className="w-full h-screen relative overflow-hidden" id="hero">
      {/* Animated background with gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-40 dark:opacity-30 animate-gradient-background"></div> */}

      {/* Particle effects for dynamic feel */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            className="absolute bg-white dark:bg-light/60 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.9, // ⬅️ more visible
            }}
            transition={{
              delay: Math.random() * 3,
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Overlay Text/CTA */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-transparent to-light/50 dark:to-dark/50">
        {isMounted && (
          <>
            <motion.h1
              key="heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-6 dark:text-light text-deepDark tracking-tight drop-shadow-xl"
            >
              Hi, I'm Umair Hassan
            </motion.h1>
            <motion.p
              key="subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="text-xl md:text-3xl max-w-3xl dark:text-light/90 text-deepDark/90 leading-relaxed mb-8 drop-shadow-md font-medium"
            >
              Medical Biller | Insurance Claims | Revenue Cycle Management
            </motion.p>
            <motion.div
              key="cta-buttons"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-light px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Get in Touch
              </button>
              <button
                className="border-2 border-indigo-600 bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-900/20 text-indigo-600 dark:text-light px-10 py-4 rounded-full font-semibold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                onClick={() => (window.location.href = "#portfolio")}
              >
                View My Work
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
