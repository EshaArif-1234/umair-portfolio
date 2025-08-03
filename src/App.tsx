import React from 'react';
import Navbar from './ components/Navbar';
import Footer from './ components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Tools from './sections/Tools';
import Experience from './sections/Experience';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import { ThemeProvider } from './theme/ThemeContext';
import { motion } from 'framer-motion';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="font-sans bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-500">
        <Navbar />
        <main>
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <section id="hero"><Hero /></section>
          </motion.section>

          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="tools"><Tools /></section>
          <section id="experience"><Experience /></section>
          <section id="clients"><Clients /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;