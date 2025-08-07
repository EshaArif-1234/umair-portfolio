'use client';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface Experience {
  title: string;
  company_name: string;
  date: string;
  icon: string;
  iconBg: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: 'Mern Stack, Wordpress',
    company_name: 'Tekvill',
    date: 'November 2023 - Present',
    icon: '/assets/tools/availty.png', 
    iconBg: '#E6DEDD',
    points: [
      'Started with WordPress at Tekvill, building responsive, SEO-friendly websites with custom themes and plugins.',
      'Expanded into MERN stack development to create full-stack web apps with dynamic user interfaces and APIs.',
      'Delivered scalable solutions like dashboards and e-commerce systems using React, Node.js, and MongoDB.',
      'Collaborated with cross-functional teams to turn real-world requirements into clean, production-ready code.',
    ],
  },
  {
    title: 'Internship',
    company_name: 'Bytewise',
    date: 'September 2023 - November 2023',
    icon: '/assets/tools/trizetto.png', 
    iconBg: '#E6DEDD',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and engineers.',
      'Assisted in deploying and testing applications to ensure quality and performance.',
    ],
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { theme } = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme ? '#1d1836' : '#fff',
        color: '#fff',
        border: theme ? '1px solid #333' : '1px solid #ddd',
      }}
      contentArrowStyle={{
        borderRight: theme ? '7px solid #232631' : '7px solid #ddd',
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className={`text-[24px] font-bold ${theme ? 'text-white' : 'text-deepDark'}`}>
          {experience.title}
        </h3>
        <p className={`text-[16px] font-semibold ${theme ? 'text-secondary' : 'text-gray-600'}`}
          style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 text-base">
        {experience.points.map((point: string, i: number) => (
          <li key={`experience-point-${i}`}
              className={`pl-1 tracking-wider ${theme ? 'text-white' : 'text-gray-700'}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section
      id="work"
      className={`relative w-full min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden ${
        theme ? 'bg-gradient-to-b from-[#1a202c] to-[#1a202c]/80' : 'bg-gradient-to-b from-dark to-dark/80'
      } text-white`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <p className="text-lg text-white">What I have done so far</p>
          <h2 className="text-4xl font-extrabold text-white">Work Experience</h2>
        </motion.div>

        <div className="flex flex-col mt-20">
          <VerticalTimeline lineColor={theme ? '#333' : '#ddd'}>
            {experiences.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
