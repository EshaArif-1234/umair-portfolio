// src/sections/ContactSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useGLTF } from "@react-three/drei";
// import { ComputerCanvas } from "../components/ThreeModels/ComputerModel";

const FloatingMedicalIcon = () => {
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);
  const { scene, error } = useGLTF("/assets/models/medical-icon.glb", true, (err) => {
    console.error("Failed to load medical icon model:", err);
    setModelLoaded(false);
  });

  useEffect(() => {
    if (error || !scene) {
      setModelLoaded(false);
    } else {
      setModelLoaded(true);
    }
  }, [error, scene]);

  if (!modelLoaded) {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#778da9" />
        </mesh>
      </Float>
    );
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={0.5} />
    </Float>
  );
}; 


const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative min-h-[100vh] p-6 md:p-12 flex items-center justify-center bg-[#e0e1dd] dark:bg-[#0d1b2a] text-[#0d1b2a] dark:text-[#e0e1dd]">
      {/* 3D Background - Commented out to run project without 3D models */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <ComputerCanvas />
      </div> */}

      <div className="bg-white dark:bg-[#1b263b] rounded-xl shadow-lg w-full max-w-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-sm mb-6 text-center">Let's work together on your medical billing needs.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded bg-gray-100 dark:bg-[#415a77] outline-none"
            required
          />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-[#778da9] dark:bg-[#e0e1dd] text-white dark:text-[#0d1b2a] p-3 rounded transition-all"
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
    </section>
  );
};

export default ContactSection;
