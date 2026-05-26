import React from 'react';
import heroimage from '../assets/about.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const highlights = [
    { label: 'Focus', value: 'Associate Software Engineer' },
    { label: 'Core', value: 'Flutter and Firebase' },
    { label: 'Strength', value: 'Practical Product Thinking' },
  ];

  return (
    <div
      className="max-w-[1200px] mx-auto px-4 pt-10 pb-8"
      id="hero"
    >
      <div className="section-shell rounded-3xl p-6 md:p-10 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center page-intro">
        <div className="lg:col-span-3" data-aos="fade-right">
         

          <h1 className="display-font text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-100">
            Hi, I am <span className="primary-color">Himashi Rathnayake</span>
          </h1>

          <div className="display-font mt-4 text-2xl sm:text-3xl font-bold text-slate-100 min-h-[48px]">
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

          <p className="text-slate-300 text-base sm:text-lg my-6 max-w-2xl leading-relaxed">
          Software Developer focused on building solutions that solve real-world problems. I design and develop clean apps using Flutter, Firebase, and modern APIs and Technologies, with a strong focus on improving user experience, efficiency, and scalability.
          </p>

          <div className="my-8 flex flex-wrap gap-4">
            <a
              href="#project"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 font-bold shadow-md hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-500 text-slate-100 hover:bg-slate-800/80"
            >
              Contact Me
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-700 bg-slate-900/60 p-3">
                <p className="text-xs uppercase tracking-wider text-slate-400">{item.label}</p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 mx-auto w-full max-w-[360px]" data-aos="fade-left">
          <img
            className="mx-auto rounded-2xl border border-slate-700 shadow-xl"
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
