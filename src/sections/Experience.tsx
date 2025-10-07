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
