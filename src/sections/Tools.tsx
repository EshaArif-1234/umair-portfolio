import React from 'react'
import { motion } from 'framer-motion'
import Marquee from 'react-fast-marquee'

const tools: { name: string; logo: string }[] = [
  { name: 'Kareo', logo: '/images/tools/kareo.png' },
  { name: 'AdvancedMD', logo: '/images/tools/advancedmd.png' },
  { name: 'DrChrono', logo: '/images/tools/drchrono.png' },
  { name: 'Athenahealth', logo: '/images/tools/athena.png' },
  { name: 'Office Ally', logo: '/images/tools/officeally.png' },
  { name: 'Practice Fusion', logo: '/images/tools/pfusion.png' },
  { name: 'Epic Systems', logo: '/images/tools/epic.png' },
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

      {/* Logo Slider */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <Marquee pauseOnHover gradient={false} speed={50} className="py-4">
          <div className="flex gap-16 items-center">
            {tools.map((tool, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-40 h-24 flex items-center justify-center bg-white/80 dark:bg-deepDark/80 rounded-2xl shadow-md dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] backdrop-blur-sm border border-white/20 dark:border-deepDark/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-full object-contain dark:invert"
                />
              </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Tools
