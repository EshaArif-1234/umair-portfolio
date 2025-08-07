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
          ? 'bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white'
          : 'bg-gradient-to-b from-[#e0e1dd] via-[#778da9] to-[#415a77] text-[#0d1b2a]'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#415a77]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#0d1b2a]/20 rounded-full blur-3xl"></div>
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center mt-10 mx-auto"
        >
          {clients.map((client, index) => (
  <motion.div
    key={index}
    variants={fadeIn}
    className={`flex justify-center items-center h-28 w-52 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 ${
      isDark ? 'bg-white hover:bg-gray-100' : 'bg-white/80 hover:bg-white'
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
          isDark ? 'text-gray-600' : 'text-gray-500'
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
