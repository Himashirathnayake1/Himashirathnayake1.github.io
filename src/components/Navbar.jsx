import React, { useState, useEffect, useMemo } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const { isDark } = useTheme();

  const navItems = useMemo(
    () => [
      { label: 'Home', href: '#hero' },
      { label: 'Skills', href: '#skills' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#project' },
      { label: 'Contact', href: '#contact' },
    ],
    []
  );

  const socialLinks = [
    {
      icon: FiGithub,
      url: 'https://github.com/Himashirathnayake1',
      label: 'GitHub',
      ariaLabel: 'Visit GitHub profile',
    },
    {
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/himashi-rathnayake-118961290/',
      label: 'LinkedIn',
      ariaLabel: 'Visit LinkedIn profile',
    },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  // Track scroll for active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const isActive = (href) => activeSection === href.substring(1);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 rounded-2xl backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-slate-900/70 border border-slate-700/50 shadow-lg'
              : 'bg-white/70 border border-slate-200/50 shadow-lg'
            : isDark
            ? 'bg-slate-900/40 border border-slate-700/30 shadow-md'
            : 'bg-white/40 border border-slate-200/30 shadow-md'
        }`}
      >
        <div className="h-[68px] px-6 flex justify-between items-center">
          {/* Logo / Home */}
        

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${
                  isActive(item.href)
                    ? isDark
                      ? 'text-amber-300'
                      : 'text-amber-600'
                    : isDark
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
                {/* Underline animation */}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-cyan-400 rounded-full transition-all duration-300 ${
                    isActive(item.href) ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Right Side: Theme Toggle, Social Icons, Contact Button */}
          <div className="flex items-center gap-3">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center gap-2 border-l border-r mx-2 px-3 py-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                      isDark
                        ? 'text-slate-400 hover:text-amber-300 hover:bg-slate-800/80'
                        : 'text-slate-600 hover:text-amber-600 hover:bg-slate-100'
                    }`}
                    title={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Theme Toggle */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Contact Button - Desktop */}
            <a
              href="#contact"
              className="hidden sm:inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 text-slate-900 text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={handleNav}
              className={`lg:hidden rounded-lg p-2 transition-all duration-300 ${
                isDark
                  ? 'text-slate-300 hover:bg-slate-800/80'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle navigation"
            >
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          nav ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`mx-4 mt-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
            isDark
              ? 'bg-slate-900/70 border-slate-700/50'
              : 'bg-white/70 border-slate-200/50'
          }`}
        >
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isActive(item.href)
                    ? isDark
                      ? 'bg-slate-800/80 text-amber-300'
                      : 'bg-slate-100 text-amber-600'
                    : isDark
                    ? 'text-slate-300 hover:bg-slate-800/50'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setNav(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Social Icons */}
            <div className="px-4 py-3 border-t border-slate-700/30">
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 hover:text-amber-300'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-amber-600'
                      }`}
                    >
                      <Icon size={18} />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="px-4 py-3 border-t border-slate-700/30">
              <ThemeToggle />
            </div>

            {/* Mobile Contact Button */}
            <a
              href="#contact"
              className="mx-4 my-3 px-4 py-3 rounded-lg bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400 text-slate-900 text-sm font-bold text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setNav(false)}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
