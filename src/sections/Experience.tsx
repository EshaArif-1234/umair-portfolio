'use client';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Experience.css';

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
    title: 'AR Executive',
    company_name: 'IPS Pakistan (Information Process Solutions)',
    date: 'May 2023 - Present',
    icon: '/assets/images/IPS.png',
    iconBg: '#E6DEDD',
    points: [
      'Ensuring efficient operations by overseeing claim follow-ups from submission to resolution, including denials and payment processing.',
      'Managing accounts receivable for multiple practices within the organization.',
      'Providing comprehensive support across various departments to maintain smooth financial operations.',
      'Resolving billing discrepancies and ensuring timely reimbursements.',
    ],
  },
  {
    title: 'Senior Customer Care Representative',
    company_name: 'Speridian Technologies',
    date: 'January 2023 - May 2023',
    icon: '/assets/images/speridian.svg',
    iconBg: '#E6DEDD',
    points: [
      'Demonstrated exceptional proficiency in addressing complex customer inquiries and resolving issues promptly.',
      'Led and supported a team while mentoring junior representatives to enhance performance.',
      'Contributed to process improvements to enhance customer satisfaction and operational efficiency.',
      'Adapted quickly to a fast-paced BPO call center environment, handling multiple tasks effectively.',
    ],
  },
  {
    title: 'Senior Medical Biller (VOB)',
    company_name: 'HQ Analytics',
    date: 'December 2021 - December 2022',
    icon: '/assets/images/HQ-Analytics.png',
    iconBg: '#E6DEDD',
    points: [
      'Accurately processed and documented medical claims, ensuring compliance with industry standards.',
      'Analyzed insurance systems and verified patient benefits for accurate billing.',
      'Collaborated with healthcare providers and insurance companies to resolve billing discrepancies.',
      'Improved overall revenue cycle efficiency through meticulous attention to detail and timely follow-ups.',
    ],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { theme } = useTheme();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme ? '#1d1836' : '#fff',
        color: '#fff',
        border: theme ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        boxShadow: theme 
          ? '0 4px 20px rgba(0,0,0,0.2)' 
          : '0 4px 20px rgba(0,0,0,0.05)',
      }}
      contentArrowStyle={{
        borderRight: theme 
          ? '7px solid rgba(255,255,255,0.1)' 
          : '7px solid rgba(0,0,0,0.05)',
      }}
      date={experience.date}
      dateClassName={`text-sm sm:text-base font-medium ${theme ? 'text-gray-300' : 'text-gray-600'}`}
      iconStyle={{ 
        background: experience.iconBg,
        boxShadow: '0 0 0 4px rgba(0,0,0,0.1)'
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full p-1">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[50%] h-[50%] object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/images/default-company.svg';
            }}
          />
        </div>
      }
    >
      <div className="space-y-1">
        <h3 className={`text-xl sm:text-2xl font-bold ${theme ? 'text-white' : 'text-deepDark'}`}>
          {experience.title}
        </h3>
        <p className={`text-sm sm:text-base font-semibold ${theme ? 'text-indigo-300' : 'text-indigo-600'}`}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-4 space-y-2 text-sm sm:text-base">
        {experience.points.map((point: string, i: number) => (
          <li 
            key={`experience-point-${i}`}
            className={`relative pl-5 ${theme ? 'text-gray-200' : 'text-gray-700'}`}
          >
            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
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
    <section id="experience" className={`py-16 sm:py-20 md:py-24 ${theme ? 'bg-dark text-white' : 'bg-light text-deepDark'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Work Experience
          </h2>
          <p className="text-base sm:text-lg md:text-xl">
            My professional journey in medical billing and revenue cycle management
          </p>
        </motion.div>

        <div className="experience-timeline">
          <VerticalTimeline
            lineColor={theme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
            className={theme ? 'dark' : ''}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
