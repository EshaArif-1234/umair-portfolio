'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai';

const About: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const resumeUrl = '/assets/Umair-hassan-cv.pdf';

  return (
    <section id="about" className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 gap-8 sm:gap-12 bg-light dark:bg-deepDark overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-100/30 to-transparent dark:from-indigo-900/20 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-300/10 dark:bg-indigo-800/10 rounded-full blur-3xl"></div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left z-10 px-4 sm:px-6 lg:px-8">
        {isMounted && (
          <div className="max-w-2xl mx-auto lg:mx-0">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-deepDark dark:text-light tracking-tight drop-shadow-md"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-dark/90 dark:text-light/90 leading-relaxed mb-4 sm:mb-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Hello! I'm <span className="font-bold text-indigo-600 dark:text-indigo-400">Umair Hassan</span>, a passionate and detail-oriented medical biller with over 3 years of experience in healthcare billing, insurance claim processing, and revenue cycle management. My focus is on accuracy, compliance, and maximizing reimbursement for healthcare providers.
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-dark/90 dark:text-light/90 leading-relaxed mb-6 sm:mb-8"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Whether it's working with Medicare, Medicaid, or private insurance claims, I bring a proven track record of reducing denials and improving billing workflows using modern tools and technology.
            </motion.p>

            {/* View Resume Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 sm:mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-light px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              View Resume
            </motion.button>
          </div>
        )}
      </div>

      {/* Visual element - Responsive sizing */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[28rem] flex items-center justify-center z-10 mt-8 lg:mt-0">
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

      {/* Resume Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white dark:bg-[#1e293b] w-[90%] max-w-3xl rounded-xl shadow-xl relative p-4">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500 text-2xl"
              aria-label="Close"
            >
              <AiOutlineClose />
            </button>

            {/* Download Icon */}
            <a
              href={resumeUrl}
              download
              className="absolute top-4 left-4 text-gray-600 dark:text-gray-300 hover:text-green-600 text-2xl"
              title="Download Resume"
            >
              <AiOutlineDownload />
            </a>

            {/* Resume Preview */}
            <iframe
              src={resumeUrl}
              className="w-full h-[80vh] mt-10 rounded"
              title="Resume Preview"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
