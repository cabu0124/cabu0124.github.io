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
                        <div className="flex flex-wrap gap-4">
                            {siteConfig.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group relative p-2 bg-gray-800/50 border border-white/15 rounded-lg hover:bg-gray-700/50 transition-colors"
                                >
                                    <i
                                        className={`${skill.icon} text-4xl text-white/80 group-hover:text-white group-hover:scale-110 inline-block transition-transform duration-300`}
                                    ></i>
                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white/90 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}
                                    </span>
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
                    <ul className="bg-gray-900/50 border border-white/15 rounded-xl shadow-lg">
                        {siteConfig.education.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-4 p-6 ${index !== siteConfig.education.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                                    } hover:bg-gray-800/50 transition-colors`}
                            >
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-white/50">
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
                            </li>
                        ))}
                    </ul>
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
                    <ul className="bg-gray-900/50 border border-white/15 rounded-xl shadow-lg">
                        {siteConfig.experience.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-start gap-4 p-6 ${index !== siteConfig.experience.length - 1
                                    ? "border-b border-white/10"
                                    : ""
                                    } hover:bg-gray-800/50 transition-colors`}
                            >
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-white/50">
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
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;