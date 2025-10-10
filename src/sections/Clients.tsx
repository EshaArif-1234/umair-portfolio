'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  { 
    name: 'Advanced Pain Management Clinic', 
    logo: '/assets/clients/Advance.png',
    url: 'https://advancedpainmanagementclinic.com/' 
  },
  { 
    name: 'AMCare Medical Clinic', 
    logo: '/assets/clients/AMCARE.png',
    url: 'https://www.amcaremedicalclinic.org/' 
  },
  { 
    name: 'Southern California Heart Specialists', 
    logo: '/assets/clients/Socal.jpeg',
    url: 'https://socalheart.com/' 
  },
  { 
    name: 'Thrive Medical (Primary Care)', 
    logo: '/assets/clients/primary-care.png',
    url: 'https://thrivemedical.com/' 
  },
  { 
    name: 'Thrive Psychological Services', 
    logo: '/assets/clients/thrive.png',
    url: 'https://thrivepsychservices.org/' 
  },
];

const container = {
  hidden: { opacity: 0 } as const,
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  } as const
};

const item = {
  hidden: { y: 20, opacity: 0 } as const,
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  } as const,
  hover: {
    y: -8,
    transition: { duration: 0.2 },
  } as const
};

const ClientsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme;

  return (
    <section
      id="clients"
      className={`relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 ${
        isDark
          ? 'bg-gradient-to-b from-deepDark via-dark to-deepDark text-white'
          : 'bg-gradient-to-b from-light/90 via-light/70 to-light/90 text-deepDark'
      }`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-80 sm:h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-80 sm:h-80 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-radial from-primary/5 to-transparent rounded-full opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto"
        >
          <motion.h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              isDark 
                ? 'text-white' 
                : 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'
            }`}
          >
            Trusted By Leading Healthcare Providers
          </motion.h2>
          <motion.p 
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            } max-w-3xl mx-auto`}
          >
            Partnering with healthcare providers to streamline their medical billing processes and maximize revenue.
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-4"
        >
          {clients.map((client, index) => (
            <motion.a
              key={`${client.name}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover="hover"
              className={`group relative block h-28 sm:h-36 md:h-40 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-sm transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20'
                  : 'bg-white/60 hover:bg-white/80 border border-gray-200/80 hover:border-gray-300 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Glow effect */}
              <div 
                className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${
                  isDark
                    ? 'from-primary/10 via-secondary/5 to-transparent'
                    : 'from-primary/20 via-secondary/10 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Client logo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`max-h-12 sm:max-h-16 md:max-h-20 w-auto max-w-full transition-all duration-300 ${
                    isDark ? 'opacity-90 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = `text-center text-sm font-medium ${
                      isDark 
                        ? 'text-white/80 group-hover:text-white' 
                        : 'text-gray-700 group-hover:text-gray-900'
                    } transition-colors duration-300`;
                    fallback.textContent = client.name;
                    target.parentNode?.replaceChild(fallback, target);
                  }}
                />
              </div>
      
              {/* Subtle shine effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
            </motion.a>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
