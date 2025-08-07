import { FaLinkedin, FaBehance, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const iconList = [
    {
      icon: <FaLinkedin />,
      link: 'https://linkedin.com/in/umair-hassan',
    },
    {
      icon: <FaBehance />,
      link: 'https://behance.net/umair-hassan',
    },
    {
      icon: <FaEnvelope />,
      link: 'mailto:umairhassan@example.com',
    },
  ];

  return (
    <footer
      className={`py-6 px-4 flex flex-col md:flex-row items-center justify-between ${
        theme ? 'bg-[#0d1b2a]' : 'bg-[#e0e1dd]'
      }`}
    >
      <p
        className={`text-sm ${
          theme ? 'text-[#e0e1dd]' : 'text-[#0d1b2a]'
        }`}
      >
        &copy; {new Date().getFullYear()} Umair Hassan — All Rights Reserved.
      </p>
      <div className="flex gap-6 mt-4 md:mt-0">
        {iconList.map(({ icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl ${
              theme ? 'text-[#e0e1dd]' : 'text-[#0d1b2a]'
            }`}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;