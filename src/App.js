import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDemo from './pages/ProjectDemo';

function AppContent() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MainPage = () => (
    <div className={`relative overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-slate-950' : 'bg-white'
    }`}>
      <div className="pointer-events-none fixed -top-20 -left-24 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none fixed top-1/3 -right-28 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Project />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 p-3 rounded-full shadow-md z-50 hover:scale-105 transition-transform duration-200"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:slug" element={<ProjectDemo />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
