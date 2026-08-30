import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import { FaInfoCircle, FaListAlt, FaTools, FaUsers, FaBullseye } from 'react-icons/fa';

const ProjectDemo = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-cyan-400 underline">Go back</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{project.title} — Demo</h1>
          <Link to="/" className="rounded px-3 py-2 bg-slate-700 hover:bg-slate-600">Back</Link>
        </header>

        <section className="bg-slate-800 rounded-lg p-4">
          <p className="text-slate-300 mb-4">{project.description}</p>

          {project.demoFile ? (
            <div className="w-full aspect-video rounded overflow-hidden bg-black mb-4">
              <video controls className="w-full h-full object-contain">
                <source src={`/demo/${project.demoFile}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="w-full rounded-lg border border-dashed border-slate-600 bg-slate-900/70 p-6 mb-4 text-center text-slate-300">
              Demo video coming soon.
            </div>
          )}
          {/* Timeline / Workflow style single-column details */}
          {project.details && (
            <div className="mt-8 relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700/50" />
              <div className="space-y-8">
                {/* About */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-2xl text-amber-400 border border-slate-700">
                    <FaInfoCircle />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">About</h4>
                    <p className="text-slate-300 mt-2" dangerouslySetInnerHTML={{ __html: project.details.about.replace(/\n/g, '<br/>') }} />
                  </div>
                </div>

                {/* Key Features */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-2xl text-cyan-400 border border-slate-700">
                    <FaListAlt />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">Key Features</h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      {project.details.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-2xl text-emerald-400 border border-slate-700">
                    <FaTools />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">Technologies</h4>
                    <ul className="mt-3 space-y-2 text-slate-300">
                      {project.details.technologies.map((t) => (
                        <li key={t.name} className="flex justify-between border-b border-slate-700 pb-1">
                          <span>{t.name}</span>
                          <strong className="text-slate-100">{t.value}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* User Roles */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-2xl text-violet-400 border border-slate-700">
                    <FaUsers />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">User Roles</h4>
                    <div className="mt-3 space-y-4 text-slate-300">
                      {Object.entries(project.details.userRoles).map(([role, items]) => (
                        <div key={role}>
                          <h5 className="font-semibold">{role}</h5>
                          <ul className="list-disc list-inside mt-1">
                            {items.map((it) => (
                              <li key={it} className="text-slate-300">{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Objectives */}
                <div className="relative pl-14">
                  <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-2xl text-pink-400 border border-slate-700">
                    <FaBullseye />
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-bold text-lg">Project Objectives</h4>
                    <ul className="mt-3 list-disc list-inside text-slate-300">
                      {project.details.objectives.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );

};

export default ProjectDemo;

            