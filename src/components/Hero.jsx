import React from 'react';
import heroimage from '../assets/about.jpg';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] min-h-[70vh] mx-auto py-16 px-4 items-center"
      id="hero"
    >
      {/* Profile Image with AOS */}
      <div
        className="col-span-1 mx-auto w-[300px] h-auto lg:w-[400px]"
        data-aos="fade-right"
      >
        <img
          className="mx-auto rounded-xl py-8 md:py-0"
          src={heroimage}
          alt="Hero"
          width={300}
          height={300}
        />
      </div>

      {/* Text Section with AOS */}
      <div className="col-span-2 px-5 my-auto" data-aos="fade-left">
        <h1 className="text-orange text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
          <span className="primary-color">I’m a</span>
          <br />
          <TypeAnimation
            sequence={['Mobile Dev', 1000, 'Designer', 1000, 'Software Engineer', 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="type-animation-color"
          />
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl max-w-xl">
          My name is Himashi Rathnayake and I am seeking an internship in Associate Software Engineering.
        </p>

        <div className="my-8 flex flex-wrap gap-4">
          <a
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold shadow-md hover:scale-105 hover:shadow-orange-400 transition-transform duration-300"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-gray-400 text-white hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-transparent transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
