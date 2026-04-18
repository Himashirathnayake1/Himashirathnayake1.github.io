import React from 'react';
import aboutimage from '../assets/about.jpg';

const About = () => {
  const strengths = [
    'Cross-platform development with Flutter and Firebase',
    'Frontend development with responsive design',
    'API integration and real-world product problem solving',
    'Strong collaboration mindset for internship and junior team roles',
  ];

  return (
    <section className="max-w-[1200px] mx-auto my-10 px-4" id="about">
      <div className="section-shell rounded-3xl p-6 md:p-10 md:grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left" data-aos="fade-right">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Profile</p>
          <h2 className="display-font text-3xl md:text-4xl font-bold mt-2 primary-color">About Me</h2>
          <p className="text-base lg:text-lg leading-relaxed text-slate-300 mt-5">
          I’m a Software Developer passionate about building cross-platform and AI-powered applications. I specialize in creating clean, user-friendly interfaces and developing high-performance apps using Flutter, Firebase, and modern API integrations.

I enjoy solving real-world problems through technology and continuously learning new tools to build impactful digital solutions.
          </p>

          <ul className="mt-6 space-y-3">
            {strengths.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-3 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
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
