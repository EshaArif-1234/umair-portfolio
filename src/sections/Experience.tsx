'use client';
import React from 'react';
import { useTheme } from '../theme/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();

  const experiences = [
    {
      role: 'Medical Biller & Coder',
      company: 'ABC Health Systems',
      duration: 'Jan 2021 – Present',
      description:
        'Handled insurance claims, medical coding (ICD-10, CPT), patient billing, and EHR systems for outpatient services.',
    },
    {
      role: 'Billing Assistant',
      company: 'BlueCross Medical Group',
      duration: 'Mar 2019 – Dec 2020',
      description:
        'Assisted in claim submissions, denial management, and maintaining HIPAA compliance across systems.',
    },
  ];

  return (
    <section id="experience" className={`py-20 px-6 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d1b2a] text-white' : 'bg-[#e0e1dd] text-black'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-opacity-10 border border-gray-300 dark:border-gray-700 p-5 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} — {exp.duration}</p>
                <p className="mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
          {/* 3D Sphere - Commented out to prevent rendering errors */}
          {/* <div className="h-64">
            <Canvas camera={{ position: [0, 0, 3] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[2, 2, 2]} />
              <ExperienceSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
