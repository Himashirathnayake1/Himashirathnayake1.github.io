import React from 'react';
import { FiZap, FiTrendingUp, FiEye, FiBookOpen, FiUsers } from 'react-icons/fi';
import aboutimage from '../assets/about.jpg';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const highlights = [
    {
      title: 'End-to-End Solutions',
      description: 'Full-stack mindset across mobile, web, and AI applications',
      icon: FiZap,
    },
    {
      title: 'Performance & Scale',
      description: 'Optimized architectures designed to handle real-world demands',
      icon: FiTrendingUp,
    },
    {
      title: 'User Experience First',
      description: 'Clean interfaces and intuitive designs are non-negotiable',
      icon: FiEye,
    },
    {
      title: 'Continuous Learner',
      description: 'Passionate about mastering emerging technologies and patterns',
      icon: FiBookOpen,
    },
    {
      title: 'Collaborative Builder',
      description: 'Thrives in team environments with strong communication skills',
      icon: FiUsers,
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto my-10 px-4" id="about">
      <div className="section-shell rounded-3xl p-6 md:p-10 md:grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left" data-aos="fade-right">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile</p>
          <h2 className="display-font text-3xl md:text-4xl font-bold mt-2 primary-color">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed text-slate-300 mt-5">
I am a Software Developer passionate about building cross-platform mobile, web, and AI-powered applications. I focus on creating clean, scalable, and user-friendly digital solutions with modern technologies. I enjoy solving real-world problems and continuously improving my development skills.
          </p>

          {/* Visually Enhanced Highlights */}
          <div className="mt-8 space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const gradients = [
                'from-amber-400 to-amber-500',
                'from-orange-400 to-amber-500',
                'from-rose-400 to-orange-400',
                'from-cyan-400 to-blue-500',
                'from-blue-400 to-cyan-500',
              ];
              const bgGradient = gradients[index];

              return (
                <div
                  key={item.title}
                  className={`group relative pl-4 py-3 transition-all duration-300 cursor-pointer ${
                    isDark ? 'hover:bg-slate-900/30' : 'hover:bg-slate-100/40'
                  }`}
                >
                  {/* Gradient Left Accent Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${bgGradient} rounded-full transition-all duration-300 group-hover:w-1.5`}
                  />

                  {/* Number Badge */}
                  <div className={`absolute -left-3 -top-2 w-6 h-6 rounded-full bg-gradient-to-r ${bgGradient} flex items-center justify-center text-xs font-bold text-white shadow-md`}>
                    {index + 1}
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <Icon
                      className={`mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                        isDark ? 'text-amber-400' : 'text-amber-600'
                      }`}
                      size={22}
                    />
                    <div className="flex-1">
                      <h4
                        className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-slate-100' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${
                          isDark ? 'text-slate-400' : 'text-slate-300'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-left" className="flex justify-center">
          <img
            className="mx-auto rounded-2xl border border-slate-700 shadow-xl"
            src={aboutimage}
            alt="About Himashi Rathnayake"
            width={380}
            height={420}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
