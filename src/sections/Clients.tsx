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
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className={`group relative h-36 w-64 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
        isDark 
          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20' 
          : 'bg-white/60 hover:bg-white/80 border border-gray-200/80 hover:border-gray-300'
      }`}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
        isDark 
          ? 'from-blue-500/10 to-purple-500/10' 
          : 'from-blue-200/30 to-purple-200/30'
      } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Client logo */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className={`h-20 w-20 object-contain transition-all duration-500 ${
            isDark 
              ? 'opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100' 
              : 'opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100'
          }`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = `text-center text-sm font-medium ${
              isDark 
                ? 'text-white/80 group-hover:text-white' 
                : 'text-gray-700 group-hover:text-gray-900'
            } transition-colors duration-300`;
            fallback.textContent = client.name;
            e.currentTarget.parentElement?.appendChild(fallback);
          }}
        />
      </div>
      
      {/* Subtle shine effect on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
    </motion.div>
  ))}

        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
