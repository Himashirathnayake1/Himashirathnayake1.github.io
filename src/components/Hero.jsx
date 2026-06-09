import React from 'react';
import heroimage from '../assets/about.jpg';
import { TypeAnimation } from 'react-type-animation';
import { useTheme } from '../context/ThemeContext';


const Hero = () => {
  const { isDark } = useTheme();
 

  return (
    <div
      className={`max-w-[1200px] mx-auto px-4 pt-10 pb-8 transition-colors duration-300 ${
        isDark ? '' : ''
      }`}
      id="hero"
    >
      <div className={`section-shell rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center page-intro transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50'
          : 'bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/50 shadow-md'
      }`}>
        <div className="lg:col-span-3" data-aos="fade-right">
          <h1 className={`display-font text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight transition-colors duration-300 ${
            isDark ? 'text-slate-100' : 'text-slate-900'
          }`}>
            Hi, I am <span className="primary-color">Himashi Rathnayake</span>
          </h1>

          <div className={`display-font mt-4 text-2xl sm:text-3xl font-bold min-h-[48px] transition-colors duration-300 ${
            isDark ? 'text-slate-100' : 'text-slate-800'
          }`}>
            <TypeAnimation
              sequence={[
                'Mobile App Developer',
                1200,
                'Software Engineer',
                1200,
                'Creative Problem Solver',
                1200,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="type-animation-color"
            />
          </div>

          {/* Experience Highlight */}
          <div className={`my-6 rounded-xl border-2 p-5 transition-colors duration-300 ${
            isDark
              ? 'border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-transparent'
              : 'border-amber-400/40 bg-gradient-to-r from-amber-100/30 to-transparent'
          }`}>
            <p className={`text-sm font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
              isDark ? 'text-amber-300' : 'text-amber-600'
            }`}>
              01+ Years Building Real-World Projects
            </p>
            <p className={`text-base sm:text-lg font-semibold leading-relaxed transition-colors duration-300 ${
              isDark ? 'text-slate-200' : 'text-slate-800'
            }`}>
              Mobile • Web • AI Solutions
            </p>
            <p className={`text-sm mt-3 transition-colors duration-300 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Always Learning, Always Improving
            </p>
          </div>

          <p className={`text-base sm:text-lg my-6 max-w-2xl leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
Passionate about creating innovative mobile and web applications that solve real-world problems.
          </p>

          <div className="my-8 flex flex-wrap gap-4">
            <a
              href="#project"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 font-bold shadow-md hover:scale-105 transition-transform duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-xl border transition-colors duration-200 ${
                isDark
                  ? 'border-slate-500 text-slate-100 hover:bg-slate-800/80'
                  : 'border-slate-400 text-slate-900 hover:bg-slate-200'
              }`}
            >
              Contact Me
            </a>
          </div>

         
        </div>

        <div className="lg:col-span-2 mx-auto w-full max-w-[360px]" data-aos="fade-left">
          <img
            className={`mx-auto rounded-2xl border shadow-xl transition-colors duration-300 ${
              isDark ? 'border-slate-700' : 'border-slate-300'
            }`}
            src={heroimage}
            alt="Himashi Rathnayake"
            width={360}
            height={420}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
