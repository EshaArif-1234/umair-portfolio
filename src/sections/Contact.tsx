"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useGLTF } from "@react-three/drei";
import ErrorBoundary from "../ components/ThreeModels/ErrorBoundary";

const FloatingMedicalIcon = () => {
  const { scene } = useGLTF("/assets/models/medical-icon.glb");

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={0.5} />
    </Float>
  );
};

const FallbackSphere = () => (
  <Float speed={2} rotationIntensity={1} floatIntensity={2}>
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#778da9" />
    </mesh>
  </Float>
);

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-16 md:py-20 bg-gradient-to-br from-[#e0e1dd] via-white to-[#778da9] dark:bg-gradient-to-br dark:from-black dark:via-[#0d1b2a] dark:to-black text-[#0d1b2a] dark:text-white"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Side: 3D Canvas */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <OrbitControls enableZoom={false} />
            <ErrorBoundary fallback={<FallbackSphere />}>
              <FloatingMedicalIcon />
            </ErrorBoundary>
          </Canvas>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white dark:bg-[#1b263b] rounded-xl shadow-xl p-8 md:p-10 w-full md:w-1/2 max-w-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-sm mb-6 text-center text-gray-700 dark:text-gray-300">
            Let’s work together on your medical billing needs.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none text-black dark:text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none text-black dark:text-white"
              required
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none text-black dark:text-white"
              required
            />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="w-full bg-[#778da9] dark:bg-[#e0e1dd] text-white dark:text-[#0d1b2a] p-3 rounded transition-all font-semibold"
            >
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
