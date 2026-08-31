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
import php from '../assets/php.png'
import sql from '../assets/sql.png'
import { useTheme } from '../context/ThemeContext'

const Skills = () => {
    const { isDark } = useTheme()
    const skills = [
        { name: 'Flutter', icon: flutter },
        { name: 'React', icon: react },
        { name: 'JavaScript', icon: javascript },
        { name: 'PHP', icon: php },
        { name: 'SQL', icon: sql },
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
                            className={`float-animate group rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)] ${
                                isDark
                                    ? 'border-slate-700 bg-slate-900/50'
                                    : 'border-slate-300 bg-white shadow-sm'
                            }`}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                                className="mx-auto h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                            <p className={`mt-3 text-sm font-semibold transition-colors duration-300 ${
                                isDark ? 'text-slate-100 group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
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
                                    className={`float-animate group flex-shrink-0 rounded-xl border p-4 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)] w-32 ${
                                        isDark
                                            ? 'border-slate-700 bg-slate-900/50'
                                            : 'border-slate-300 bg-white shadow-sm'
                                    }`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width={64}
                                        height={64}
                                        className="mx-auto h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <p className={`mt-3 text-sm font-semibold transition-colors duration-300 ${
                                        isDark ? 'text-slate-100 group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
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