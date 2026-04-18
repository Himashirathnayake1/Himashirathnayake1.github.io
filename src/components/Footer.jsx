import React from 'react'

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-4 pb-10 pt-4">
      <div className="section-shell rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="display-font text-2xl font-bold primary-color">Himashi Rathnayake</p>
          <p className="text-slate-400 mt-2 text-sm">Aspiring Associate Software Engineer</p>
        </div>

        <div className="text-slate-300 text-sm space-y-2">
          <p>
            <a href="mailto:himashirathnayake182@gmail.com" className="hover:text-cyan-300">
              himashirathnayake182@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/himashi-rathnayake-118961290/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Himashirathnayake1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
