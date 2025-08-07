'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: 'Advance', logo: '/public/assets/clients/Advance.png' },
  { name: 'AMCARE', logo: '/public/assets/clients/AMCARE.png' },
  { name: 'Socal', logo: '/public/assets/clients/Socal.jpeg' },
  { name: 'Primary Care', logo: '/public/assets/clients/primary-care.png' },
  { name: 'Thrive', logo: '/public/assets/clients/thrive.png' },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ClientsSection: React.FC = () => {
  const { theme } = useTheme();

  const isDark = theme;

  return (
    <section
      id="clients"
      className={`py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        isDark
          ? 'bg-gradient-to-b from-black to-[#0e0e0e]/90 text-light'
          : 'bg-gradient-to-b from-[#f8f9fa] to-[#f8f9fa]/80 text-deepDark'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-[#1b263b]'
            }`}
          >
            Trusted By Clients
          </h2>
          <p
            className={`text-lg mt-4 max-w-2xl mx-auto ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Working with a variety of medical billing clients across different specialties and regions.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center mt-10 max-w-5xl"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className={`flex justify-center items-center h-28 w-52 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
                isDark ? 'bg-white/10' : 'bg-black/5'
              }`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 w-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = `h-16 w-16 flex items-center justify-center text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`;
                  fallback.textContent = client.name;
                  e.currentTarget.parentElement?.appendChild(fallback);
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
