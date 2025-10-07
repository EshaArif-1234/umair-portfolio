"use client";
import React, { useState, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import ErrorBoundary from "../components/ThreeModels/ErrorBoundary";
import MoonModel from "../components/ThreeModels/MoonModel";

// 💎 Fallback sphere if model fails
const FallbackSphere = () => (
  <mesh>
    <sphereGeometry args={[0.7, 32, 32]} />
    <meshStandardMaterial color="#778da9" />
  </mesh>
);

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#0d1b2a] via-[#1b263b] to-[#415a77] text-white"
    >
      {/* Background Stars */}
      <div className="absolute inset-0">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={3}
            saturation={0}
            fade
          />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
        </Canvas>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-90">
            Have a project in mind or want to discuss your medical billing needs? Let's connect!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">
          {/* Left Side: 3D Canvas */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.5}
              />
              <ErrorBoundary fallback={<FallbackSphere />}>
                <MoonModel />
              </ErrorBoundary>
            </Canvas>
          </div>

          {/* Right Side: Contact Form */}
          <motion.div 
            className="bg-white/90 dark:bg-[#1b263b]/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-deepDark dark:text-white">
                Contact Me
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Let's work together on your medical billing needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-200"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium sm:font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Message
              </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-center mt-2"
              >
                Thank you! Your message has been sent.
              </motion.p>
            )}
          </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
