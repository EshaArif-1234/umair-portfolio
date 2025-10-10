"use client";
import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
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
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!form.current) return;
      
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceId = 'service_your_service_id';
      const templateId = 'template_your_template_id';
      const publicKey = 'your_public_key';

      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      
      setSubmitted(true);
      setFormData({ from_name: '', from_email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="sr-only">Full Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Full Name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="from_email" className="sr-only">Email</label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 sm:p-4 rounded-lg bg-white/80 dark:bg-[#415a77]/80 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none text-deepDark dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-200"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
                whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
                className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium sm:font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Send Message
                  </>
                )}
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
