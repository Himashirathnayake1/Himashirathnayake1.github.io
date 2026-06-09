import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-lg border transition-all duration-300 ease-in-out transform hover:scale-110 ${
        isDark
          ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
          : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200'
      }`}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <div className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
          <FaMoon size={18} />
        </div>
        <div className={`absolute transition-all duration-300 ${!isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
          <FaSun size={18} />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
