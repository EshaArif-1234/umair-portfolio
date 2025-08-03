import React from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

const skills: string[] = [
  'Medical Coding',
  'Insurance Verification',
  'Claim Submission',
  'Accounts Receivable',
  'Denial Management',
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
    <section id="skills" className="relative w-full min-h-screen px-4 pt-20 pb-8 bg-gradient-to-b from-light to-light/80 dark:from-deepDark dark:to-dark/80 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
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
          My Skills
        </h2>
        <p className="text-lg md:text-xl text-dark dark:text-light/80 max-w-3xl mx-auto leading-relaxed">
          Core competencies that support billing excellence and optimize healthcare revenue cycles.
        </p>
      </motion.div>

      {/* Skills List */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white/80 dark:bg-deepDark/80 p-6 rounded-2xl shadow-lg dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] text-center transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_6px_16px_rgba(255,255,255,0.15)] backdrop-blur-sm border border-white/20 dark:border-deepDark/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg font-semibold text-primary dark:text-primaryLight leading-tight px-2 py-1 rounded-md bg-primary/5 dark:bg-primaryLight/10 inline-block">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
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
    </section>
  )
}

export default Skills
