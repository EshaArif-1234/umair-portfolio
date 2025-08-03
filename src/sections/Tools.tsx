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
  { name: 'AdvancedMD', logo: '/assets/tools/modemed.png' },
  { name: 'DrChrono', logo: '/assets/tools/officeally.png' },
  { name: 'Athenahealth', logo: '/assets/tools/cure-md.png' },
  { name: 'ChiroTouch', logo: '/assets/tools/chirotech.png' },
  { name: 'Jane', logo: '/assets/tools/jane.png' },
  { name: 'NextGen', logo: '/assets/tools/next-gen.png' },
  { name: 'Practice Fusion', logo: '/assets/tools/practice-fucsion.png' },
  { name: 'Epic Systems', logo: '/assets/tools/Epic.png' },
]

const Tools: React.FC = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="tools" className="w-full bg-gradient-to-b from-light to-light/80 dark:from-deepDark dark:to-dark/80 py-20 px-4 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <motion.div 
        className="text-center mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-deepDark dark:text-light mb-4 drop-shadow-lg dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
          Tools I Use
        </h2>
        <p className="text-lg md:text-xl text-dark dark:text-light/80 max-w-3xl mx-auto leading-relaxed">
          I work with a variety of medical billing and EHR platforms to ensure accuracy and efficiency in claim management.
        </p>
      </motion.div>

      {/* Portals Slider */}
      <div className="relative z-10 max-w-6xl mx-auto overflow-hidden mb-12">
        <h3 className="text-xl font-bold text-deepDark dark:text-light mb-4 text-center">Billing Portals</h3>
        <Marquee pauseOnHover={false} gradient={false} speed={30} className="py-6 overflow-hidden" style={{ overflow: 'hidden' }}>
          <div className="flex gap-12 px-8 items-center" style={{ overflow: 'hidden' }}>
            {portals.map((portal, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-48 h-36 flex flex-col items-center justify-center bg-white/90 dark:bg-deepDark/90 rounded-2xl shadow-md dark:shadow-[0_6px_14px_rgba(255,255,255,0.1)] p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_8px_18px_rgba(255,255,255,0.15)] backdrop-blur-md border border-white/30 dark:border-deepDark/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                variants={fadeIn}
              >
                <img
                  src={portal.logo}
                  alt={portal.name}
                  className="max-h-16 object-contain dark:invert transition-all duration-300 h-16 w-auto mb-2"
                />
                <p className="text-sm font-semibold text-deepDark dark:text-light text-center leading-tight truncate w-full">{portal.name}</p>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* EHR Systems Slider */}
      <div className="relative z-10 max-w-6xl mx-auto overflow-hidden">
        <h3 className="text-xl font-bold text-deepDark dark:text-light mb-4 text-center">EHR Systems</h3>
        <Marquee pauseOnHover={false} gradient={false} speed={30} className="py-6 overflow-hidden" style={{ overflow: 'hidden' }} direction="right">
          <div className="flex gap-12 px-8 items-center" style={{ overflow: 'hidden' }}>
            {ehrSystems.map((ehr, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-48 h-36 flex flex-col items-center justify-center bg-white/90 dark:bg-deepDark/90 rounded-2xl shadow-md dark:shadow-[0_6px_14px_rgba(255,255,255,0.1)] p-4 transition-all duration-500 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_8px_18px_rgba(255,255,255,0.15)] backdrop-blur-md border border-white/30 dark:border-deepDark/30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                variants={fadeIn}
              >
                <img
                  src={ehr.logo}
                  alt={ehr.name}
                  className="max-h-16 object-contain dark:invert transition-all duration-300 h-16 w-auto mb-2"
                />
                <p className="text-sm font-semibold text-deepDark dark:text-light text-center leading-tight truncate w-full">{ehr.name}</p>
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Tools
