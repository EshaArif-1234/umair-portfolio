import React from 'react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const portals = [
  { name: 'Availity', logo: '/assets/tools/availty.png' },
  { name: 'Trizetto', logo: '/assets/tools/trizetto.png' },
  { name: 'UHC', logo: '/assets/tools/UHC.png' },
  { name: 'UHSS', logo: '/assets/tools/UHSS.png' },
  { name: 'Noridian', logo: '/assets/tools/Noridian.png' },
  { name: 'Kaiser', logo: '/assets/tools/kaiser.png' },
]

const ehrSystems = [
  { name: 'Modemd', logo: '/assets/tools/modemed.png' },
  { name: 'Office Ally', logo: '/assets/tools/officeally.png' },
  { name: 'Cure MD', logo: '/assets/tools/cure-md.png' },
  { name: 'Chirotech', logo: '/assets/tools/chirotech.png' },
  { name: 'Jane', logo: '/assets/tools/jane.png' },
  { name: 'NextGen', logo: '/assets/tools/next-gen.png' },
  { name: 'Practice Fusion', logo: '/assets/tools/practice-fucsion.png' },
  { name: 'Epic', logo: '/assets/tools/Epic.png' },
]

const Tools: React.FC = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="tools" className="w-full bg-gradient-to-b from-light to-light/80 dark:from-deepDark dark:to-dark/80 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 sm:-top-24 -left-16 sm:-left-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 sm:-bottom-24 -right-16 sm:-right-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deepDark dark:text-light mb-3 sm:mb-4 drop-shadow-lg dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
            Tools I Use
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark/90 dark:text-light/80 max-w-3xl mx-auto leading-relaxed">
            I work with a variety of medical billing and EHR platforms to ensure accuracy and efficiency in claim management.
          </p>
        </motion.div>

        {/* Portals Slider */}
        <div className="relative z-10 max-w-7xl mx-auto overflow-hidden mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-deepDark dark:text-light mb-3 sm:mb-4 text-center">Billing Portals</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-light dark:from-deepDark to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-light dark:from-deepDark to-transparent z-20"></div>
            <Marquee 
              pauseOnHover={true} 
              gradient={false} 
              speed={25} 
              className="py-3 sm:py-4 md:py-6 overflow-visible" 
            >
              <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 items-center">
                {[...portals, ...portals].map((portal, index) => (
                  <motion.div 
                    key={`${portal.name}-${index}`}
                    className="flex-shrink-0 w-36 sm:w-40 md:w-44 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center bg-white/90 dark:bg-deepDark/90 rounded-xl sm:rounded-2xl shadow-md dark:shadow-[0_6px_14px_rgba(255,255,255,0.1)] p-3 sm:p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_8px_18px_rgba(255,255,255,0.15)] backdrop-blur-sm sm:backdrop-blur-md border border-white/30 dark:border-deepDark/30"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center mb-1 sm:mb-2">
                      <img
                        src={portal.logo}
                        alt={portal.name}
                        className="h-full w-auto max-w-full object-contain dark:invert transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/images/default-tool.svg';
                        }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-deepDark dark:text-light/90 text-center leading-tight truncate w-full">
                      {portal.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* EHR Systems Slider */}
        <div className="relative z-10 max-w-7xl mx-auto overflow-hidden">
          <h3 className="text-lg sm:text-xl font-bold text-deepDark dark:text-light mb-3 sm:mb-4 text-center">EHR Systems</h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-light dark:from-deepDark to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-light dark:from-deepDark to-transparent z-20"></div>
            <Marquee 
              pauseOnHover={true} 
              gradient={false} 
              speed={30} 
              className="py-3 sm:py-4 md:py-6 overflow-visible"
              direction="right"
            >
              <div className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 items-center">
                {[...ehrSystems, ...ehrSystems].map((ehr, index) => (
                  <motion.div 
                    key={`${ehr.name}-${index}`}
                    className="flex-shrink-0 w-36 sm:w-40 md:w-44 h-28 sm:h-32 md:h-36 flex flex-col items-center justify-center bg-white/90 dark:bg-deepDark/90 rounded-xl sm:rounded-2xl shadow-md dark:shadow-[0_6px_14px_rgba(255,255,255,0.1)] p-3 sm:p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_8px_18px_rgba(255,255,255,0.15)] backdrop-blur-sm sm:backdrop-blur-md border border-white/30 dark:border-deepDark/30"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-12 sm:h-14 md:h-16 w-full flex items-center justify-center mb-1 sm:mb-2">
                      <img
                        src={ehr.logo}
                        alt={ehr.name}
                        className="h-full w-auto max-w-full object-contain dark:invert transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/assets/images/default-ehr.svg';
                        }}
                      />
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-deepDark dark:text-light/90 text-center leading-tight truncate w-full">
                      {ehr.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tools
