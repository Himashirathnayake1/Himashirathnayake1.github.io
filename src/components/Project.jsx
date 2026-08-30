import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const Project = () => {

  return (
    <section className="max-w-[1200px] mx-auto px-4 my-10" id="project">
      <div className="pb-8" data-aos="fade-up">

        <h2 className="display-font text-3xl md:text-4xl mt-2 font-bold primary-color">Featured Projects</h2>
       
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="section-shell rounded-2xl overflow-hidden hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay={index * 90}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

            <div className="p-6">
              <h3 className="display-font text-2xl font-bold text-slate-100">{project.title}</h3>
              <p className="text-slate-300 mt-3 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-4 py-2 bg-slate-100 text-slate-900 font-semibold hover:bg-white"
                  >
                    Live
                  </a>
                ) : (
                  <Link
                    to={`/project/${project.slug}`}
                    className="rounded-lg px-4 py-2 bg-slate-100 text-slate-900 font-semibold hover:bg-white"
                  >
                    Live
                  </Link>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-4 py-2 bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-900 font-bold"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
