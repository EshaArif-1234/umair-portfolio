import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12 bg-light dark:bg-deepDark overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/30 to-transparent dark:from-indigo-900/20 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/10 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        {isMounted && (
          <>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-deepDark dark:text-light tracking-tight drop-shadow-md"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-dark/90 dark:text-light/90 leading-relaxed mb-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hello! I’m <span className="font-bold text-indigo-600 dark:text-indigo-400">Umair Hassan</span>, a passionate and detail-oriented medical biller with over 5 years of experience in healthcare billing, insurance claim processing, and revenue cycle management. My focus is on accuracy, compliance, and maximizing reimbursement for healthcare providers.
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-dark/90 dark:text-light/90 leading-relaxed"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Whether it’s working with Medicare, Medicaid, or private insurance claims, I bring a proven track record of reducing denials and improving billing workflows using modern tools and technology.
            </motion.p>
            <motion.button
              className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-light px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => window.location.href = "#contact"}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              Contact Me
            </motion.button>
          </>
        )}
      </div>

      {/* Empty div for visual balance (can add image or illustration later) */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center z-10">
        <motion.div 
          className="w-3/4 h-3/4 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-lg shadow-xl transform rotate-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="w-3/4 h-3/4 bg-indigo-300/20 dark:bg-indigo-700/20 rounded-lg shadow-xl transform -rotate-3 absolute"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;
