import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
const Experience = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 my-10" id="experience">
      <div className="section-shell rounded-3xl p-6 md:p-10" data-aos="fade-up">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Career</p>
            <h2 className="display-font text-3xl md:text-4xl font-bold text-slate-100 mt-2">Work Experience</h2>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <div className="group rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_18px_45px_rgba(34,211,238,0.12)]">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-amber-400 transition-transform duration-300 group-hover:scale-110"><FaBriefcase /></div>
              <div>
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-cyan-300">Mobile Developer Intern — Shield Technologies (Pvt) Ltd</h3>
                <p className="text-sm text-slate-400">2025</p>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                  <li>Developed Flutter apps with responsive interfaces, dynamic theming, and Firebase integration.</li>
                  <li>Contributed to BeautyQatar and Rimotkiii.</li>
                  <li>Collaborated through GitHub, Figma prototyping, and structured documentation.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="group rounded-xl border border-slate-700 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_18px_45px_rgba(34,211,238,0.12)]">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-amber-400 transition-transform duration-300 group-hover:scale-110"><FaBriefcase /></div>
              <div>
                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-cyan-300">Mobile Developer Intern — Ideacipher (Pvt) Ltd</h3>
                <p className="text-sm text-slate-400">2026</p>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                  <li>Developed and maintained cross-platform Flutter applications integrated with REST APIs.</li>
                  <li>Integrated Firebase services and AI voice features using Agora RTC, Deepgram, and Gemini LLM.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
