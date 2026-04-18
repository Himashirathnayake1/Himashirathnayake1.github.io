import React from 'react';

const Contact = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 my-10" id="contact">
      <div className="section-shell rounded-3xl p-6 md:p-10" data-aos="fade-up">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <h2 className="display-font text-3xl md:text-4xl font-bold leading-tight primary-color mt-2">
            Let us Build Something Great
          </h2>
          <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
            Open to internship and junior opportunities in software engineering, mobile development, and
            frontend product teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 mt-8">
          <div className="lg:col-span-2 rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
            <h3 className="display-font text-2xl text-slate-100 font-bold">Quick Contact</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p>
                Email:{' '}
                <a href="mailto:himashirathnayake182@gmail.com" className="text-cyan-300 hover:underline">
                  himashirathnayake182@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/himashi-rathnayake-118961290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  himashi-rathnayake
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com/Himashirathnayake1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  @Himashirathnayake1
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-slate-700 bg-slate-900/50 shadow-lg">
              <div className="p-6 md:p-8">
                <form action="https://getform.io/f/anllnnea" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-slate-900/70 w-full px-4 py-3 text-slate-200 placeholder-slate-500 border border-slate-700 rounded-md focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your email"
                        className="bg-slate-900/70 w-full px-4 py-3 text-slate-200 placeholder-slate-500 border border-slate-700 rounded-md focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <textarea
                        name="message"
                        placeholder="Tell me about your project or opportunity"
                        rows="6"
                        className="bg-slate-900/70 w-full px-4 py-3 text-slate-200 placeholder-slate-500 border border-slate-700 rounded-md focus:outline-none focus:border-cyan-400"
                      ></textarea>
                    </div>

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="text-base w-full p-3 mt-1 rounded-md text-slate-900 font-bold bg-gradient-to-r from-amber-400 to-cyan-400 hover:brightness-105"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
