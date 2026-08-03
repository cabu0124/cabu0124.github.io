import SectionHeader from "../components/section-header";
import grainImage from "../assets/images/grain.jpg";
import CheckIcon from "../assets/icons/check-mark.svg?react"

import { siteConfig } from "../app/config"

const About = () => {

    return (
        <div className="relative py-10 md:py-16 lg:py-20 text-white overflow-x-clip">
            {/* Fondo con grano */}
            <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage})`,
                    }}
                ></div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                {/* Introducción principal con SectionHeader */}
                <SectionHeader
                    label={siteConfig.about.label}
                    title="About Me"
                    description={siteConfig.about.description}
                />

                {/* Subsección de Fortalezas y Habilidades */}
                <div className="mt-12 grid grid-cols-1 sm:justify-items-center md:grid-cols-[30%_70%] gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white/90">My Strengths</h3>
                        <ul className="space-y-2">
                            {["Team Work", "Creativity", "Motivator & Leader"].map((strength) => (
                                <li key={strength} className="flex items-center gap-2 text-white/70">
                                    <CheckIcon className="text-icon size-5" />
                                    {strength}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-white/90">Languages and Tools</h3>
                        <div className="flex flex-col gap-6">
                            {siteConfig.skillGroups.map((group) => (
                                <div key={group.label}>
                                    <p className="text-sm font-bold uppercase tracking-wide text-m3-primary mb-2">{group.label}</p>
                                    <div className="flex flex-wrap gap-4">
                                        {group.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group relative p-2 bg-m3-surface-container-high/50 border border-white/15 rounded-lg hover:bg-m3-surface-container-high transition-colors"
                                            >
                                                <i
                                                    className={`${skill.icon} text-4xl text-white/80 group-hover:text-white group-hover:scale-110 inline-block transition-transform duration-300`}
                                                ></i>
                                                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-m3-surface-container-high text-white/90 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Subsección de Educación */}
                <div className="mt-16">
                    <div className="flex justify-center text-2xl md:text-3xl mb-4">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-label to-white text-transparent bg-clip-text">
                            My Education
                        </p>
                    </div>
                    <p className="text-center text-white/60 mb-8">
                        A summary of my academic journey and qualifications.
                    </p>
                    <div className="relative pl-7">
                        <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-white/15"></div>
                        {siteConfig.education.map((item, index) => (
                            <div key={index} className="relative pb-7 last:pb-0">
                                <div className="absolute -left-7 top-1 size-4 rounded-full bg-m3-primary ring-4 ring-m3-background"></div>
                                <div className="bg-m3-surface-container/60 border border-white/15 rounded-xl shadow-lg p-6 hover:bg-m3-surface-container-high/60 transition-colors">
                                    <div className="text-sm font-semibold text-m3-primary">
                                        {item.period}
                                    </div>
                                    <div className="text-lg font-semibold text-white/90 mt-1">
                                        {item.title}
                                    </div>
                                    <div className="text-sm uppercase font-semibold text-white/60">
                                        {item.institution}
                                    </div>
                                    <ul className="mt-2 text-white/70 text-sm list-disc list-inside space-y-1">
                                        {item.description.map((desc, i) => (
                                            <li
                                                key={i}
                                                dangerouslySetInnerHTML={{ __html: desc }}
                                            />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subsección de Experiencia Laboral */}
                <div className="mt-16">
                    <div className="flex justify-center text-2xl md:text-3xl mb-4">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-label to-white text-transparent bg-clip-text">
                            My Experience
                        </p>
                    </div>
                    <p className="text-center text-white/60 mb-8">
                        A summary of my professional journey and key roles.
                    </p>
                    <div className="relative pl-7">
                        <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-white/15"></div>
                        {siteConfig.experience.map((item, index) => (
                            <div key={index} className="relative pb-7 last:pb-0">
                                <div className="absolute -left-7 top-1 size-4 rounded-full bg-m3-tertiary ring-4 ring-m3-background"></div>
                                <div className="bg-m3-surface-container/60 border border-white/15 rounded-xl shadow-lg p-6 hover:bg-m3-surface-container-high/60 transition-colors">
                                    <div className="text-sm font-semibold text-m3-tertiary">
                                        {item.period}
                                    </div>
                                    <div className="text-lg font-semibold text-white/90 mt-1">
                                        {item.title}
                                    </div>
                                    <div className="text-sm uppercase font-semibold text-white/60">
                                        {item.company}
                                    </div>
                                    <ul className="mt-2 text-white/70 text-sm list-disc list-inside space-y-1">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;