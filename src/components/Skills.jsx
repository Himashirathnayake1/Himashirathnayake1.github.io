import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import flutter from '../assets/flutter.png'
import firebase from '../assets/firebase.png'
import postman from '../assets/postman.png'
import agora from '../assets/agora.png'
import deepgram from '../assets/deepgram.png'
import ai from '../assets/ai.png'
import { useTheme } from '../context/ThemeContext'

const Skills = () => {
    const { isDark } = useTheme()
    const skills = [
        { name: 'Flutter', icon: flutter },
        { name: 'React', icon: react },
        { name: 'JavaScript', icon: javascript },
        { name: 'Firebase', icon: firebase },
        { name: 'HTML', icon: html },
        { name: 'CSS', icon: css },
         { name: 'Postman', icon: postman },
        { name: 'Agora', icon: agora },
            { name: 'Deepgram', icon: deepgram },
            { name: 'Gemini', icon: ai },

    ];

    return (
        <section className="max-w-[1200px] mx-auto px-4 my-10" id="skills">
            <style>{`
                @keyframes float-up {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                .float-animate {
                    animation: float-up 3s ease-in-out infinite;
                }
            `}</style>
            <div className={`section-shell rounded-3xl p-6 md:p-10 transition-colors duration-300 ${
                isDark
                    ? 'bg-slate-800/60 border border-slate-700/50'
                    : 'bg-slate-50 border border-slate-200/50 shadow-md'
            }`} data-aos="fade-up">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <p className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}>Capabilities</p>
                        <h2 className={`display-font text-3xl md:text-4xl font-bold mt-2 transition-colors duration-300 ${
                            isDark ? 'text-slate-100' : 'text-slate-900'
                        }`}>
                            Tech Stack
                        </h2>
                    </div>
                  
                </div>

                {/* Mobile/Tablet: Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4 mt-8">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`float-animate rounded-xl border p-4 text-center hover:-translate-y-1 transition-all duration-300 ${
                                isDark
                                    ? 'border-slate-700 bg-slate-900/50 hover:border-cyan-300/50'
                                    : 'border-slate-300 bg-white hover:border-cyan-400/50 shadow-sm'
                            }`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="mx-auto h-14 w-14 object-contain"
                            />
                            <p className={`mt-3 text-sm font-semibold transition-colors duration-300 ${
                                isDark ? 'text-slate-100' : 'text-slate-900'
                            }`}>{skill.name}</p>
                        </div>
                    ))}
                </div>

                {/* Desktop: Horizontal Scrolling Row */}
                <div className="hidden lg:block mt-8">
                    <div className={`overflow-x-auto pb-2 ${
                        isDark
                            ? '[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-slate-600 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-500'
                            : '[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-slate-200 [&::-webkit-scrollbar-thumb]:bg-slate-400 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-500'
                    }`}>
                        <div className="flex gap-4 min-w-full">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={`float-animate flex-shrink-0 rounded-xl border p-4 text-center hover:-translate-y-1 transition-all duration-300 w-32 ${
                                        isDark
                                            ? 'border-slate-700 bg-slate-900/50 hover:border-cyan-300/50'
                                            : 'border-slate-300 bg-white hover:border-cyan-400/50 shadow-sm'
                                    }`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={64}
                                        height={64}
                                        className="mx-auto h-14 w-14 object-contain"
                                    />
                                    <p className={`mt-3 text-sm font-semibold transition-colors duration-300 ${
                                        isDark ? 'text-slate-100' : 'text-slate-900'
                                    }`}>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;