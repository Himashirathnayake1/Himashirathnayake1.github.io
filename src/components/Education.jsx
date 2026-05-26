import React from 'react';

const Education = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 my-10" id="education">
      <div className="section-shell rounded-3xl p-6 md:p-10" data-aos="fade-up">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Education</p>
          <h2 className="display-font text-3xl md:text-4xl font-bold text-slate-100 mt-2">Education & Certifications</h2>
        </div>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
            <h3 className="font-bold">NDT in Information Technology</h3>
            <p className="text-slate-400">Institute of Technology, University of Moratuwa — 2021 - Present</p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
            <h3 className="font-bold">G.C.E. Advanced Level</h3>
            <p className="text-slate-400">Physical Science Stream — Poramadulla Central College</p>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Education;
