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
            className="group section-shell relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_25px_70px_rgba(34,211,238,0.18)]"
            data-aos="zoom-in"
            data-aos-delay={index * 90}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-amber-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <img
              src={project.image}
              alt={project.title}
              className="relative w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="relative p-6">
              <h3 className="display-font text-2xl font-bold text-slate-100 transition-colors duration-300 group-hover:text-cyan-300">
                {project.title}
              </h3>
              <p className="text-slate-300 mt-3 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 text-slate-200 transition-all duration-300 hover:border-cyan-300/60 hover:text-cyan-200"
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
                    className="rounded-lg px-4 py-2 bg-slate-100 text-slate-900 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-900/30"
                  >
                    Live
                  </a>
                ) : (
                  <Link
                    to={`/project/${project.slug}`}
                    className="rounded-lg px-4 py-2 bg-slate-100 text-slate-900 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-slate-900/30"
                  >
                    Live
                  </Link>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg px-4 py-2 bg-gradient-to-r from-amber-400 via-orange-300 to-cyan-400 text-slate-900 font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30"
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
