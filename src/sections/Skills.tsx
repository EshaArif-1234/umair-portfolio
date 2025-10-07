import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

const skills: string[] = [
  'Medical Coding',
  'Insurance Verification',
  'enrollment verification ',
  'Null',
  'Authorization',
  'EHR Systems',
  'ICD-10/CPT Codes',
  'HIPAA Compliance',
]

const Skills: React.FC = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="relative w-full min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-light to-light/80 dark:from-deepDark dark:to-dark/80 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 sm:-top-24 -left-16 sm:-left-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 sm:-bottom-24 -right-16 sm:-right-24 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-deepDark dark:text-light mb-3 sm:mb-4 drop-shadow-lg dark:drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]">
            My Skills
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-dark/90 dark:text-light/80 max-w-3xl mx-auto leading-relaxed px-2">
            Core competencies that support billing excellence and optimize healthcare revenue cycles.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="relative z-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-deepDark/80 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] backdrop-blur-sm border border-white/20 dark:border-deepDark/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <p className="text-base sm:text-lg font-medium sm:font-semibold text-primary dark:text-primaryLight leading-tight px-2 py-1 sm:px-3 sm:py-1.5 rounded-md bg-primary/5 dark:bg-primaryLight/10 inline-block">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Background Animation - Only show on larger screens */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0 opacity-10 lg:opacity-20 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
              <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial color="#415a77" />
              </mesh>
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate />
          </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Skills
