import React from 'react';
import aboutimage from '../assets/about.jpg';

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-16 px-4" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16 gap-8 items-center">
        
        {/* Text Section with AOS */}
        <div
          className="text-left flex flex-col justify-center py-6 md:py-0"
          data-aos="fade-right"
        >
          <div className="mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg leading-relaxed text-gray-300">
              Developer skilled in Flutter for cross-platform app development, Node.js for backend services,
              and MongoDB for efficient data management. Experienced in designing and deploying scalable
              applications that meet both user needs and business objectives. Proficient in API integration
              to enhance functionality and user experience. Passionate about leveraging industry trends to
              build innovative solutions. Seeking an internship to apply technical expertise and contribute
              to impactful, real-world projects.
            </p>
          </div>
        </div>

        {/* Image with AOS */}
        <div data-aos="fade-left">
          <img
            className="mx-auto rounded-xl py-8 md:py-0"
            src={aboutimage}
            alt="About"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
