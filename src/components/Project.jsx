import React from 'react';
import TapON from '../assets/laong.jpg';
import CashApp from '../assets/cash.png';

const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="project">
      <div className="pb-8 text-center" data-aos="fade-up">
        <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div
          className="transform transition duration-500 hover:scale-105 group relative overflow-hidden shadow-lg rounded-xl"
          data-aos="zoom-in"
        >
          <img src={TapON} alt="TapOn" className="w-full h-60 object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-black/70 absolute inset-0 flex flex-col justify-center items-center transition duration-300">
            <span className="text-2xl font-bold text-white tracking-wider">TapOn</span>
            <div className="pt-6 text-center">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="rounded px-4 py-2 m-2 bg-white text-gray-800 font-semibold hover:bg-gray-200">
                  Live
                </button>
              </a>
              <a href="https://github.com/Himashirathnayake1/TapOn-original" target="_blank" rel="noopener noreferrer">
                <button className="rounded px-4 py-2 m-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className="transform transition duration-500 hover:scale-105 group relative overflow-hidden shadow-lg rounded-xl"
          data-aos="zoom-in"
        >
          <img src={CashApp} alt="Pegas Cash Management" className="w-full h-60 object-cover" />
          <div className="opacity-0 group-hover:opacity-90 bg-black/70 absolute inset-0 flex flex-col justify-center items-center transition duration-300">
            <span className="text-2xl font-bold text-white tracking-wider">Pegas Cash Management</span>
            <div className="pt-6 text-center">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <button className="rounded px-4 py-2 m-2 bg-white text-gray-800 font-semibold hover:bg-gray-200">
                  Live
                </button>
              </a>
              <a href="https://github.com/Himashirathnayake1/CashCollector-" target="_blank" rel="noopener noreferrer">
                <button className="rounded px-4 py-2 m-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold hover:opacity-90">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Project;
