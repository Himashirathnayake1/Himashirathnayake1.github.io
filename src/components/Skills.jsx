import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import flutter from '../assets/flutter.png'
import firebase from '../assets/firebase.png'

const Skills = () => {
    const skills = [
        { name: 'Flutter', icon: flutter },
        { name: 'React', icon: react },
        { name: 'JavaScript', icon: javascript },
        { name: 'Firebase', icon: firebase },
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
    ];

    return (
        <section className="max-w-[1200px] mx-auto px-4 my-10" id="skills">
            <div className="section-shell rounded-3xl p-6 md:p-10" data-aos="fade-up">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Capabilities</p>
                        <h2 className="display-font text-3xl md:text-4xl font-bold text-slate-100 mt-2">
                            Tech Stack
                        </h2>
                    </div>
                  
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="rounded-xl border border-slate-700 bg-slate-900/50 p-4 text-center hover:-translate-y-1 hover:border-cyan-300/50"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="mx-auto h-14 w-14 object-contain"
                            />
                            <p className="mt-3 text-sm font-semibold text-slate-100">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;