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

        <div className="mt-6">
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-amber-400"><FaBriefcase /></div>
              <div>
                <h3 className="text-xl font-bold">Intern Software Engineer — Ideacipher (Pvt) Ltd</h3>
                <p className="text-sm text-slate-400">2025 — 2026</p>
                <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
                  <li>Developed and maintained cross-platform mobile applications using Flutter.</li>
                  <li>Integrated Firebase services (Authentication, Firestore, Analytics).</li>
                  <li>Worked with REST APIs and third-party integrations (Agora, Deepgram, Gemini).</li>
                  <li>Improved UI/UX, app performance and responsiveness.</li>
                  <li>Collaborated with team members on feature development and deployments.</li>
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
