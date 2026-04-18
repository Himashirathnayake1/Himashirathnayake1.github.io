import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#project' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="sticky top-3 z-50 max-w-[1200px] mx-auto px-4 page-intro">
      <div className="section-shell rounded-2xl text-slate-100 h-[78px] px-5 flex justify-between items-center">
        <a href="#hero" className="display-font text-2xl md:text-3xl font-bold tracking-tight">
          <span className="primary-color">Himashi</span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 text-sm font-bold hover:brightness-105"
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={handleNav}
          className="block md:hidden rounded-lg border border-slate-600 p-2"
          aria-label="Toggle navigation"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>

      <div
        className={
          nav
            ? 'md:hidden mt-3 section-shell rounded-2xl p-4 flex flex-col gap-2'
            : 'hidden'
        }
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-3 py-2 rounded-md text-slate-200 hover:bg-slate-800/80"
            onClick={() => setNav(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="mt-2 px-3 py-2 rounded-md bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 font-bold text-center"
          onClick={() => setNav(false)}
        >
          Hire Me
        </a>
      </div>
    </header>
  );
};

export default Navbar;
